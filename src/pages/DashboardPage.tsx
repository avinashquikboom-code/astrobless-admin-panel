import { 
  Heart, 
  Briefcase, 
  Star, 
  Calendar,
  ChevronRight,
  Zap
} from "lucide-react";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  CartesianGrid,
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line
} from "recharts";
import Card from "../components/Card";
import Button from "../components/Button";
import { cn } from "../utils/cn";

const data = [
  { name: "Mon", career: 40, finance: 24, relation: 60 },
  { name: "Tue", career: 30, finance: 13, relation: 65 },
  { name: "Wed", career: 20, finance: 98, relation: 70 },
  { name: "Thu", career: 27, finance: 39, relation: 75 },
  { name: "Fri", career: 18, finance: 48, relation: 80 },
  { name: "Sat", career: 23, finance: 38, relation: 85 },
  { name: "Sun", career: 34, finance: 43, relation: 90 },
];

const DashboardPage = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">Hello, Avinash</h1>
          <p className="text-white/60">Your celestial alignment looks promising today.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-xs text-white/40 uppercase tracking-widest">Moon Sign</p>
            <p className="text-sm font-bold text-white">Leo (Simha)</p>
          </div>
          <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center border border-accent/20">
            <Star className="text-accent w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-accent/20 bg-accent/5">
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 bg-accent rounded-xl">
              <Zap className="text-white w-6 h-6" />
            </div>
            <span className="text-xs font-bold text-accent px-2 py-1 bg-accent/10 rounded-full">TODAY</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Daily Prediction</h3>
          <p className="text-white/60 text-sm leading-relaxed mb-4">
            A great day for financial decisions. Venus enters your 2nd house, bringing unexpected gains.
          </p>
          <Button variant="ghost" size="sm" className="text-accent p-0 hover:bg-transparent">
            Read Full Report <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </Card>

        <Card>
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 bg-surface rounded-xl border border-white/10">
              <Calendar className="text-white w-6 h-6" />
            </div>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Life Timeline</h3>
          <p className="text-white/60 text-sm mb-4">
            Next Major Event: <span className="text-white font-semibold">Career Peak (Oct 2026)</span>
          </p>
          <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
            <div className="bg-accent h-full w-[65%]" />
          </div>
        </Card>

        <Card>
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 bg-surface rounded-xl border border-white/10">
              <Heart className="text-pink-500 w-6 h-6" />
            </div>
            <span className="text-2xl font-bold text-white">88%</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Compatibility</h3>
          <p className="text-white/60 text-sm mb-4">
            With <span className="text-white font-semibold">Aries</span>. High emotional bond predicted.
          </p>
          <Button variant="secondary" size="sm" className="w-full">
            Check Another
          </Button>
        </Card>
      </div>

      {/* Graphs */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="lg:col-span-2">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-xl font-bold text-white">Luck & Energy Trends</h3>
              <p className="text-white/40 text-sm">Weekly forecast based on planetary movements</p>
            </div>
            <div className="flex items-center gap-4 text-xs font-medium">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-accent" />
                <span className="text-white/60">Career</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-blue-500" />
                <span className="text-white/60">Finance</span>
              </div>
            </div>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorCareer" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#FD7D00" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#FD7D00" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorFinance" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ffffff05" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#ffffff40', fontSize: 12 }} 
                  dy={10}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2E0A', 
                    border: '1px solid #ffffff10',
                    borderRadius: '12px',
                    color: '#fff'
                  }}
                  itemStyle={{ color: '#fff' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="career" 
                  stroke="#FD7D00" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorCareer)" 
                />
                <Area 
                  type="monotone" 
                  dataKey="finance" 
                  stroke="#3b82f6" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorFinance)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card>
          <h3 className="text-lg font-bold text-white mb-6">Relationship Harmony</h3>
          <div className="h-[200px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ffffff05" />
                <XAxis 
                  dataKey="name" 
                  hide
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2E0A', 
                    border: '1px solid #ffffff10',
                    borderRadius: '12px',
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="relation" 
                  stroke="#ec4899" 
                  strokeWidth={3} 
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-white">Suggested Actions</h3>
            <Briefcase className="text-white/20 w-5 h-5" />
          </div>
          <div className="space-y-4">
            <SuggestionItem 
              title="Investment" 
              desc="Hold off until Tuesday for better returns." 
              level="Caution"
            />
            <SuggestionItem 
              title="Communication" 
              desc="Express your feelings today; the stars favor clarity." 
              level="Positive"
            />
          </div>
        </Card>
      </div>
    </div>
  );
};

const SuggestionItem = ({ title, desc, level }: any) => (
  <div className="flex items-start gap-4 p-3 bg-white/5 rounded-xl border border-white/5 hover:border-accent/30 transition-all cursor-default">
    <div className={cn(
      "w-2 h-2 rounded-full mt-2",
      level === "Positive" ? "bg-green-500" : "bg-accent"
    )} />
    <div>
      <h4 className="text-sm font-bold text-white">{title}</h4>
      <p className="text-xs text-white/50">{desc}</p>
    </div>
  </div>
);

export default DashboardPage;
