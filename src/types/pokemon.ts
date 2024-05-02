export type ApiPokemonData = {
  name: string;
  sprites: {
    front_default: string;
  };
  stats: Array<{
    base_stat: number;
    stat: {
      name: string;
    };
  }>;
  types: Array<{
    type: {
      name: string;
    };
  }>;
};

export interface IPokemon {
  name: string;
  image: string;
  hp: number;
  attack: number;
  defense: number;
  speed: number;
  types: string[];
}
