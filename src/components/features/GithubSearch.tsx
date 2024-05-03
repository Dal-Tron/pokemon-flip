import clsx from "clsx";
import { FC, useState } from "react";

import { Button } from "@/components/base/Button";
import { Input } from "@/components/base/Input";
import { UserService } from "@/services/user";
import { useUserStore } from "@/stores/user";

export const GithubSearch: FC = () => {
  const { setUser, setUserLoading } = useUserStore((state) => state);

  const [githubUsername, setGithubUsername] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSearchSubmit = async () => {
    setUserLoading(true);

    const { error, data } = await UserService.getUser(githubUsername);

    if (error) {
      setErrorMessage("User not found.");
      setUserLoading(false);
      return;
    }

    setUser(data);
    setUserLoading(false);
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
