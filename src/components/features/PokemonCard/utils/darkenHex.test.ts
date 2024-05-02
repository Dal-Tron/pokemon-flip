import { darkenHex } from "./darkenHex";

describe("darkenHex", () => {
  it("darkens a hex color and returns the correct hex", () => {
    const result = darkenHex("#ffffff", 0.1);
    const expected = "#e5e5e5";
    expect(result).toEqual(expected);
  });
});
