import { IPokemon } from "@/types/pokemon";
import { createMock } from "@/utils/createMock";

const defaultPokemon: Required<IPokemon> = {
  name: "Bill Murraymon",
  image: require("../images/BillMurraymon.jpeg"),
  hp: 50,
  attack: 50,
  defense: 50,
  speed: 50,
  types: ["normal"],
};

export const mockPokemon = (mockData?: IPokemon) =>
  createMock<IPokemon>(defaultPokemon, mockData);
