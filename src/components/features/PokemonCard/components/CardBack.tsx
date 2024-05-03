export const CardBack = () => {
  return (
    <div className="w-full h-full rounded-lg overflow-hidden">
      <img
        src={require("@/images/pokemonCardBack.jpeg")}
        alt="Pokemon Card Back"
        className="w-full h-full object-cover"
      />
    </div>
  );
};
