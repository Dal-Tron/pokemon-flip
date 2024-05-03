import clsx from "clsx";
import { FC, useState } from "react";

import { Button } from "@/components/base/Button";
import { Input } from "@/components/base/Input";
import { UserService } from "@/services/user";
import { useUserStore } from "@/stores/user";
import { delay } from "@/utils/delay";

export const GithubSearch: FC = () => {
  const user = useUserStore((state) => state.user);
  const { setUser, setUserLoading, setIsReplacingUser } = useUserStore(
    (state) => state
  );

  const [githubUsername, setGithubUsername] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSearchSubmit = async () => {
    if (!githubUsername) return;

    // Convert to lowercase for case-insensitive comparison
    if (user?.login?.toLowerCase() === githubUsername.toLowerCase()) return;

    const isNewUser = user && githubUsername !== user.login;
    if (isNewUser) {
      setIsReplacingUser(true);
      await delay(1000); // Give time for flipping animation
    }

    setUserLoading(true);

    const { error, data } = await UserService.getUser(githubUsername);

    if (error) {
      setErrorMessage("User not found.");
      setUserLoading(false);
      if (isNewUser) {
        setIsReplacingUser(false);
      }
      return;
    }

    if (isNewUser) {
      await delay(500); // Additional delay for flipping animation
    }

    setUser(data);
    setUserLoading(false);
    if (isNewUser) {
      setIsReplacingUser(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrorMessage("");
    setGithubUsername(e.target.value);
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex w-full">
        <Input
          hasError={!!errorMessage}
          onChange={handleInputChange}
          placeholder="Github Profile Search"
          value={githubUsername}
          className="w-full py-2 px-4 rounded text-lg font-headings"
        />
        <Button
          disabled={!githubUsername}
          hasError={!!errorMessage}
          onClick={handleSearchSubmit}
          className={clsx(
            "bg-transparent font-semibold font-headings",
            "ml-1 rounded px-4",
            "hover:bg-primary hover:text-white hover:border-transparent"
          )}
        >
          Search
        </Button>
      </div>

      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </div>
  );
};
