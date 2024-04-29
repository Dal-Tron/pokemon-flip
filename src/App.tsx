/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FormEvent, useState } from "react";

import { Arena } from "@/components/features/Arena";

import fetchPokemon from "./api/fetchPokemon";
import GithubSearch from "./components/features/GithubSearch";

import "./styles/global.css";

const mainContainer = css`
  margin-left: auto;
  margin-right: auto;
  max-width: 42em;
`;

const App = () => {
  const [pokemon, updatePokemon] = useState({
    name: "",
  });
  const [githubUser, updateGithubUser] = useState({
    login: "",
  });
  const [formError, updateFormError] = useState("");

  const handleFormSubmit = async (event: FormEvent) => {
    event.preventDefault();

    // try {
    //   const result = await fetchGithubProfile(event.target.githubUser.value);
    //   updateGithubUser(result);
    // } catch (err) {
    //   updateFormError("User not found.");
    // }
  };

  const handlePokemonButtonClick = async () => {
    // TODO: fetch random pokemon
    const result = await fetchPokemon();
    updatePokemon(result);
  };

  return (
    <>
      <div css={mainContainer}>
        <header>
          <h1>Github vs. Pokemon</h1>
        </header>
        <GithubSearch
          handleFormSubmit={handleFormSubmit}
          formError={formError}
        />
        <Arena />
      </div>
    </>
  );
};

export default App;
