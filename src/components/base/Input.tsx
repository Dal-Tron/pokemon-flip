import { clsx } from "clsx";
import React, { ChangeEvent } from "react";

interface InputProps {
  ariaLabel?: string;
  hasError: boolean;
  name: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type: string;
  value?: string;
}

export const Input: React.FC<InputProps> = ({
  ariaLabel,
  hasError,
  name,
  onChange,
  placeholder,
  type,
  value,
}) => {
  return (
    <input
      {...(ariaLabel ? { "aria-label": ariaLabel } : {})}
      autoComplete="off"
      className={clsx("flex border-r-0", { "border-red-500": hasError })}
      defaultValue={value}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      value={value}
    />
  );
};
