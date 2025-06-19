
import { useEffect } from 'react';
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
      threshold: 0.15,
      rootMargin: '0px 0px -100px 0px'
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
      element.style.transform = 'translateY(80px) rotateX(-8deg) scale(0.95)';
      element.style.opacity = '0';
      element.style.transition = 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)';
      element.style.transformStyle = 'preserve-3d';
      observer.observe(section);
    });

    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 overflow-x-hidden">
      <Header />
      <div className="transform-gpu">
        <Hero />
        <About />
        <Services />
        <Skills />
        <Portfolio />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
