import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "../utils/cn";
import { slideUp } from "../animations/variants";

interface CardProps extends HTMLMotionProps<"div"> {
  hoverEffect?: boolean;
}

const Card = ({ className, hoverEffect = true, children, ...props }: CardProps) => {
  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className={cn(
        "bg-surface/80 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-premium transition-all duration-300",
        hoverEffect && "hover:shadow-premium hover:border-white/20 hover:scale-[1.02]",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
