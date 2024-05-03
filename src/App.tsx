import { Arena } from "@/components/features/Arena";
import { GithubSearch } from "@/components/features/GithubSearch";
import "./styles/global.css";

const App = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="max-w-[42em] space-y-6 mt-4 sm:mt-8">
        <h1>Github vs. Pokemon</h1>
        <GithubSearch />
        <Arena />
      </div>
    </div>
  );
};

export default App;
