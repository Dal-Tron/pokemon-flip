import { RGBColor } from "./hexToRgb";

export const darkenRgb = (color: RGBColor, amount: number): RGBColor => {
  return {
    r: Math.max(0, Math.floor(color.r * (1 - amount))),
    g: Math.max(0, Math.floor(color.g * (1 - amount))),
    b: Math.max(0, Math.floor(color.b * (1 - amount))),
  };
};
