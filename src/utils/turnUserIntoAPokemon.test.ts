import { IUser } from "@/types/user";

import { turnUserIntoAPokemon } from "./turnUserIntoAPokemon";

describe("turnUserIntoAPokemon", () => {
  it("converts a user to a pokemon correctly", () => {
    const mockUser: IUser = {
      avatar_url: "http://example.com/avatar.png",
      followers: 150,
      following: 75,
      login: "john_doe",
      public_gists: 40,
      public_repos: 90,
    };

    const expectedPokemon = {
      name: "john_doe",
      image: "http://example.com/avatar.png",
      hp: 150,
      attack: 90,
      defense: 75,
      speed: 40,
      types: ["developer"],
    };

    const result = turnUserIntoAPokemon(mockUser);
    expect(result).toEqual(expectedPokemon);
  });
});
