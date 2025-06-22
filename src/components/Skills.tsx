
import { motion } from 'framer-motion';
import SkillsCharts from './SkillsCharts';
import SilkShader from './SilkShader';

const Skills = () => {
  const skillCategories = [
    {
      category: "Languages & Frameworks",
      skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "React.js", "Node.js"],
      icon: "💻",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      category: "Back-End & Database",
      skills: ["RESTful APIs", "MongoDB", "Express.js", "JWT Authentication"],
      icon: "🗄️",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      category: "Tools & Platforms",
      skills: ["Git", "GitHub", "VS Code", "AWS", "Postman", "NPM"],
      icon: "🛠️",
      gradient: "from-orange-500 to-red-500"
    },
    {
      category: "Concepts",
      skills: ["UI/UX Design", "DSA (Arrays, Trees, Graphs)", "Encryption", "Debugging"],
      icon: "🧠",
      gradient: "from-purple-500 to-pink-500"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-800 transform-gpu transition-colors duration-300 relative z-10 overflow-hidden">
      {/* Silk Shader Background */}
      <SilkShader 
        speed={0.15}
        scale={2.0}
        noise={3.5}
        rotation={0.1}
        backgroundColor="#64748b"
        className="opacity-20 dark:opacity-30"
      />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-2xl">
              🚀
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and proficiencies with interactive visualizations
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Skill Categories */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-gradient-to-r from-slate-600 to-slate-800 rounded-lg flex items-center justify-center">
                💼
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Technical Skills</h3>
            </div>
            
            {skillCategories.map((category, index) => (
              <motion.div 
                key={index} 
                className="group bg-white/80 dark:bg-slate-700/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 dark:border-slate-600 hover:border-transparent relative overflow-hidden"
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                {/* Gradient border effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl`} 
                     style={{ padding: '2px' }}>
                  <div className="bg-white/90 dark:bg-slate-700/90 h-full w-full rounded-xl"></div>
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 bg-gradient-to-r ${category.gradient} rounded-lg flex items-center justify-center text-xl shadow-lg`}>
                      {category.icon}
                    </div>
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-300"
                        style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }}>
                      {category.category}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        className="bg-slate-100 dark:bg-slate-600 text-slate-700 dark:text-slate-200 px-3 py-2 rounded-lg text-sm font-medium hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-300 cursor-default shadow-sm"
                        whileHover={{ scale: 1.05, y: -2 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: skillIndex * 0.05 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Currently Learning Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
                📚
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Currently Learning</h3>
            </div>
            
            <motion.div 
              className="bg-gradient-to-br from-yellow-50/90 via-orange-50/90 to-red-50/90 dark:from-slate-700/80 dark:via-slate-600/80 dark:to-slate-700/80 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-yellow-200 dark:border-orange-500/20 relative overflow-hidden"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center text-2xl shadow-lg"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  >
                    🎯
                  </motion.div>
                  <h4 className="text-xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                    Expanding My Skillset
                  </h4>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  {["TypeScript", "Next.js", "Docker", "GraphQL", "Python", "Kubernetes"].map((tech, index) => (
                    <motion.div
                      key={index}
                      className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm text-slate-800 dark:text-slate-200 px-4 py-3 rounded-lg text-sm font-medium shadow-lg border border-yellow-200 dark:border-orange-500/20 hover:shadow-xl transition-all duration-300"
                      whileHover={{ scale: 1.05, y: -2 }}
                      initial={{ opacity: 0, rotate: -10, scale: 0.8 }}
                      animate={{ opacity: 1, rotate: 0, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
                        {tech}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Interactive Charts Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <SkillsCharts />
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
