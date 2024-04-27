/** @jsxImportSource @emotion/react */

import { centeredColumn } from "./styles/grid";

import Pokemon from "./Pokemon";

const PokemonSpawner = ({
  handlePokemonButtonClick,
  hasGithubUser,
  hasPokemon,
  pokemon
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
