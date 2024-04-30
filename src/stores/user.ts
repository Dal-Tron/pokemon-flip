import { create } from "zustand";

export interface IUser {
  avatar_url: string;
  followers: number;
  following: number;
  login: string;
  public_gists: number;
  public_repos: number;
}

type UserStore = {
  user: IUser | null;
  setUser: (user: IUser) => void;
};

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user: IUser) => {
    set({ user });
  },
}));
