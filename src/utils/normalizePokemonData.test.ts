import { normalizePokemonData } from "./normalizePokemonData";

describe("normalizePokemonData", () => {
  it("transforms API data into IPokemon format correctly", () => {
    const mockApiData = {
      name: "pikachu",
      sprites: {
        front_default: "http://example.com/pikachu.png",
      },
      stats: [
        { stat: { name: "hp" }, base_stat: 35 },
        { stat: { name: "attack" }, base_stat: 55 },
        { stat: { name: "defense" }, base_stat: 40 },
        { stat: { name: "speed" }, base_stat: 90 },
      ],
      types: [{ type: { name: "Electric" } }],
    };

    const expectedPokemon = {
      name: "pikachu",
      image: "http://example.com/pikachu.png",
      hp: 35,
      attack: 55,
      defense: 40,
      speed: 90,
      types: ["electric"],
    };

    const result = normalizePokemonData(mockApiData);
    expect(result).toEqual(expectedPokemon);
  });

  it("handles missing fields appropriately", () => {
    const mockApiData = {
      name: "unknown",
      sprites: {
        front_default: "",
      },
      stats: [],
      types: [],
    };

    const expectedPokemon = {
      name: "unknown",
      image: "",
      hp: 0,
      attack: 0,
      defense: 0,
      speed: 0,
      types: [],
    };

    const result = normalizePokemonData(mockApiData);
    expect(result).toEqual(expectedPokemon);
  });

  it("returns default values when input data is undefined", () => {
    const expectedPokemon = {
      name: "",
      image: "",
      hp: 0,
      attack: 0,
      defense: 0,
      speed: 0,
      types: [],
    };

    const result = normalizePokemonData(undefined);
    expect(result).toEqual(expectedPokemon);
  });
});
