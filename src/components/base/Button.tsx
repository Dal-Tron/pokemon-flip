import { clsx } from "clsx";
import React from "react";

interface ButtonProps {
  ariaLabel?: string;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  hasError?: boolean;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  ariaLabel,
  children,
  className,
  disabled = false,
  hasError,
  onClick,
}) => {
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  return (
    <button
      {...(ariaLabel ? { "aria-label": ariaLabel } : {})}
      className={clsx(
        {
          "border-red-500": hasError,
          "opacity-50 cursor-not-allowed": disabled,
        },
        "transition-opacity duration-300",
        className
      )}
      disabled={disabled}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
