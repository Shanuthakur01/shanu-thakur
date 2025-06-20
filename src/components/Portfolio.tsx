
import { motion } from 'framer-motion';

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack MERN application with payment integration",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/Shanuthakur01",
      demo: "https://demo-link.com",
      image: "/placeholder.svg"
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates",
      tech: ["React", "Express", "Socket.io", "PostgreSQL"],
      github: "https://github.com/Shanuthakur01",
      demo: "https://demo-link.com",
      image: "/placeholder.svg"
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather app with location-based forecasts",
      tech: ["React", "OpenWeather API", "Chart.js"],
      github: "https://github.com/Shanuthakur01",
      demo: "https://demo-link.com",
      image: "/placeholder.svg"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">Portfolio</h2>
          <div className="w-24 h-1 bg-red-500 mx-auto mb-6"></div>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 dark:border-slate-700"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                rotateY: 5,
                scale: 1.02
              }}
              style={{ 
                transformStyle: "preserve-3d"
              }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-red-500 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 px-2 py-1 rounded-md text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-2 px-4 rounded-lg font-medium text-center hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    GitHub
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-red-500 text-white py-2 px-4 rounded-lg font-medium text-center hover:bg-red-600 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
