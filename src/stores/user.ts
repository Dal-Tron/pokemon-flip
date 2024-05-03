import { create } from "zustand";

import { IUser } from "@/types/user";

type UserStore = {
  isUserLoading: boolean;
  setUserLoading: (loading: boolean) => void;
  setUser: (user: IUser) => void;
  user: IUser | undefined;
};

export const useUserStore = create<UserStore>((set) => ({
  isUserLoading: false,
  setUser: (user: IUser) => {
    set({ user });
  },
  setUserLoading: (loading: boolean) => {
    set({ isUserLoading: loading });
  },
  user: undefined,
}));
