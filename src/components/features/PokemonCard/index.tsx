import { Card } from "@/components/base/Card";
import { IPokemon } from "@/types/pokemon";

import clsx from "clsx";
import { CardBack } from "./components/CardBack";
import { CardFront } from "./components/CardFront";

const PokemonCard = ({
  enableFlip,
  pokemon,
  isMoving = false,
  isFlipped = true,
}: {
  enableFlip: boolean;
  pokemon?: IPokemon;
  isMoving?: boolean;
  isFlipped?: boolean;
}) => {
  return (
    <Card
      className={clsx("w-[250px] h-[350px] rounded-lg", {
        "animate-shake-and-pause": isMoving,
      })}
      isFlipped={isFlipped}
      cardBack={<CardBack />}
      cardFront={<CardFront pokemon={pokemon} />}
      enableFlip={pokemon && enableFlip}
    />
  );
};

export default PokemonCard;
