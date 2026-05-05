import { motion } from "framer-motion";
import { cn } from "../utils/cn";
import { staggerContainer, slideUp } from "../animations/variants";

interface TableProps {
  headers: string[];
  children: React.ReactNode;
  className?: string;
}

export const Table = ({ headers, children, className }: TableProps) => {
  return (
    <div className={cn("w-full overflow-x-auto rounded-xl border border-white/5", className)}>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-white/5 border-b border-white/10">
            {headers.map((header) => (
              <th key={header} className="px-6 py-4 text-xs font-bold text-white/40 uppercase tracking-widest">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <motion.tbody
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {children}
        </motion.tbody>
      </table>
    </div>
  );
};

interface TableRowProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const TableRow = ({ children, className, onClick }: TableRowProps) => {
  return (
    <motion.tr
      variants={slideUp}
      onClick={onClick}
      className={cn(
        "border-b border-white/5 last:border-none transition-colors hover:bg-white/5 cursor-pointer",
        className
      )}
    >
      {children}
    </motion.tr>
  );
};

interface TableCellProps {
  children: React.ReactNode;
  className?: string;
}

export const TableCell = ({ children, className }: TableCellProps) => {
  return (
    <td className={cn("px-6 py-4 text-sm text-white/80", className)}>
      {children}
    </td>
  );
};
