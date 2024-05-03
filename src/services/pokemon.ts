import { extractOrThrow } from "@/utils/extractOrThrow";

export const PokemonService = {
  getPokemons: async () => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon`);
      const data = await extractOrThrow(response);
      return { data };
    } catch (error) {
      return { error };
    }
  },
  getPokemon: async (id: number) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await extractOrThrow(response);
      return { data };
    } catch (error) {
      return { error };
    }
  },
};
