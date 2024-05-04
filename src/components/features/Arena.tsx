import clsx from "clsx";
import { useEffect, useState } from "react";

import { PokemonService } from "@/services/pokemon";
import { usePokemonStore } from "@/stores/pokemon";
import { useUserStore } from "@/stores/user";
import { delay } from "@/utils/delay";
import { normalizePokemonData } from "@/utils/normalizePokemonData";
import { turnUserIntoAPokemon } from "@/utils/turnUserIntoAPokemon";

import PokemonCard from "./PokemonCard";
import { Button } from "../base/Button";

export const Arena = () => {
  const isUserLoading = useUserStore((state) => state.isUserLoading);
  const user = useUserStore((state) => state.user);
  const isReplacingUser = useUserStore((state) => state.isReplacingUser);
  const userPokemon = turnUserIntoAPokemon(user);
  const [isUserFlipped, setIsUserFlipped] = useState(true);

  const pokemon = usePokemonStore((state) => state.pokemon);
  const pokemonCount = usePokemonStore((state) => state.pokemonCount);
  const isPokemonLoading = usePokemonStore((state) => state.isLoading);
  const [isPokemonFlipped, setIsPokemonFlipped] = useState(true);

  const {
    setIsLoading: setIsPokemonLoading,
    setPokemon,
    setPokemonCount,
  } = usePokemonStore((state) => state);

  useEffect(() => {
    if (userPokemon?.name) setIsUserFlipped(false);
  }, [userPokemon?.name]);

  useEffect(() => {
    if (isReplacingUser) {
      setIsUserFlipped(true);
    }
  }, [isReplacingUser, setIsUserFlipped]);

  useEffect(() => {
    if (!userPokemon?.name) return;
    if (pokemon?.name) return;

    const fetchPokemons = async () => {
      setIsPokemonLoading(true);

      // // Generate a random Pokémon ID between 1 and 20
      const pokemonId = Math.floor(Math.random() * 20) + 1;

      const fetchAllPokemons = PokemonService.getPokemons();
      const fetchPokemonById = PokemonService.getPokemon(pokemonId);

      fetchAllPokemons.then(({ data, error }) => {
        if (error) {
          // TODO: Handle error appropriately / Notify User
          console.error("Failed to fetch pokemons:", error);
        } else {
          setPokemonCount(data?.count || 0);
        }
      });

      fetchPokemonById.then(({ data, error }) => {
        if (error) {
          // TODO: Handle error appropriately / Notify User
          console.error("Failed to fetch pokemon with ID:", pokemonId, error);
        } else {
          const normalizedData = normalizePokemonData(data);
          setPokemon(normalizedData);
        }
      });

      Promise.all([fetchAllPokemons, fetchPokemonById, delay(500)]).finally(
        () => {
          setIsPokemonLoading(false);
          setIsPokemonFlipped(false);
        }
      );
    };

    fetchPokemons();
  }, [
    setIsPokemonLoading,
    setPokemonCount,
    setPokemon,
    userPokemon?.name,
    pokemon?.name,
  ]);

  const handleGetNewPokemon = async () => {
    const pokemonId = Math.floor(Math.random() * pokemonCount || 20) + 1;

    setIsPokemonFlipped(true);

    const { data, error } = await PokemonService.getPokemon(pokemonId);

    if (error) {
      // TODO: Handle error appropriately / Notify User
    }

    const normalizedPokemon = normalizePokemonData(data);

    // give the flip time to finish
    await delay(500);

    setPokemon(normalizedPokemon);
    setIsPokemonLoading(true);

    // give the shake time to finish
    await delay(500);

    setIsPokemonLoading(false);
    setIsPokemonFlipped(false);
  };

  return (
    <div>
      <div className="flex space-x-4 justify-center">
        <PokemonCard
          enableFlip={true}
          isFlipped={isUserFlipped}
          isMoving={isUserLoading}
          pokemon={userPokemon}
        />
        <PokemonCard
          enableFlip={true}
          isFlipped={isPokemonFlipped}
          isMoving={isPokemonLoading}
          pokemon={pokemon}
        />
      </div>
      <div className="flex flex-col justify-center items-center space-y-4 mt-4">
        <Button
          disabled={!pokemon}
          onClick={handleGetNewPokemon}
          className={clsx(
            "bg-transparent font-semibold font-headings",
            "ml-1 rounded px-4",
            "hover:bg-primary hover:text-white hover:border-transparent"
          )}
        >
          Spawn Challenger!
        </Button>
        <Button
          disabled={!pokemon}
          onClick={handleGetNewPokemon}
          className={clsx(
            "bg-transparent font-semibold font-headings",
            "ml-1 rounded px-4",
            "hover:bg-primary hover:text-white hover:border-transparent"
          )}
        >
          Battle!
        </Button>
      </div>
    </div>
  );
};
