
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
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.style.transform = 'translateY(0) rotateX(0)';
          entry.target.style.opacity = '1';
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      section.style.transform = 'translateY(50px) rotateX(-5deg)';
      section.style.opacity = '0';
      section.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
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
