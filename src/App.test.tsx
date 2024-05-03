import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import App from "./App";

beforeEach(() => {
  render(<App />);
});

test("loads and displays app", async () => {
  const title = screen.getByText("Github vs. Pokemon");
  expect(title).toBeInTheDocument();
});
