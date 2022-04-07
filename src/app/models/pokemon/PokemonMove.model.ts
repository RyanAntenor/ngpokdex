import { NameAPIResource } from "../commons/NameAPIResource"
import { PokemonMoveVersion } from "./PokemonMoveVersion.model";

export type PokemonMove = {
  move: NameAPIResource;
  version_group_details: PokemonMoveVersion[];
}
