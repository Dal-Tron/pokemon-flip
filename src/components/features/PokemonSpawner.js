import Pokemon from "./Pokemon";

const PokemonSpawner = ({
  handlePokemonButtonClick,
  hasGithubUser,
  hasPokemon,
  pokemon,
}) => (
  <>
    <Pokemon pokemon={pokemon} hasPokemon={hasPokemon} />
    {hasGithubUser && !hasPokemon && (
      <div>
        <button type="button" onClick={handlePokemonButtonClick}>
          Spawn Challenger!
        </button>
      </div>
    )}
  </>
);

export default PokemonSpawner;
