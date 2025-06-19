
import { ArrowDown, Code, Database, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import TypewriterText from './TypewriterText';
import ParticlesBackground from './ParticlesBackground';

const Hero = () => {
  const phrases = [
    "Hi, I'm Shanu Thakur",
    "I build Web Apps",
    "Full-Stack Developer",
    "MERN Stack Enthusiast"
  ];

  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
      <ParticlesBackground />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-10">
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-40 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Content */}
          <motion.div 
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Status Badge */}
            <motion.div 
              className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 dark:bg-white/10 backdrop-blur-sm border border-white/30 dark:border-white/20 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              <span className="text-slate-700 dark:text-slate-300 text-sm font-medium">Available for opportunities</span>
            </motion.div>

            <div className="mb-8">
              <motion.h1 
                className="text-5xl lg:text-7xl font-bold text-slate-900 dark:text-white mt-3 mb-4 bg-gradient-to-r from-slate-900 via-red-500 to-blue-600 dark:from-white dark:via-red-400 dark:to-blue-400 bg-clip-text text-transparent min-h-[200px]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <TypewriterText phrases={phrases} />
              </motion.h1>
              
              {/* Tech Stack Pills */}
              <motion.div 
                className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                {[
                  { icon: Code, label: "React.js", color: "blue" },
                  { icon: Database, label: "Node.js", color: "green" },
                  { icon: Globe, label: "MongoDB", color: "purple" }
                ].map((tech, index) => (
                  <motion.div
                    key={tech.label}
                    className="flex items-center px-3 py-2 rounded-full bg-white/20 dark:bg-white/5 backdrop-blur-sm border border-white/30 dark:border-white/10"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    <tech.icon className={`w-4 h-4 text-${tech.color}-400 mr-2`} />
                    <span className="text-slate-700 dark:text-slate-300 text-sm">{tech.label}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            
            <motion.p 
              className="text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              Building scalable, user-friendly web applications with modern technologies. 
              Passionate about creating digital experiences that make a difference.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <motion.button
                onClick={scrollToPortfolio}
                className="group relative bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-500 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              </motion.button>
              <motion.button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative bg-white/20 dark:bg-white/10 backdrop-blur-sm border border-white/30 dark:border-white/20 text-slate-900 dark:text-white hover:bg-white/30 dark:hover:bg-white/20 px-8 py-4 rounded-xl font-semibold transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Get In Touch</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Profile Picture with Modern Design */}
          <motion.div 
            className="lg:w-1/2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              {/* Main Profile Container */}
              <motion.div 
                className="relative w-80 h-80 lg:w-96 lg:h-96"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* Glassmorphism Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/10 dark:from-white/10 dark:to-white/5 backdrop-blur-xl rounded-3xl border border-white/30 dark:border-white/20 shadow-2xl"></div>
                
                {/* Profile Picture */}
                <div className="absolute inset-4 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 p-1">
                  <div className="w-full h-full rounded-2xl bg-slate-800 flex items-center justify-center overflow-hidden">
                    <img 
                      src="https://i.postimg.cc/wjg99cVz/Whats-App-Image-2025-02-08-at-00-31-28-18f8e700.jpg"
                      alt="Shanu Thakur"
                      className="w-full h-full object-cover rounded-2xl"
                      loading="lazy"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Floating Tech Icons */}
              {[
                { icon: Code, position: "-top-6 -right-6", color: "blue", delay: 0 },
                { icon: Database, position: "-bottom-6 -left-6", color: "green", delay: 1 },
                { icon: Globe, position: "top-1/2 -left-8", color: "purple", delay: 0.5 }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`absolute ${item.position} w-12 h-12 bg-gradient-to-br from-${item.color}-500 to-${item.color}-600 rounded-2xl flex items-center justify-center shadow-lg`}
                  animate={{ 
                    y: [0, -10, 0],
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: item.delay
                  }}
                >
                  <item.icon className="w-6 h-6 text-white" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center">
          <span className="text-slate-600 dark:text-slate-400 text-sm mb-2">Scroll Down</span>
          <ArrowDown className="text-slate-600 dark:text-slate-400" size={24} />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
