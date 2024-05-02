import { RGBColor } from "./hexToRgb";
import { rgbToHex } from "./rgbToHex";

describe("rgbToHex", () => {
  it("converts RGB to hex correctly", () => {
    const color: RGBColor = { r: 255, g: 255, b: 255 };
    expect(rgbToHex(color)).toEqual("#ffffff");
  });
});
