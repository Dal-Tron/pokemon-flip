import { darkenRgb } from "./darkenRgb";
import { hexToRgb, RGBColor } from "./hexToRgb";
import { rgbToHex } from "./rgbToHex";

export const darkenHex = (hex: string, amount: number = 0.2): string => {
  const rgb: RGBColor = hexToRgb(hex);
  const darkenedRgb: RGBColor = darkenRgb(rgb, amount);
  return rgbToHex(darkenedRgb);
};
