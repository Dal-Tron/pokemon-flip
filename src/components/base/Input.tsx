import { clsx } from "clsx";
import React, { ChangeEvent } from "react";

interface InputProps {
  ariaLabel?: string;
  className?: string;
  hasError: boolean;
  name?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  value?: string;
}

export const Input: React.FC<InputProps> = ({
  ariaLabel,
  className,
  hasError,
  name,
  onChange,
  placeholder,
  type = "text",
  value,
}) => {
  return (
    <input
      {...(ariaLabel ? { "aria-label": ariaLabel } : {})}
      autoComplete="off"
      className={clsx({ "border-red-500": hasError }, className)}
      {...(name ? { name: name } : {})}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      value={value}
    />
  );
};
