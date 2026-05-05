import { useState, type FormEvent } from "react";
import { Moon, Sun, Compass, Star } from "lucide-react";
import { motion } from "framer-motion";
import Card from "../components/Card";
import Button from "../components/Button";
import Input from "../components/Input";

const KundliPage = () => {
  const [loading, setLoading] = useState(false);
  const [generated, setGenerated] = useState(false);

  const handleGenerate = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setGenerated(true);
    }, 2000);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div className="text-center md:text-left">
        <h1 className="text-3xl font-bold text-white mb-2">Birth Chart (Kundli)</h1>
        <p className="text-white/60">Unlock your destiny with precise planetary calculations.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Form */}
        <Card className="lg:col-span-1 h-fit">
          <form onSubmit={handleGenerate} className="space-y-6">
            <div className="space-y-4">
              <Input 
                label="Full Name" 
                placeholder="Avinash Magar" 
                required
              />
              <div className="grid grid-cols-2 gap-4">
                <Input 
                  label="Date of Birth" 
                  type="date" 
                  required
                />
                <Input 
                  label="Time of Birth" 
                  type="time" 
                  required
                />
              </div>
              <Input 
                label="Location of Birth" 
                placeholder="Mumbai, Maharashtra" 
                required
              />
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-white/70 ml-1">Gender</label>
                  <select className="w-full bg-surface/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all appearance-none">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-white/70 ml-1">Time Format</label>
                  <select className="w-full bg-surface/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all appearance-none">
                    <option value="24">24 Hour</option>
                    <option value="12">12 Hour</option>
                  </select>
                </div>
              </div>
            </div>
            <Button 
              type="submit" 
              className="w-full" 
              isLoading={loading}
            >
              Generate Chart
            </Button>
          </form>
        </Card>

        {/* Chart Visualization */}
        <Card className="lg:col-span-2 relative min-h-[500px] flex items-center justify-center overflow-hidden">
          {!generated && !loading && (
            <div className="text-center z-10 p-8">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Compass className="text-accent w-10 h-10 animate-pulse" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Ready to Reveal?</h3>
              <p className="text-white/40 max-w-sm mx-auto">
                Fill in your birth details on the left to generate your personalized Vedic astrology chart.
              </p>
            </div>
          )}

          {loading && (
            <div className="text-center z-10">
              <div className="relative w-32 h-32 mx-auto mb-8">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-4 border-t-accent border-r-transparent border-b-transparent border-l-transparent rounded-full"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-4 border-2 border-t-white/20 border-r-transparent border-b-transparent border-l-transparent rounded-full"
                />
                <Star className="absolute inset-0 m-auto text-accent w-8 h-8" />
              </div>
              <p className="text-white font-medium animate-pulse">Calculating planetary positions...</p>
            </div>
          )}

          {generated && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full h-full p-6 flex flex-col items-center"
            >
              <div className="grid grid-cols-3 gap-6 w-full mb-10">
                <div className="text-center">
                  <p className="text-xs text-white/40 uppercase mb-1">Ascendant</p>
                  <p className="text-lg font-bold text-white">Cancer</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-white/40 uppercase mb-1">Moon Sign</p>
                  <p className="text-lg font-bold text-white">Leo</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-white/40 uppercase mb-1">Nakshatra</p>
                  <p className="text-lg font-bold text-white">Magha</p>
                </div>
              </div>

              {/* Placeholder Chart Layout */}
              <div className="relative w-full max-w-[400px] aspect-square border-2 border-white/20 rounded-lg p-2">
                <div className="absolute inset-0 grid grid-cols-3 grid-rows-3">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="border border-white/10 flex flex-col items-center justify-center p-2">
                      <span className="text-[10px] text-white/20 mb-1">{i + 1}</span>
                      {i === 4 && <Star className="text-accent w-6 h-6" />}
                      {i === 0 && <span className="text-xs font-bold text-white">Ma</span>}
                      {i === 2 && <span className="text-xs font-bold text-white">Ve</span>}
                      {i === 8 && <span className="text-xs font-bold text-white">Su</span>}
                    </div>
                  ))}
                </div>
                {/* Diagonal lines to make it look like a North Indian chart */}
                <div className="absolute inset-0 pointer-events-none">
                   <svg viewBox="0 0 100 100" className="w-full h-full stroke-white/10 stroke-[0.5]">
                      <line x1="0" y1="0" x2="100" y2="100" />
                      <line x1="100" y1="0" x2="0" y2="100" />
                      <line x1="50" y1="0" x2="50" y2="100" />
                      <line x1="0" y1="50" x2="100" y2="50" />
                   </svg>
                </div>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-4 w-full">
                <Button variant="secondary" className="w-full">Download PDF</Button>
                <Button className="w-full">Detailed Analysis</Button>
              </div>
            </motion.div>
          )}

          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Sun className="w-24 h-24" />
          </div>
          <div className="absolute bottom-0 left-0 p-4 opacity-10">
            <Moon className="w-24 h-24" />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default KundliPage;
