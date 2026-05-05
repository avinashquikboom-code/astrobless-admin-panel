import { motion } from "framer-motion";
import { 
  Users, 
  UserCheck, 
  CreditCard, 
  TrendingUp, 
  ArrowUpRight, 
  ArrowDownRight,
  DollarSign,
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
  { id: 3, user: "Alex Wong", action: "Payment of $120 successful", time: "1 hour ago", icon: <DollarSign className="w-4 h-4 text-green-500" /> },
  { id: 4, user: "Elena Gilbert", action: "Premium chat started", time: "3 hours ago", icon: <Star className="w-4 h-4 text-purple-500" /> },
];

const AdminDashboard = () => {
  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="space-y-8 pb-12"
    >
      {/* Welcome Section */}
      <section className="relative overflow-hidden rounded-3xl p-8 border border-white/5 bg-gradient-to-br from-surface to-surface/40">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 blur-[100px] -mr-32 -mt-32 rounded-full" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-3xl font-bold text-white mb-2"
            >
              Welcome back, Admin 👋
            </motion.h1>
            <p className="text-white/40 max-w-md">
              Here's what's happening on <span className="text-accent font-bold">AstroBless</span> today. Platform usage is up by <span className="text-green-500 font-bold">12%</span>.
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="secondary" className="gap-2">
              <Zap className="w-4 h-4" /> View Live Analytics
            </Button>
            <Button className="gap-2 shadow-accent">
              <Bell className="w-4 h-4" /> Manage Notifications
            </Button>
          </div>
        </div>
      </section>

      {/* Main Stats Grid */}
      <motion.div 
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        <StatCard title="Total Users" value="12,543" change={12.5} icon={<Users />} color="text-accent" />
        <StatCard title="Active Experts" value="452" change={8.2} icon={<ShieldCheck />} color="text-blue-500" />
        <StatCard title="Net Revenue" value="$45,230" change={23.1} icon={<DollarSign />} color="text-green-500" />
        <StatCard title="Platform Health" value="99.8%" change={0.1} icon={<Activity />} color="text-purple-500" />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Analytics Section */}
        <div className="lg:col-span-2 space-y-8">
          <Card className="p-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-xl font-bold text-white">Weekly Performance</h3>
                <p className="text-xs text-white/40">Revenue vs Engagement trends</p>
              </div>
              <div className="flex gap-2">
                <Button variant="secondary" size="sm">Export</Button>
                <select className="bg-white/5 border border-white/10 rounded-lg px-3 py-1 text-xs text-white outline-none">
                  <option>Last 7 Days</option>
                  <option>Last 30 Days</option>
                </select>
              </div>
            </div>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
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
                    strokeWidth={4} 
                    fillOpacity={1} 
                    fill="url(#colorRev)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </Card>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <QuickAction icon={<Users className="w-5 h-5" />} label="New User" color="bg-blue-500" />
            <QuickAction icon={<UserCheck className="w-5 h-5" />} label="Verify Expert" color="bg-accent" />
            <QuickAction icon={<CreditCard className="w-5 h-5" />} label="Payouts" color="bg-green-500" />
            <QuickAction icon={<TrendingUp className="w-5 h-5" />} label="Reports" color="bg-purple-500" />
          </div>
        </div>

        {/* Sidebar Analytics */}
        <div className="space-y-8">
          {/* Live Feed */}
          <Card className="p-6">
            <h3 className="text-lg font-bold text-white mb-6">Live Activity</h3>
            <div className="space-y-6">
              {activities.map((act) => (
                <motion.div 
                  key={act.id}
                  variants={fadeIn}
                  className="flex gap-4 items-start"
                >
                  <div className="p-2 bg-white/5 rounded-lg border border-white/5">
                    {act.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h4 className="text-sm font-bold text-white">{act.user}</h4>
                      <span className="text-[10px] text-white/30 uppercase">{act.time}</span>
                    </div>
                    <p className="text-xs text-white/50">{act.action}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <Button variant="ghost" size="sm" className="w-full mt-6 text-accent">View All Logs</Button>
          </Card>

          {/* Segment Chart */}
          <Card className="p-6 bg-accent/5 border-accent/10">
            <h3 className="text-lg font-bold text-white mb-6">User Segments</h3>
            <div className="space-y-4">
              <SegmentItem label="Direct" percentage={65} color="bg-accent" />
              <SegmentItem label="Social" percentage={20} color="bg-blue-500" />
              <SegmentItem label="Referral" percentage={15} color="bg-purple-500" />
            </div>
            <div className="mt-8 p-3 bg-white/5 rounded-xl border border-white/5 text-[10px] text-white/40">
              Insight: Social traffic increased by <span className="text-white font-bold">5%</span> after the new campaign.
            </div>
          </Card>
        </div>
      </div>
    </motion.div>
  );
};

const StatCard = ({ title, value, change, icon, color }: any) => (
  <motion.div variants={slideUp}>
    <Card className="relative overflow-hidden group p-6 h-full">
      <div className="flex items-start justify-between mb-4">
        <div className={cn("p-3 bg-white/5 rounded-xl group-hover:bg-accent/10 transition-colors duration-500", color)}>
          {icon}
        </div>
        <div className={cn("flex items-center gap-1 text-xs font-black", change >= 0 ? "text-green-500" : "text-red-500")}>
          {change >= 0 ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
          {Math.abs(change)}%
        </div>
      </div>
      <p className="text-white/40 text-[10px] uppercase font-black tracking-[0.2em] mb-1">{title}</p>
      <div className="text-2xl font-black text-white">{value}</div>
      <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-all duration-700" />
    </Card>
  </motion.div>
);

const QuickAction = ({ icon, label, color }: any) => (
  <motion.button
    whileHover={{ y: -5 }}
    whileTap={{ scale: 0.95 }}
    className="flex flex-col items-center justify-center p-4 bg-surface border border-white/5 rounded-2xl gap-3 hover:border-accent/20 transition-all group"
  >
    <div className={cn("p-3 rounded-xl text-white shadow-lg", color)}>
      {icon}
    </div>
    <span className="text-xs font-bold text-white/60 group-hover:text-white transition-colors">{label}</span>
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
