import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PokemonService } from './pokemon.service';
import { NameAPIResource } from '../models/commons/NameAPIResource';

describe('PokemonService', () => {
    let service: PokemonService;
    let httpTestingController: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ]
        });
        service = TestBed.inject(PokemonService);

        httpTestingController = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpTestingController.verify();
    });

    afterEach(() => {
        httpTestingController.verify();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should get all pokemons with default limits', done => {

        const defaultParams = "offset=0&limit=5";
        const mockResponse = {
            "count": 1126,
            "next": "https://pokeapi.co/api/v2/pokemon?offset=5&limit=5",
            "previous": null,
            "results": [
                {
                    name: 'test_one',
                    url: "https://pokeapi.co/api/v2/pokemon/1/"
                },
                {
                    name: 'test_two',
                    url: "https://pokeapi.co/api/v2/pokemon/1/"
                },
                {
                    name: 'test_three',
                    url: "https://pokeapi.co/api/v2/pokemon/1/"
                },
                {
                    name: 'test_four',
                    url: "https://pokeapi.co/api/v2/pokemon/1/"
                },
                {
                    name: 'test_five',
                    url: "https://pokeapi.co/api/v2/pokemon/1/"
                }
            ]

        }

        service.getPokemons().subscribe( resp => {
            expect(resp.length).toBe(5);
            expect(resp[0].name).toEqual('test_one');
            done();
        });

        const req = httpTestingController.expectOne({
            method: 'GET',
            url: `${service.baseUrl}/pokemon?${defaultParams}`
        });

        req.flush(mockResponse);
    });

    it('should get pokemon by name', done => {

        const pokemonName = "ditto";
        const mockResponse = {
            "name": "ditto",
            "order": 214,
            "past_types": [],
            "species": {
                "name": "ditto",
                "url": "https://pokeapi.co/api/v2/pokemon-species/132/"
            },
        }

        service.getPokemon(pokemonName).subscribe( resp => {
            expect(resp.order).toBe(214);
            expect(resp.name).toEqual(pokemonName);
            expect(resp.species.name).toEqual(pokemonName);
            done();
        });

        const req = httpTestingController.expectOne({
            method: 'GET',
            url: `${service.baseUrl}/pokemon/${pokemonName}`
        });

        req.flush(mockResponse);
    });

    it('should get all pokemon by id', done => {

        const pokemonId = 1;
        const pokemonName = "bulbasaur";
        const mockResponse = {
            "name": "bulbasaur",
            "order": 1,
            "past_types": [],
            "species": {
                "name": "bulbasaur",
                "url": "https://pokeapi.co/api/v2/pokemon-species/1/"
            },
        }

        service.getPokemon(1).subscribe((resp: any) => {
            expect(resp.order).toBe(1);
            expect(resp.name).toEqual(pokemonName);
            expect(resp.species.name).toEqual(pokemonName);
            done();
        });

        const req = httpTestingController.expectOne({
            method: 'GET',
            url: `${service.baseUrl}/pokemon/${pokemonId}`
        });

        req.flush(mockResponse);
    });

    xit('should throw error', done => {
        const defaultParams = "offset=0&limit=5";
        jest.spyOn(console, 'error');
        const mockErrorResponse = { statusCode: 400, statusText: 'Bad Request' };


        service.getPokemons().subscribe(() => {

        }, err => {
            expect(err.statusCode).toEqual(400);
            done();
        });

        const req = httpTestingController.expectOne({
            method: 'GET',
            url: `${service.baseUrl}/pokemon?${defaultParams}`
        });

        req.flush(null, {
            status: mockErrorResponse.statusCode,
            statusText: mockErrorResponse.statusText,
        });
    });


});
