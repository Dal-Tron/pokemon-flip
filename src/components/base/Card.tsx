import React, { useState } from "react";

interface CardProps {
  cardFront: React.ReactNode;
  cardBack: React.ReactNode;
  enableFlip?: boolean;
  isFlipped?: boolean;
}

export const Card: React.FC<CardProps> = ({
  cardFront,
  cardBack,
  enableFlip = false,
  isFlipped = false,
}) => {
  const [cardFlipped, setCardFlipped] = useState(isFlipped);

  const handleFlip = () => {
    if (enableFlip) {
      setCardFlipped((prev) => !prev);
    }
  };

  return (
    <div
      className="relative w-full h-full cursor-pointer"
      onClick={handleFlip}
      style={{ perspective: "1000px" }}
    >
      <div
        className="relative w-full h-full transition-transform duration-1000 ease-in-out transform"
        style={{
          transformStyle: "preserve-3d",
          transform: cardFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        <div
          className="absolute w-full h-full"
          style={{ transform: "rotateY(0)", backfaceVisibility: "hidden" }}
        >
          <div>{cardFront}</div>
        </div>

        <div
          className="absolute w-full h-full"
          style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}
        >
          <div>{cardBack}</div>
        </div>
      </div>
    </div>
  );
};
