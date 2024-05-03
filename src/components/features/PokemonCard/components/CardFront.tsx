import { IPokemon } from "@/types/pokemon";

import clsx from "clsx";
import { POKEMON_TYPE_COLORS } from "../../../../constants/pokemon";
import { darkenHex } from "../utils/darkenHex";
import { PokemonType } from "./PokemonType";

export const CardFront = ({ pokemon }: { pokemon?: IPokemon }) => {
  const { name, hp, types, image, attack, defense, speed } = pokemon || {};

  const type = types?.[0];
  const bg = type ? POKEMON_TYPE_COLORS[type] : "#ffffff";
  const darkerBg = darkenHex(bg);

  return (
    <div className="flex justify-center items-center rounded-lg bg-primary h-full w-full">
      <div
        className="w-[90%] h-[93%] space-y-2 pt-2"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${bg} 15%, ${darkerBg} 33%, #ffffff 10%)`,
        }}
      >
        <p className="bg-white text-center rounded-full font-medium text-sm mt-2 w-14 m-auto">
          HP {hp}
        </p>
        <div className="flex justify-center">
          <img
            className={clsx("size-32", {
              "rounded-full": /static|.com/i.test(image || ""),
            })}
            src={image}
            alt="Pokemon"
          />
        </div>
        <h2 className="text-center text-xl font-semibold">{name}</h2>
        <div className="flex justify-center space-x-2">
          {types?.map((type, index) => <PokemonType type={type} key={index} />)}
        </div>
        <div className="flex flex-row justify-center text-gray-600 mt-3">
          <div className="mx-2">
            <h3 className="flex justify-center font-semibold">{attack}</h3>
            <p className="text-base">Attack</p>
          </div>
          <div className="mx-2">
            <h3 className="flex justify-center font-semibold">{defense}</h3>
            <p className="text-base">Defense</p>
          </div>
          <div className="mx-2">
            <h3 className="flex justify-center font-semibold">{speed}</h3>
            <p className="text-base">Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
};
