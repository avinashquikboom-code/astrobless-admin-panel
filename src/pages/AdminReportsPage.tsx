import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts";
import { Download, Calendar, Filter, Share2 } from "lucide-react";
import Card from "../components/Card";
import Button from "../components/Button";
import { pageTransition, fadeIn } from "../animations/variants";

const userGrowthData = [
  { month: "Jan", newUsers: 400, activeUsers: 2400 },
  { month: "Feb", newUsers: 300, activeUsers: 1398 },
  { month: "Mar", newUsers: 200, activeUsers: 9800 },
  { month: "Apr", newUsers: 278, activeUsers: 3908 },
  { month: "May", newUsers: 189, activeUsers: 4800 },
  { month: "Jun", newUsers: 239, activeUsers: 3800 },
];

const categoryData = [
  { name: "Career", value: 400 },
  { name: "Love", value: 300 },
  { name: "Finance", value: 300 },
  { name: "Health", value: 200 },
];

const COLORS = ["#FD7D00", "#3b82f6", "#ec4899", "#10b981"];

const AdminReportsPage = () => {
  const [activeTab, setActiveTab] = useState("Growth");

  const tabs = ["Growth", "Engagement", "Demographics"];

  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="space-y-8"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">System Reports</h1>
          <p className="text-white/60">Analyze platform growth and deep user behavior insights.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="secondary" className="gap-2">
            <Share2 className="w-4 h-4" /> Share
          </Button>
          <Button className="gap-2">
            <Download className="w-4 h-4" /> Export PDF
          </Button>
        </div>
      </div>

      {/* Custom Tabs with Sliding Indicator */}
      <div className="relative flex items-center gap-8 border-b border-white/5 pb-0">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative py-4 text-sm font-bold transition-colors ${
              activeTab === tab ? "text-accent" : "text-white/40 hover:text-white"
            }`}
          >
            {tab}
            {activeTab === tab && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-1 bg-accent rounded-t-full z-10"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          variants={fadeIn}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {activeTab === "Growth" && (
            <>
              <Card className="lg:col-span-2">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-xl font-bold text-white">New User Acquisition</h3>
                  <div className="flex items-center gap-4">
                    <Button variant="ghost" size="sm" className="gap-2">
                      <Calendar className="w-4 h-4" /> This Month
                    </Button>
                  </div>
                </div>
                <div className="h-[350px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={userGrowthData}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ffffff05" />
                      <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#ffffff40', fontSize: 12 }} dy={10} />
                      <YAxis axisLine={false} tickLine={false} tick={{ fill: '#ffffff40', fontSize: 12 }} dx={-10} />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#1F2E0A', border: '1px solid #ffffff10', borderRadius: '12px' }}
                        itemStyle={{ color: '#fff' }}
                      />
                      <Bar dataKey="newUsers" fill="#FD7D00" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </Card>

              <Card>
                <h3 className="text-xl font-bold text-white mb-8">Queries by Category</h3>
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={categoryData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {categoryData.map((_, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#1F2E0A', border: '1px solid #ffffff10', borderRadius: '12px' }}
                        itemStyle={{ color: '#fff' }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </Card>

              <Card>
                <h3 className="text-xl font-bold text-white mb-8">Popular Times</h3>
                <div className="space-y-6">
                   <TimeStat label="Morning (6am - 12pm)" value={25} />
                   <TimeStat label="Afternoon (12pm - 6pm)" value={45} />
                   <TimeStat label="Evening (6pm - 12am)" value={85} />
                   <TimeStat label="Night (12am - 6am)" value={30} />
                </div>
              </Card>
            </>
          )}

          {activeTab === "Engagement" && (
            <Card className="lg:col-span-2 flex items-center justify-center min-h-[400px]">
              <div className="text-center">
                <Filter className="w-12 h-12 text-white/10 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white">Engagement Details</h3>
                <p className="text-white/40">Detailed interaction metrics are loading...</p>
              </div>
            </Card>
          )}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

const TimeStat = ({ label, value }: any) => (
  <div className="space-y-2">
    <div className="flex justify-between text-sm">
      <span className="text-white/60">{label}</span>
      <span className="text-accent font-bold">{value}% Traffic</span>
    </div>
    <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
      <motion.div 
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        className="h-full bg-accent"
      />
    </div>
  </div>
);

export default AdminReportsPage;
