import { RGBColor } from "./hexToRgb";

export const rgbToHex = ({ r, g, b }: RGBColor): string => {
  return (
    "#" +
    [r, g, b]
      .map((x) => {
        const hex = x.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      })
      .join("")
  );
};
