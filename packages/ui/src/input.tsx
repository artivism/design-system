import * as React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "default" | "error";
  fullWidth?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", variant = "default", fullWidth = false, ...props }, ref) => {
    const baseStyles =
      "px-4 py-2 rounded-md border transition-colors focus:outline-none focus:ring-2 focus:ring-accent";

    const variantStyles = {
      default: "border-border bg-surface text-text placeholder:text-text-muted",
      error: "border-error bg-surface text-text placeholder:text-text-muted focus:ring-error",
    };

    const widthStyles = fullWidth ? "w-full" : "";

    return (
      <input
        ref={ref}
        className={`${baseStyles} ${variantStyles[variant]} ${widthStyles} ${className}`}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
