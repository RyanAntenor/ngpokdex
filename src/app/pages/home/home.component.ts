import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { from, Observable, of } from 'rxjs';
import { concatMap, map, mergeMap, startWith, switchMap, tap, toArray } from 'rxjs/operators';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
    selector: 'pkm-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],

})
export class HomeComponent implements OnInit {

    options: any[] = [{ name: 'Bulbasaur' }, { name: 'Ivysaur' }, { name: 'Venusaur' }, { name: 'Charmander' }, { name: 'Charmeleon' }];

    searchBar = new FormControl();
    filteredOptions: Observable<any[]>;

    pokemonList$: Observable<any>;
    pokemonNames: any[] = [];

    constructor(
        private pokemonService: PokemonService
    ) {

        this.filteredOptions = this.searchBar.valueChanges.pipe(
            startWith(''),
            map(value => (typeof value === 'string' ? value : value.name)),
            map(name => (name ? this._filter(name) : this.options.slice(0, 4)))
        );


        this.pokemonList$ =
            this.pokemonService.getPokemons(0, 10).pipe(
                map(pokemons => pokemons.map(p => p.name)),
                map(
                    names => from(names).pipe(
                        concatMap(n => this.pokemonService.getPokemon(n))
                    )
                ),
                concatMap(pokemonDetail => pokemonDetail),
                toArray(),
            );

    }

    ngOnInit(): void {
        // TODO: fetch all names for autocomplete
        // this.pokemonService.getPokemons(0, 150).pipe(
        //     map(pokemons => pokemons.map(p => p)),
        // ).subscribe(names => {
        //     this.pokemonNames = names;
        // });
    }

    displayFn(user: any): string {
        return user && user.name ? user.name : '';
    }

    private _filter(name: string): any[] {

        const filterValue = name.toLowerCase();
        return this.pokemonNames.filter(option => option.name.toLowerCase().includes(filterValue));
    }

    // WIP: Pagination
    // length = 10;
    // pageSize = 10;
    // pageIndex = 0;
    // pageSizeOptions = [5, 10, 25];
    // showFirstLastButtons = true;

    // handlePageEvent(event: PageEvent) {
    //     this.length = event.length;
    //     this.pageSize = event.pageSize;
    //     this.pageIndex = event.pageIndex;
    // }

}

