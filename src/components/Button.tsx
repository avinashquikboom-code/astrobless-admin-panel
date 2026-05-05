import { forwardRef } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "../utils/cn";
import { buttonClick } from "../animations/variants";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", isLoading, children, disabled, ...props }, ref) => {
    const variants = {
      primary: "bg-accent text-white hover:bg-accent-hover shadow-accent hover:shadow-accent/40",
      secondary: "bg-surface text-white border border-white/10 hover:bg-surface/80",
      ghost: "bg-transparent text-white hover:bg-white/10",
      outline: "bg-transparent text-accent border border-accent hover:bg-accent hover:text-white",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    return (
      <motion.button
        ref={ref}
        disabled={disabled || isLoading}
        {...buttonClick}
        className={cn(
          "inline-flex items-center justify-center rounded-xl font-semibold transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {isLoading ? (
          <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
        ) : null}
        {children as React.ReactNode}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export default Button;
