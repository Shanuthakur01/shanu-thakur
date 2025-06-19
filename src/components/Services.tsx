
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      title: "Full-Stack Web Development",
      description: "Modern web applications using MERN stack with scalable architecture and clean code.",
      icon: "💻",
    },
    {
      title: "UI/UX Design",
      description: "Crafting intuitive, user-friendly interfaces that provide exceptional user experiences.",
      icon: "🎨",
    },
    {
      title: "API Development & Integration",
      description: "RESTful APIs and seamless third-party service integration for robust applications.",
      icon: "🔗",
    },
    {
      title: "AWS Deployment & Cloud Services",
      description: "Scalable cloud hosting solutions with optimized performance and security.",
      icon: "☁️",
    },
    {
      title: "Debugging & Optimization",
      description: "Performance tuning, bug fixing, and code optimization for better user experiences.",
      icon: "🔧",
    },
    {
      title: "Database Management",
      description: "Efficient database design and management using MongoDB and SQL databases.",
      icon: "🗄️",
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
    <section id="services" className="py-16 bg-slate-900 transition-all duration-300">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Services</h2>
          <div className="w-24 h-1 bg-red-500 mx-auto mb-6"></div>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            I offer comprehensive web development services to help bring your ideas to life
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl border border-slate-700 hover:border-red-500/30"
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                rotateY: 5,
                rotateX: 5
              }}
              style={{ 
                transformStyle: "preserve-3d"
              }}
            >
              <motion.div 
                className="text-4xl mb-4"
                whileHover={{ 
                  scale: 1.2,
                  rotate: 10
                }}
                transition={{ duration: 0.3 }}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-4 transition-colors duration-300 hover:text-red-400">{service.title}</h3>
              <p className="text-slate-300 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
