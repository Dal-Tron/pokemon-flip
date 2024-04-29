/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import GithubUser from "./GithubUser";
import PokemonSpawner from "./PokemonSpawner";
import { arenaGrid, centeredColumn } from "./styles/grid";

const resetHeading = css`
  line-height: 1;
  margin-bottom: 0;
`;

// TODO: Implement fight script
const Arena = ({ githubUser, handlePokemonButtonClick, pokemon }) => {
  const hasGithubUser = githubUser.login.length > 0;
  const hasPokemon = pokemon.name.length > 0;
  return (
    <div css={arenaGrid}>
      <GithubUser githubUser={githubUser} hasGithubUser={hasGithubUser} />
      <h2 css={[centeredColumn, resetHeading]}>VS.</h2>
      <PokemonSpawner
        handlePokemonButtonClick={handlePokemonButtonClick}
        hasGithubUser={hasGithubUser}
        hasPokemon={hasPokemon}
        pokemon={pokemon}
      />
    </div>
  );
};

export default Arena;
