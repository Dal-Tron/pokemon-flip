import { IPokemon } from "@/types/pokemon";
import { IUser } from "@/types/user";

export const turnUserIntoAPokemon = (user?: IUser): IPokemon | undefined => {
  if (!user) return undefined;

  return {
    name: user.login,
    image: user.avatar_url,
    hp: user.followers,
    attack: user.public_repos,
    defense: user.following,
    speed: user.public_gists,
    types: ["developer"],
  };
};
