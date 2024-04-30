import { clsx } from "clsx";
import React from "react";

interface ButtonProps {
  ariaLabel?: string;
  children: React.ReactNode;
  disabled?: boolean;
  hasError?: boolean;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  ariaLabel,
  children,
  disabled = false,
  hasError,
  onClick,
}) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  return (
    <button
      {...(ariaLabel ? { "aria-label": ariaLabel } : {})}
      className={clsx(
        "px-4 py-2",
        { "border-red-500": hasError, "opacity-50": disabled },
        "transition-opacity duration-300"
      )}
      disabled={disabled}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
