import { ApiPokemonData, IPokemon } from "@/types/pokemon";

export const normalizePokemonData = (
  data: ApiPokemonData | undefined
): IPokemon => {
  const stats: { [key: string]: number } =
    data?.stats?.reduce<{
      [key: string]: number;
    }>((acc, stat) => {
      const key = stat.stat.name;
      acc[key] = stat.base_stat;
      return acc;
    }, {}) || {};

  const types =
    data?.types?.map((typeObj) => {
      const typeName = typeObj.type?.name?.toLowerCase();
      return typeName;
    }) || [];

  return {
    name: data?.name || "",
    image: data?.sprites?.front_default || "",
    hp: stats.hp || 0,
    attack: stats.attack || 0,
    defense: stats.defense || 0,
    speed: stats.speed || 0,
    types,
  };
};
