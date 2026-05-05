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
    </motion.div>
  );
};

export default SplashScreen;
