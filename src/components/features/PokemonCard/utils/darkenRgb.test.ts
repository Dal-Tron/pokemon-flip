import { darkenRgb } from "./darkenRgb";
import { RGBColor } from "./hexToRgb";

describe("darkenRgb", () => {
  it("darkens an RGB color correctly", () => {
    const color: RGBColor = { r: 100, g: 100, b: 100 };
    expect(darkenRgb(color, 0.1)).toEqual({ r: 90, g: 90, b: 90 });
  });
});
