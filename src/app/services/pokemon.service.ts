import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from "rxjs";
import { catchError, map } from 'rxjs/operators';
import { NameAPIResource } from '../models/commons/NameAPIResource';
import { Pokemon } from '../models/pokemon/Pokemon.model';

@Injectable({
    providedIn: 'root'
})
export class PokemonService {

    baseUrl: string = "https://pokeapi.co/api/v2";

    constructor(private http: HttpClient) {

    }

    getPokemons(offset: number = 0, limit: number = 5): Observable<NameAPIResource[]> {
        return this.http.get<NameAPIResource>(`${this.baseUrl}/pokemon`, { params: { offset, limit } }).pipe(
            map((r: any) => r.results),
            catchError(this.handleError)
        );
    }

    /**
     *
     * @param uid : Pokemon name or Pokedex number
     * @returns
     */
    getPokemon(uid: string | number): Observable<Pokemon> {
        return this.http.get<Pokemon>(`${this.baseUrl}/pokemon/${uid}`).pipe(
            catchError(this.handleError)
        );
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            console.error("Opps an error ocurred!", error.error.message);
        } else {
            console.error(
                `Backend returned code ${error.status}, ` + `body was ${error.error}`
            );
        }
        return throwError("Something bad happened; please try again later.");
    }

}
