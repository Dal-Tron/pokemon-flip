import { hexToRgb } from "./hexToRgb";

describe("hexToRgb", () => {
  it("converts #FF0000 to RGB correctly", () => {
    expect(hexToRgb("#FF0000")).toEqual({ r: 255, g: 0, b: 0 });
  });

  it("converts #00FF00 to RGB correctly", () => {
    expect(hexToRgb("#00FF00")).toEqual({ r: 0, g: 255, b: 0 });
  });
});
