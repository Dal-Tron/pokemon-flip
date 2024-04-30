import { extractOrThrow } from "@/utils/extractOrThrow";

export const UserService = {
  getUser: async (username: string) => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await extractOrThrow(response);
      return { data };
    } catch (error) {
      return { error };
    }
  },
};
