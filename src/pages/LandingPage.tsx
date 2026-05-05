import { motion } from "framer-motion";
import { Sparkles, Moon, MessageSquare, Zap, CheckCircle } from "lucide-react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Card from "../components/Card";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-accent/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-surface/50 border border-white/10 rounded-full mb-8"
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-white/80">The Future is Here</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Your Life, <br />
            <span className="text-accent">Predicted Smarter</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-white/60 max-w-2xl mx-auto mb-10"
          >
            Combine ancient wisdom with modern AI to unlock the secrets of your future. 
            Get accurate predictions for career, love, and health.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/dashboard">
              <Button size="lg" className="w-full sm:w-auto">
                Get Your Prediction
              </Button>
            </Link>
            <Button variant="secondary" size="lg" className="w-full sm:w-auto">
              How it Works
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-surface/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Deep Insights for Every Life Aspect</h2>
            <p className="text-white/60">Everything you need to navigate your destiny.</p>
          </div>
          
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <FeatureCard 
              icon={<Moon className="w-6 h-6 text-accent" />}
              title="Birth Chart Analysis"
              description="Detailed Kundli reading based on your birth time and location."
              variants={item}
            />
            <FeatureCard 
              icon={<MessageSquare className="w-6 h-6 text-accent" />}
              title="AI Astro Chat"
              description="Instant answers to your life questions powered by advanced AI."
              variants={item}
            />
            <FeatureCard 
              icon={<Zap className="w-6 h-6 text-accent" />}
              title="Daily Horoscopes"
              description="Stay prepared with personalized daily predictions and alerts."
              variants={item}
            />
          </motion.div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-8">Unlocking the stars is simple.</h2>
              <div className="space-y-6">
                <Step 
                  number="01" 
                  title="Share your details" 
                  description="Enter your birth date, time, and location for precise calculation."
                />
                <Step 
                  number="02" 
                  title="Get Analysis" 
                  description="Our system calculates your planetary positions instantly."
                />
                <Step 
                  number="03" 
                  title="Talk to Experts" 
                  description="Chat with our AI or connect with live professional astrologers."
                />
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 blur-[100px] rounded-full" />
              <Card className="relative z-10 border-accent/20">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/5">
                    <CheckCircle className="text-accent w-5 h-5" />
                    <span className="text-white/80">98% Accuracy in career peaks</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/5">
                    <CheckCircle className="text-accent w-5 h-5" />
                    <span className="text-white/80">Personalized Compatibility Score</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/5">
                    <CheckCircle className="text-accent w-5 h-5" />
                    <span className="text-white/80">Live Consultations 24/7</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-white/5 text-center text-white/40 text-sm">
        <p>© 2026 AstroBless. All rights reserved.</p>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description, variants }: any) => (
  <motion.div variants={variants}>
    <Card className="h-full">
      <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-white/60 leading-relaxed">{description}</p>
    </Card>
  </motion.div>
);

const Step = ({ number, title, description }: any) => (
  <div className="flex gap-6">
    <div className="text-3xl font-bold text-accent/30">{number}</div>
    <div>
      <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
      <p className="text-white/60">{description}</p>
    </div>
  </div>
);

export default LandingPage;
