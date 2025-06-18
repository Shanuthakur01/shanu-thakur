
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23334155' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          
          {/* Content */}
          <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
            <div className="mb-6">
              <span className="text-red-500 font-semibold text-lg">Hello, I'm</span>
              <h1 className="text-5xl lg:text-7xl font-bold text-white mt-2 mb-4">
                Shanu Thakur
              </h1>
              <h2 className="text-2xl lg:text-3xl text-slate-300 mb-4">
                Full-Stack Web Developer
              </h2>
              <div className="flex items-center justify-center lg:justify-start mb-6">
                <span className="text-yellow-400 mr-2">💻</span>
                <span className="text-slate-400 text-lg">MERN Stack Enthusiast</span>
              </div>
            </div>
            
            <p className="text-xl text-slate-400 mb-8 max-w-2xl">
              Building scalable, user-friendly web applications with modern technologies. 
              Passionate about creating digital experiences that make a difference.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToPortfolio}
                className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                View My Work
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-slate-500 text-slate-300 hover:border-red-500 hover:text-red-500 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>
          </div>

          {/* Profile Picture */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-red-500 to-orange-500 p-1">
                <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-800 rounded-full flex items-center justify-center">
                    <div className="text-white text-6xl font-bold">ST</div>
                  </div>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-500 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-yellow-400 rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-slate-400" size={24} />
      </div>
    </section>
  );
};

export default Hero;
