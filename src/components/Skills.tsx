
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

const Skills = () => {
  const skillCategories = [
    {
      category: "Languages & Frameworks",
      skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "React.js", "Node.js"],
    },
    {
      category: "Back-End & Database",
      skills: ["RESTful APIs", "MongoDB", "Express.js", "JWT Authentication"],
    },
    {
      category: "Tools & Platforms",
      skills: ["Git", "GitHub", "VS Code", "AWS", "Postman", "NPM"],
    },
    {
      category: "Concepts",
      skills: ["UI/UX Design", "DSA (Arrays, Trees, Graphs)", "Encryption", "Debugging"],
    },
  ];

  const skillLevels = [
    { name: "JavaScript", level: 90 },
    { name: "React.js", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "MongoDB", level: 75 },
    { name: "AWS", level: 70 },
    { name: "UI/UX", level: 75 },
  ];

  const radarData = [
    { skill: 'Frontend', level: 90 },
    { skill: 'Backend', level: 80 },
    { skill: 'Database', level: 75 },
    { skill: 'DevOps', level: 70 },
    { skill: 'UI/UX', level: 75 },
    { skill: 'Mobile', level: 65 },
  ];

  const COLORS = ['#ef4444', '#f97316', '#eab308', '#22c55e', '#3b82f6', '#8b5cf6'];

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
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-800 transform-gpu transition-colors duration-300">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-red-500 mx-auto mb-6"></div>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and proficiencies
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skill Categories */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Technical Skills</h3>
            <div className="space-y-6">
              {skillCategories.map((category, index) => (
                <motion.div 
                  key={index} 
                  className="bg-white dark:bg-slate-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <h4 className="text-lg font-semibold text-red-500 dark:text-red-400 mb-4">{category.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        className="bg-slate-100 dark:bg-slate-600 text-slate-700 dark:text-slate-200 px-3 py-1 rounded-full text-sm font-medium hover:bg-red-500 hover:text-white transition-colors duration-300 cursor-default"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: skillIndex * 0.05 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Interactive Charts */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Proficiency Levels</h3>
            
            {/* Bar Chart */}
            <motion.div 
              className="bg-white dark:bg-slate-700 rounded-lg p-6 mb-8 shadow-lg"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Skills Progress</h4>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={skillLevels}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
                  <XAxis 
                    dataKey="name" 
                    tick={{ fill: '#6b7280', fontSize: 12 }}
                    angle={-45}
                    textAnchor="end"
                    height={80}
                  />
                  <YAxis tick={{ fill: '#6b7280' }} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1e293b', 
                      border: '1px solid #ef4444',
                      borderRadius: '8px',
                      color: '#fff'
                    }}
                  />
                  <Bar dataKey="level" fill="#ef4444" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Radar Chart */}
            <motion.div 
              className="bg-white dark:bg-slate-700 rounded-lg p-6 mb-8 shadow-lg"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Skills Radar</h4>
              <ResponsiveContainer width="100%" height={300}>
                <RadarChart data={radarData}>
                  <PolarGrid />
                  <PolarAngleAxis tick={{ fill: '#6b7280', fontSize: 12 }} />
                  <PolarRadiusAxis 
                    angle={90} 
                    domain={[0, 100]} 
                    tick={{ fill: '#6b7280', fontSize: 10 }}
                  />
                  <Radar 
                    name="Skills" 
                    dataKey="level" 
                    stroke="#ef4444" 
                    fill="#ef4444" 
                    fillOpacity={0.3}
                    strokeWidth={2}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1e293b', 
                      border: '1px solid #ef4444',
                      borderRadius: '8px',
                      color: '#fff'
                    }}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Currently Learning */}
            <motion.div 
              className="p-6 bg-gradient-to-br from-red-50 to-orange-50 dark:from-slate-700 dark:to-slate-600 rounded-lg shadow-lg"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Currently Learning</h4>
              <div className="flex flex-wrap gap-2">
                {["TypeScript", "Next.js", "Docker", "GraphQL"].map((tech, index) => (
                  <motion.span
                    key={index}
                    className="bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 px-3 py-1 rounded-full text-sm font-medium shadow-md"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, rotate: -10 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
