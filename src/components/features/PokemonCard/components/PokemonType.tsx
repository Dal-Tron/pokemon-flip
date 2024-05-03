import { POKEMON_TYPE_COLORS } from "@/constants/pokemon";

export const PokemonType = ({ type }: { type: string }) => {
  return (
    <span
      className="rounded-full text-white text-xs font-semibold px-2 py-1"
      style={{ backgroundColor: POKEMON_TYPE_COLORS[type] }}
    >
      {type}
    </span>
  );
};
