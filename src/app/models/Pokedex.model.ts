import { NameAPIResource } from "./commons/NameAPIResource";

export type PokedexDescription = {
    description: string;
    language: string;
}

type PokedexName = NameAPIResource;

export type pokemonentry = {
    entry_number: number;
    pokemon_species: NameAPIResource;
}

type PokedexVersionGroups = NameAPIResource[];
type PokedexesNames = NameAPIResource[];

export type Pokedexes = {
    id: number;
    locations: NameAPIResource;
    name: string;
    names: PokedexName[];
    main_generation: NameAPIResource;
    pokedexes: PokedexesNames;
    version_groups: PokedexVersionGroups;
}
