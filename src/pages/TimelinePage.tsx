import { motion } from "framer-motion";
import { Briefcase, Heart, Coins, Home, ChevronRight } from "lucide-react";
import Card from "../components/Card";
import { cn } from "../utils/cn";

const events = [
  {
    year: "2024",
    month: "August",
    title: "Career Transition",
    description: "Saturn moves into a favorable position. A significant job offer or promotion is predicted.",
    icon: Briefcase,
    color: "bg-blue-500",
    status: "Upcoming"
  },
  {
    year: "2025",
    month: "March",
    title: "Financial Peak",
    description: "Jupiter's influence brings unexpected wealth through investments or family inheritance.",
    icon: Coins,
    color: "bg-accent",
    status: "Predicted"
  },
  {
    year: "2026",
    month: "June",
    title: "Major Relationship",
    description: "Venus alignment suggests a strong romantic bond or marriage. High compatibility period.",
    icon: Heart,
    color: "bg-pink-500",
    status: "Predicted"
  },
  {
    year: "2027",
    month: "January",
    title: "Property Investment",
    description: "A stable period for long-term assets. Moving to a new home or real estate purchase.",
    icon: Home,
    color: "bg-green-500",
    status: "Predicted"
  }
];

const TimelinePage = () => {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-white mb-2">Life Journey Timeline</h1>
        <p className="text-white/60">A celestial roadmap of your major life milestones.</p>
      </div>

      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block" />

        <div className="space-y-12">
          {events.map((event, index) => (
            <TimelineItem 
              key={index} 
              event={event} 
              isEven={index % 2 === 0} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const TimelineItem = ({ event, isEven }: any) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(
        "relative flex flex-col md:flex-row items-start md:items-center gap-8",
        isEven ? "md:flex-row-reverse" : ""
      )}
    >
      {/* Connector Dot */}
      <div className="absolute left-0 md:left-1/2 top-10 md:top-1/2 w-4 h-4 bg-background border-4 border-accent rounded-full -translate-x-1/2 z-10 hidden md:block" />

      {/* Content */}
      <div className={cn(
        "w-full md:w-[45%]",
        isEven ? "md:text-left" : "md:text-right"
      )}>
        <Card className="hover:border-accent/40 group">
          <div className={cn(
            "flex items-center gap-3 mb-4",
            isEven ? "flex-row" : "md:flex-row-reverse"
          )}>
            <div className={cn("p-3 rounded-xl", event.color)}>
              <event.icon className="text-white w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-accent uppercase tracking-widest">{event.status}</span>
              <p className="text-sm text-white/40">{event.month} {event.year}</p>
            </div>
          </div>
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">{event.title}</h3>
          <p className="text-white/60 text-sm leading-relaxed">{event.description}</p>
          
          <div className={cn(
            "mt-4 flex",
            isEven ? "justify-start" : "md:justify-end"
          )}>
            <button className="text-xs font-bold text-white/40 hover:text-white flex items-center gap-1 transition-colors">
              View Planetary Data <ChevronRight className="w-3 h-3" />
            </button>
          </div>
        </Card>
      </div>

      {/* Spacer for mobile */}
      <div className="hidden md:block w-[10%]" />
    </motion.div>
  );
};

export default TimelinePage;
