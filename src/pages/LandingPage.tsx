import { motion } from "framer-motion";
import { Sparkles, Moon, MessageSquare, Zap } from "lucide-react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Card from "../components/Card";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <div className="min-h-screen bg-background overflow-hidden selection:bg-accent/30">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-32 px-6">
        {/* Subtle Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-10 backdrop-blur-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-white/60">Intelligence Meets Astrology</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tight leading-[0.9]"
          >
            Predict Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-accent to-accent-hover">Next Chapter</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-white/40 max-w-xl mx-auto mb-12 font-medium leading-relaxed"
          >
            The most advanced AI-powered Vedic astrology platform. Get precise life insights based on ancient cosmic wisdom.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <Link to="/dashboard">
              <Button size="lg" className="w-full sm:w-64 h-14 text-sm font-black uppercase tracking-widest">
                Start Your Journey
              </Button>
            </Link>
            <Button variant="secondary" size="lg" className="w-full sm:w-64 h-14 text-sm font-black uppercase tracking-widest border-white/5 hover:bg-white/5">
              Explore Features
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 px-6 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
          >
            <FeatureCard 
              icon={<Moon className="w-5 h-5 text-accent" />}
              title="Vedic Analysis"
              description="Deep-dive into your planetary alignments with precise astronomical calculations."
              variants={item}
            />
            <FeatureCard 
              icon={<MessageSquare className="w-5 h-5 text-accent" />}
              title="AI Counselor"
              description="Get instant, personalized guidance for career, relationships, and health."
              variants={item}
            />
            <FeatureCard 
              icon={<Zap className="w-5 h-5 text-accent" />}
              title="Real-time Alerts"
              description="Stay ahead with cosmic transit notifications and daily horoscope updates."
              variants={item}
            />
          </motion.div>
        </div>
      </section>

      {/* Modern Workflow Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-surface/30 border border-white/5 rounded-[40px] p-8 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 blur-[120px] -mr-48 -mt-48 rounded-full" />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-10 tracking-tight leading-tight">
                  Astrology <br /> Reimagined for <br /> the Modern Age.
                </h2>
                <div className="space-y-10">
                  <Step number="01" title="Input Details" description="Securely provide your birth coordinates for accurate mapping." />
                  <Step number="02" title="Analyze" description="Our AI processes thousands of cosmic variables in seconds." />
                  <Step number="03" title="Evolve" description="Receive actionable insights to master your life's path." />
                </div>
              </div>
              <div className="relative aspect-square">
                <Card className="absolute inset-0 bg-white/5 border-white/10 backdrop-blur-2xl flex items-center justify-center">
                  <div className="text-center p-10">
                    <div className="w-24 h-24 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse shadow-accent/20 shadow-2xl">
                      <Sparkles className="w-10 h-10 text-accent" />
                    </div>
                    <h3 className="text-2xl font-black text-white mb-2 italic">AstroBless AI</h3>
                    <p className="text-white/30 text-sm">Processing Current Transits...</p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center">
              <div className="w-4 h-4 bg-accent rounded-full" />
            </div>
            <span className="text-lg font-black text-white tracking-tight">AstroBless</span>
          </div>
          <p className="text-[11px] font-black uppercase tracking-[0.2em] text-white/20">
            © 2026 Crafted with precision. All rights reserved.
          </p>
          <div className="flex gap-8">
            <button className="text-[11px] font-black uppercase tracking-widest text-white/30 hover:text-white transition-colors">Twitter</button>
            <button className="text-[11px] font-black uppercase tracking-widest text-white/30 hover:text-white transition-colors">Discord</button>
          </div>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description, variants }: any) => (
  <motion.div variants={variants}>
    <Card className="h-full p-8 bg-transparent border-white/5 hover:border-accent/20 hover:bg-white/[0.01]">
      <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center mb-8 border border-white/5">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-white mb-4">{title}</h3>
      <p className="text-sm text-white/40 leading-relaxed font-medium">{description}</p>
    </Card>
  </motion.div>
);

const Step = ({ number, title, description }: any) => (
  <div className="flex gap-8 group">
    <div className="text-xs font-black text-white/10 border-r border-white/5 pr-8 transition-colors group-hover:text-accent group-hover:border-accent/20">{number}</div>
    <div>
      <h4 className="text-sm font-black text-white uppercase tracking-widest mb-2">{title}</h4>
      <p className="text-sm text-white/40 font-medium leading-relaxed">{description}</p>
    </div>
  </div>
);

export default LandingPage;
