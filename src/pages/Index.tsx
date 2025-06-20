
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Skills from '../components/Skills';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const element = entry.target as HTMLElement;
        if (entry.isIntersecting) {
          element.classList.add('animate-fade-in');
          element.style.transform = 'translateY(0) rotateX(0) scale(1)';
          element.style.opacity = '1';
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      const element = section as HTMLElement;
      element.style.transform = 'translateY(60px) rotateX(-5deg) scale(0.98)';
      element.style.opacity = '0';
      element.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
      element.style.transformStyle = 'preserve-3d';
      observer.observe(section);
    });

    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const sectionVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -10,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 overflow-x-hidden transition-colors duration-300">
      <Header />
      <div className="transform-gpu">
        <Hero />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <About />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <Services />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <Skills />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <Portfolio />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <Contact />
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
