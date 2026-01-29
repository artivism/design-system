import * as React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "success" | "error" | "warning";
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className = "", variant = "default", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium";

    const variantStyles = {
      default: "bg-surface-muted text-text border border-border",
      success: "bg-success text-white",
      error: "bg-error text-white",
      warning: "bg-accent text-white",
    };

    return (
      <span
        ref={ref}
        className={`${baseStyles} ${variantStyles[variant]} ${className}`}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";
