
import { Github, ArrowRight, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const projects = [
    {
      title: "Campus Connection Website",
      description: "A social platform for college students to connect based on interests and academics. Features real-time messaging, secure authentication, and responsive design.",
      tech: ["React.js", "Node.js", "MongoDB", "JWT", "AWS", "WebSocket"],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&crop=center",
      github: "https://github.com/Shanuthakur01",
      live: "#",
      period: "Jan 2025 - Apr 2025",
      role: "Full-Stack Developer",
    },
    {
      title: "E-Commerce Platform",
      description: "Complete e-commerce solution with user authentication, product management, shopping cart, and payment integration. Built with modern web technologies.",
      tech: ["React.js", "Express.js", "MongoDB", "Stripe API", "AWS S3"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center",
      github: "https://github.com/Shanuthakur01",
      live: "#",
      period: "Sep 2024 - Dec 2024",
      role: "Lead Developer",
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, team collaboration features, and intuitive user interface.",
      tech: ["React.js", "Node.js", "Socket.io", "MongoDB", "Material-UI"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=center",
      github: "https://github.com/Shanuthakur01",
      live: "#",
      period: "Jun 2024 - Aug 2024",
      role: "Frontend Developer",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
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
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-red-500 mx-auto mb-6"></div>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-3xl mx-auto">
            Showcase of my recent projects and development work
          </p>
        </motion.div>

        <motion.div 
          className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-white/20 dark:border-slate-700/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <motion.img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Hover overlay with buttons */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-3">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/20 backdrop-blur-sm border border-white/30 text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={20} />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      className="bg-white/20 backdrop-blur-sm border border-white/30 text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  </div>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-red-500 dark:text-red-400 text-sm font-medium bg-red-50 dark:bg-red-500/10 px-2 py-1 rounded-full">
                    {project.role}
                  </span>
                  <span className="text-slate-500 dark:text-slate-400 text-sm">{project.period}</span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-red-500 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-2 py-1 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Action Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-slate-600 dark:text-slate-400 hover:text-red-500 dark:hover:text-red-400 transition-colors duration-300 group/link"
                  >
                    <Github size={16} className="mr-1 group-hover/link:scale-110 transition-transform duration-200" />
                    <span className="text-sm font-medium">Code</span>
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center text-slate-600 dark:text-slate-400 hover:text-red-500 dark:hover:text-red-400 transition-colors duration-300 group/link"
                  >
                    <ArrowRight size={16} className="mr-1 group-hover/link:scale-110 transition-transform duration-200" />
                    <span className="text-sm font-medium">Live Demo</span>
                  </a>
                </div>
              </div>

              {/* Glassmorphism border effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <motion.a
            href="https://github.com/Shanuthakur01"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="mr-2" size={20} />
            View More Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
