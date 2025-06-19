
import { Github, Mail } from 'lucide-react';

const Footer = () => {
  const handleEmailClick = () => {
    window.open('mailto:bt075590@gmail.com', '_blank');
  };

  const handleGitHubClick = () => {
    window.open('https://github.com/Shanuthakur01', '_blank');
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold text-white mb-2">
              Shanu Thakur<span className="text-red-500">.</span>
            </div>
            <p className="text-slate-400">Full-Stack Web Developer | MERN Stack Enthusiast</p>
          </div>
          
          <div className="flex space-x-6">
            <button
              onClick={handleEmailClick}
              className="bg-slate-800 hover:bg-red-500 text-white p-3 rounded-lg transition-all duration-300 transform hover:scale-110"
            >
              <Mail size={20} />
            </button>
            <button
              onClick={handleGitHubClick}
              className="bg-slate-800 hover:bg-red-500 text-white p-3 rounded-lg transition-all duration-300 transform hover:scale-110"
            >
              <Github size={20} />
            </button>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-400">
            © 2025 Shanu Thakur. All rights reserved. Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
