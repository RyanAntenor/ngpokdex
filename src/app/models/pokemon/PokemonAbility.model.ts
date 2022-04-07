import { NameAPIResource } from "../commons/NameAPIResource";

export type PokemonAbility = {
  is_hidden: boolean;
  slot: number;
  ability: NameAPIResource;
}
