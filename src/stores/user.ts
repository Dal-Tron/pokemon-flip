import { create } from "zustand";

import { IUser } from "@/types/user";

type UserStore = {
  isUserLoading: boolean;
  setUser: (user: IUser | undefined) => void;
  setUserLoading: (loading: boolean) => void;
  user: IUser | undefined;
  isReplacingUser: boolean;
  setIsReplacingUser: (isReplacingUser: boolean) => void;
};

export const useUserStore = create<UserStore>((set) => ({
  isUserLoading: false,
  setUser: (user: IUser | undefined) => {
    set({ user });
  },
  setUserLoading: (loading: boolean) => {
    set({ isUserLoading: loading });
  },
  user: undefined,
  isReplacingUser: false,
  setIsReplacingUser: (isReplacingUser: boolean) => {
    set({ isReplacingUser });
  },
}));
