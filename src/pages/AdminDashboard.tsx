import { motion } from "framer-motion";
import { 
  Users, 
  UserCheck, 
  CreditCard, 
  TrendingUp, 
  ArrowUpRight, 
  ArrowDownRight,
  DollarSign
} from "lucide-react";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from "recharts";
import Card from "../components/Card";
import { cn } from "../utils/cn";
import { pageTransition, staggerContainer } from "../animations/variants";

const data = [
  { name: "Jan", revenue: 4000, users: 2400 },
  { name: "Feb", revenue: 3000, users: 1398 },
  { name: "Mar", revenue: 2000, users: 9800 },
  { name: "Apr", revenue: 2780, users: 3908 },
  { name: "May", revenue: 1890, users: 4800 },
  { name: "Jun", revenue: 2390, users: 3800 },
  { name: "Jul", revenue: 3490, users: 4300 },
];

const AdminDashboard = () => {
  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="space-y-8"
    >
      <div>
        <h1 className="text-3xl font-bold text-white">Dashboard Overview</h1>
        <p className="text-white/60">Real-time platform performance and user engagement metrics.</p>
      </div>

      <motion.div 
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        <StatCard 
          title="Total Users" 
          value="12,543" 
          change={12.5} 
          icon={<Users className="w-6 h-6" />} 
        />
        <StatCard 
          title="Active Astrologers" 
          value="452" 
          change={8.2} 
          icon={<UserCheck className="w-6 h-6" />} 
        />
        <StatCard 
          title="Total Revenue" 
          value="$45,230" 
          change={23.1} 
          icon={<DollarSign className="w-6 h-6" />} 
        />
        <StatCard 
          title="Pending Approvals" 
          value="24" 
          change={-5.4} 
          icon={<CreditCard className="w-6 h-6" />} 
        />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold text-white">Revenue Growth</h3>
            <select className="bg-white/5 border border-white/10 rounded-lg px-3 py-1 text-xs text-white outline-none">
              <option>Last 6 Months</option>
              <option>Last Year</option>
            </select>
          </div>
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#FD7D00" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#FD7D00" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ffffff05" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#ffffff40', fontSize: 12 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#ffffff40', fontSize: 12 }} dx={-10} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1F2E0A', border: '1px solid #ffffff10', borderRadius: '12px' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="#FD7D00" 
                  strokeWidth={3} 
                  fillOpacity={1} 
                  fill="url(#colorRevenue)" 
                  animationDuration={1500}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card>
          <h3 className="text-xl font-bold text-white mb-8">User Segments</h3>
          <div className="space-y-6">
            <SegmentItem label="Direct Search" percentage={45} color="bg-accent" />
            <SegmentItem label="Referrals" percentage={28} color="bg-blue-500" />
            <SegmentItem label="Social Media" percentage={15} color="bg-purple-500" />
            <SegmentItem label="Others" percentage={12} color="bg-white/10" />
          </div>
          <div className="mt-12 p-4 bg-accent/10 border border-accent/20 rounded-xl">
            <div className="flex items-center gap-2 text-accent font-bold mb-1">
              <TrendingUp className="w-4 h-4" /> Insight
            </div>
            <p className="text-xs text-white/60">
              User retention has increased by 15% this month due to new AI chat features.
            </p>
          </div>
        </Card>
      </div>
    </motion.div>
  );
};

const StatCard = ({ title, value, change, icon }: any) => (
  <Card className="relative overflow-hidden group">
    <div className="flex items-start justify-between mb-4">
      <div className="p-3 bg-accent/10 text-accent rounded-xl group-hover:bg-accent group-hover:text-white transition-colors duration-500">
        {icon}
      </div>
      <div className={`flex items-center gap-1 text-xs font-bold ${change >= 0 ? "text-green-500" : "text-red-500"}`}>
        {change >= 0 ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
        {Math.abs(change)}%
      </div>
    </div>
    <h4 className="text-white/40 text-xs uppercase font-bold tracking-widest mb-1">{title}</h4>
    <div className="text-3xl font-bold text-white">{value}</div>
    {/* Decorative Background Element */}
    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-all duration-500" />
  </Card>
);

const SegmentItem = ({ label, percentage, color }: any) => (
  <div className="space-y-2">
    <div className="flex justify-between text-sm">
      <span className="text-white/60">{label}</span>
      <span className="text-white font-bold">{percentage}%</span>
    </div>
    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: `${percentage}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
        className={cn("h-full", color)}
      />
    </div>
  </div>
);

export default AdminDashboard;
