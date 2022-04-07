import { NameAPIResource } from "../commons/NameAPIResource";
import { PokemonAbility } from "./PokemonAbility.model";
import { PokemonMove } from "./PokemonMove.model";
import { PokemonType } from "./PokemonType.model";

export type Pokemon = {
    id: number;
    name: string;
    height: string;
    order: number;
    abilities: PokemonAbility[];
    types: PokemonType[];
    moves: PokemonMove[];
    species: NameAPIResource;
}
