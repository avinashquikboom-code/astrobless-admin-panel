import { motion } from "framer-motion";
import { 
  Users, 
  UserCheck, 
  CreditCard, 
  TrendingUp, 
  ArrowUpRight, 
  ArrowDownRight,
  IndianRupee, 
  Activity,
  Zap,
  Star,
  ShieldCheck,
  Bell
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
import Button from "../components/Button";
import { cn } from "../utils/cn";
import { pageTransition, staggerContainer, fadeIn, slideUp } from "../animations/variants";

const data = [
  { name: "Mon", revenue: 4000 },
  { name: "Tue", revenue: 3000 },
  { name: "Wed", revenue: 5000 },
  { name: "Thu", revenue: 2780 },
  { name: "Fri", revenue: 1890 },
  { name: "Sat", revenue: 2390 },
  { name: "Sun", revenue: 3490 },
];

const activities = [
  { id: 1, user: "John Doe", action: "New subscription", time: "2 mins ago", icon: <Zap className="w-4 h-4 text-accent" /> },
  { id: 2, user: "Sarah Smith", action: "Applied as Astrologer", time: "15 mins ago", icon: <UserCheck className="w-4 h-4 text-blue-500" /> },
  { id: 3, user: "Alex Wong", action: "Payment of ₹120 successful", time: "1 hour ago", icon: <IndianRupee className="w-4 h-4 text-green-500" /> },
  { id: 4, user: "Elena Gilbert", action: "Premium chat started", time: "3 hours ago", icon: <Star className="w-4 h-4 text-purple-500" /> },
];

const AdminDashboard = () => {
  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="space-y-10 pb-12"
    >
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-start gap-10 px-2">
        <div>
          <h1 className="text-4xl font-black text-white tracking-tight mb-2">
            Dashboard
          </h1>
          <p className="text-white/40 font-medium">
            Overview of <span className="text-accent">AstroBless</span> performance and metrics.
          </p>
        </div>
        <div className="flex gap-3 mb-1">
          <Button variant="secondary" size="sm" className="gap-2 bg-white/5 border-white/5 px-4">
            <Zap className="w-4 h-4" /> Analytics
          </Button>
          <Button size="sm" className="gap-2 px-4">
            <Bell className="w-4 h-4" /> Updates
          </Button>
        </div>
      </div>

      {/* Stats Section */}
      <motion.div 
        variants={staggerContainer}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        <StatCard title="Total Revenue" value="₹45,230" change={23.1} icon={<IndianRupee />} color="bg-green-500/10 text-green-500" />
        <StatCard title="Total Users" value="12,543" change={12.5} icon={<Users />} color="bg-accent/10 text-accent" />
        <StatCard title="Active Experts" value="452" change={8.2} icon={<UserCheck />} color="bg-blue-500/10 text-blue-500" />
        <StatCard title="Platform Health" value="99.8%" change={0.1} icon={<Activity />} color="bg-purple-500/10 text-purple-500" />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Chart Section */}
        <div className="lg:col-span-8 space-y-8">
          <Card className="p-8 border-white/5 bg-surface/30">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 gap-4">
              <div>
                <h3 className="text-xl font-bold text-white">Revenue Growth</h3>
                <p className="text-sm text-white/30">Weekly financial overview</p>
              </div>
              <div className="flex items-center gap-2 bg-white/5 p-1 rounded-xl border border-white/5">
                <button className="px-4 py-1.5 text-xs font-bold bg-accent text-white rounded-lg shadow-lg">Week</button>
                <button className="px-4 py-1.5 text-xs font-bold text-white/40 hover:text-white transition-colors">Month</button>
              </div>
            </div>
            <div className="h-[340px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#FD7D00" stopOpacity={0.2}/>
                      <stop offset="95%" stopColor="#FD7D00" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ffffff03" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#ffffff20', fontSize: 11, fontWeight: 600 }} dy={15} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#ffffff20', fontSize: 11, fontWeight: 600 }} dx={-15} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#192309', border: '1px solid #ffffff05', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}
                    itemStyle={{ color: '#fff' }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="revenue" 
                    stroke="#FD7D00" 
                    strokeWidth={3} 
                    fillOpacity={1} 
                    fill="url(#colorRev)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </Card>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card className="p-6 border-white/5 bg-surface/20">
              <h4 className="text-sm font-bold text-white/40 uppercase tracking-widest mb-6">Quick Actions</h4>
              <div className="grid grid-cols-2 gap-4">
                <QuickAction icon={<Users />} label="Users" color="bg-blue-500" />
                <QuickAction icon={<UserCheck />} label="Experts" color="bg-accent" />
                <QuickAction icon={<IndianRupee />} label="Payouts" color="bg-green-500" />
                <QuickAction icon={<TrendingUp />} label="Logs" color="bg-purple-500" />
              </div>
            </Card>
            <Card className="p-6 border-white/5 bg-accent/5">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-sm font-bold text-accent uppercase tracking-widest">Platform Status</h4>
                <div className="flex items-center gap-1.5 px-2 py-1 bg-green-500/10 rounded-full border border-green-500/20">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-[10px] font-black text-green-500 uppercase">Live</span>
                </div>
              </div>
              <div className="space-y-4">
                <SegmentItem label="Direct" percentage={65} color="bg-accent" />
                <SegmentItem label="Referral" percentage={35} color="bg-white/10" />
              </div>
              <p className="mt-6 text-[11px] text-white/30 leading-relaxed italic">
                "Infrastructure is running optimally with zero reported incidents in last 24h."
              </p>
            </Card>
          </div>
        </div>

        {/* Activity Sidebar */}
        <div className="lg:col-span-4">
          <Card className="p-0 border-white/5 bg-surface/30 h-full flex flex-col overflow-hidden">
            <div className="p-6 border-b border-white/5 bg-white/[0.02]">
              <h3 className="text-lg font-bold text-white">Live Feed</h3>
              <p className="text-xs text-white/30 font-medium">Real-time platform events</p>
            </div>
            <div className="flex-1 p-6 space-y-8">
              {activities.map((act) => (
                <motion.div 
                  key={act.id}
                  variants={fadeIn}
                  className="flex gap-4 group"
                >
                  <div className="shrink-0 w-10 h-10 bg-white/5 rounded-xl border border-white/5 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                    {act.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-baseline mb-0.5">
                      <h4 className="text-sm font-bold text-white truncate">{act.user}</h4>
                      <span className="text-[10px] text-white/20 font-black uppercase whitespace-nowrap ml-2">{act.time}</span>
                    </div>
                    <p className="text-xs text-white/40 truncate">{act.action}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="p-6 bg-white/[0.02] border-t border-white/5">
              <Button variant="ghost" size="sm" className="w-full text-white/40 hover:text-white transition-colors group">
                Full Activity Logs <ArrowUpRight className="w-3 h-3 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </motion.div>
  );
};

const StatCard = ({ title, value, change, icon, color }: any) => (
  <motion.div variants={slideUp}>
    <Card className="relative overflow-hidden group p-6 border-white/5 bg-surface/20">
      <div className="flex items-center justify-between mb-6">
        <div className={cn("p-2.5 rounded-xl transition-colors duration-500", color)}>
          {icon}
        </div>
        <div className={cn("flex items-center gap-0.5 text-[11px] font-black px-1.5 py-0.5 rounded-md", change >= 0 ? "text-green-500 bg-green-500/5" : "text-red-500 bg-red-500/5")}>
          {change >= 0 ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
          {Math.abs(change)}%
        </div>
      </div>
      <div>
        <h4 className="text-[10px] font-black text-white/20 uppercase tracking-[0.2em] mb-1">{title}</h4>
        <div className="text-3xl font-black text-white">{value}</div>
      </div>
      <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-white/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    </Card>
  </motion.div>
);

const QuickAction = ({ icon, label, color }: any) => (
  <motion.button
    whileHover={{ scale: 1.02, y: -2 }}
    whileTap={{ scale: 0.98 }}
    className="flex flex-col items-center justify-center p-4 bg-white/5 border border-white/5 rounded-2xl gap-3 hover:border-accent/30 hover:bg-accent/[0.02] transition-all group"
  >
    <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center text-white/60 group-hover:text-white transition-colors", color.replace('bg-', 'text-'))}>
      {icon}
    </div>
    <span className="text-[11px] font-black text-white/40 uppercase tracking-wider group-hover:text-white transition-colors">{label}</span>
  </motion.button>
);

const SegmentItem = ({ label, percentage, color }: any) => (
  <div className="space-y-1.5">
    <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest">
      <span className="text-white/40">{label}</span>
      <span className="text-white">{percentage}%</span>
    </div>
    <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: `${percentage}%` }}
        transition={{ duration: 1.5, ease: "circOut" }}
        className={cn("h-full rounded-full", color)}
      />
    </div>
  </div>
);

export default AdminDashboard;
