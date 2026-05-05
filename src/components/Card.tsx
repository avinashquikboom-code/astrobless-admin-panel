import type { HTMLAttributes } from "react";
import { cn } from "../utils/cn";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
}

const Card = ({ className, hoverEffect = true, children, ...props }: CardProps) => {
  return (
    <div
      className={cn(
        "bg-surface/80 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-premium transition-all duration-300",
        hoverEffect && "hover:shadow-premium hover:border-white/20 hover:-translate-y-1",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
