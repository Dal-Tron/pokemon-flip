/** @jsxImportSource @emotion/react */

import Pokemon from "./Pokemon";
import { centeredColumn } from "./styles/grid";

const PokemonSpawner = ({
  handlePokemonButtonClick,
  hasGithubUser,
  hasPokemon,
  pokemon,
}) => (
  <>
    <Pokemon pokemon={pokemon} hasPokemon={hasPokemon} />
    {hasGithubUser && !hasPokemon && (
      <div css={centeredColumn}>
        <button type="button" onClick={handlePokemonButtonClick}>
          Spawn Challenger!
        </button>
      </div>
    )}
  </>
);

export default PokemonSpawner;
