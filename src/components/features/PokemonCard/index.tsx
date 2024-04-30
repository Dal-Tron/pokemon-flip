import { Card } from "@/components/base/Card";

import { CardBack } from "./components/CardBack";
import { CardFront } from "./components/CardFront";

const PokemonCard = () => {
  return (
    <Card
      isFlipped={true}
      cardBack={<CardBack />}
      cardFront={<CardFront />}
      enableFlip={true}
    />
  );
};

export default PokemonCard;
