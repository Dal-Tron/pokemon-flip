import { create } from "zustand";

import { IPokemon } from "@/types/pokemon";

type PokemonStore = {
  isLoading: boolean;
  pokemon: IPokemon | undefined;
  pokemonCount: number;
  setPokemon: (pokemons: IPokemon) => void;
  setIsLoading: (loading: boolean) => void;
  setPokemonCount: (count: number) => void;
};

export const usePokemonStore = create<PokemonStore>((set) => ({
  isLoading: false,
  pokemon: undefined,
  pokemonCount: 0,
  setPokemon: (pokemon: IPokemon) => {
    set({ pokemon });
  },
  setIsLoading: (isLoading: boolean) => {
    set({ isLoading });
  },
  setPokemonCount: (pokemonCount: number) => {
    set({ pokemonCount });
  },
}));
