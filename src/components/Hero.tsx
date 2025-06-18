
import { ArrowDown, Code, Database, Globe } from 'lucide-react';

const Hero = () => {
  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            {/* Status Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              <span className="text-slate-300 text-sm font-medium">Available for opportunities</span>
            </div>

            <div className="mb-8">
              <span className="text-red-400 font-semibold text-lg tracking-wide uppercase">Hello, I'm</span>
              <h1 className="text-5xl lg:text-7xl font-bold text-white mt-3 mb-4 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                Shanu Thakur
              </h1>
              <h2 className="text-2xl lg:text-3xl text-slate-300 mb-6 font-light">
                Full-Stack Web Developer
              </h2>
              
              {/* Tech Stack Pills */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-8">
                <div className="flex items-center px-3 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
                  <Code className="w-4 h-4 text-blue-400 mr-2" />
                  <span className="text-slate-300 text-sm">React.js</span>
                </div>
                <div className="flex items-center px-3 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
                  <Database className="w-4 h-4 text-green-400 mr-2" />
                  <span className="text-slate-300 text-sm">Node.js</span>
                </div>
                <div className="flex items-center px-3 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
                  <Globe className="w-4 h-4 text-purple-400 mr-2" />
                  <span className="text-slate-300 text-sm">MongoDB</span>
                </div>
              </div>
            </div>
            
            <p className="text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed">
              Building scalable, user-friendly web applications with modern technologies. 
              Passionate about creating digital experiences that make a difference.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToPortfolio}
                className="group relative bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25"
              >
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-500 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10">Get In Touch</span>
              </button>
            </div>
          </div>

          {/* Profile Picture with Modern Design */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main Profile Container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                {/* Glassmorphism Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl"></div>
                
                {/* Profile Picture */}
                <div className="absolute inset-4 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 p-1">
                  <div className="w-full h-full rounded-2xl bg-slate-800 flex items-center justify-center overflow-hidden">
                    <img 
                      src="https://i.postimg.cc/wjg99cVz/Whats-App-Image-2025-02-08-at-00-31-28-18f8e700.jpg"
                      alt="Shanu Thakur"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                </div>
              </div>

              {/* Floating Tech Icons */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg animate-float">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg animate-float delay-1000">
                <Database className="w-6 h-6 text-white" />
              </div>
              <div className="absolute top-1/2 -left-8 w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg animate-float delay-500">
                <Globe className="w-5 h-5 text-white" />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 left-4 w-8 h-8 bg-red-500/30 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-yellow-400/40 rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center">
          <span className="text-slate-400 text-sm mb-2">Scroll Down</span>
          <ArrowDown className="text-slate-400" size={24} />
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
          .delay-500 {
            animation-delay: 0.5s;
          }
          .delay-1000 {
            animation-delay: 1s;
          }
        `
      }} />
    </section>
  );
};

export default Hero;
