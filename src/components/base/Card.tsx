import clsx from "clsx";
import { ReactNode, useEffect, useState } from "react";

interface CardProps {
  cardFront: ReactNode;
  cardBack: ReactNode;
  className?: string;
  enableFlip?: boolean;
  isFlipped?: boolean;
}

export const Card: React.FC<CardProps> = ({
  cardFront,
  cardBack,
  className,
  enableFlip = false,
  isFlipped = false,
}) => {
  const [cardFlipped, setCardFlipped] = useState(isFlipped);

  useEffect(() => {
    setCardFlipped(isFlipped);
  }, [isFlipped]);

  const handleFlip = () => {
    if (enableFlip) {
      setCardFlipped((prev) => !prev);
    }
  };

  return (
    <div
      className={clsx("flex size-full cursor-pointer", className)}
      onClick={handleFlip}
      style={{ perspective: "1000px" }}
    >
      <div
        className="relative grow transition-transform duration-1000 ease-in-out transform"
        style={{
          transformStyle: "preserve-3d",
          transform: cardFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        <div
          className="absolute size-full"
          style={{ transform: "rotateY(0)", backfaceVisibility: "hidden" }}
        >
          <div className="relative size-full">{cardFront}</div>
        </div>

        <div
          className="absolute size-full"
          style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}
        >
          <div className="relative size-full">{cardBack}</div>
        </div>
      </div>
    </div>
  );
};
