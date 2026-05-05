import { motion } from "framer-motion";
import logo from "../assets/logo.png";

const SplashScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        transition: { duration: 0.8, ease: "easeInOut" }
      }}
      className="fixed inset-0 z-[100] bg-[#192309] flex flex-col items-center justify-center"
    >
      <div className="relative">
        {/* Glow Effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ 
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 bg-accent rounded-full blur-[60px] opacity-20"
        />

        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1] // Custom ease-out
          }}
          className="relative z-10 w-32 h-32 md:w-48 md:h-48"
        >
          <img 
            src={logo} 
            alt="AstroBless Logo" 
            className="w-full h-full object-contain"
          />
        </motion.div>
      </div>

      {/* Text Animation */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-8 text-center"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-widest">
          ASTRO<span className="text-accent">BLESS</span>
        </h2>
        <div className="mt-4 flex gap-1 justify-center">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2
              }}
              className="w-1.5 h-1.5 bg-accent rounded-full"
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SplashScreen;
