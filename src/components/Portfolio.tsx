
import { Github, ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "Campus Connection Website",
      description: "A social platform for college students to connect based on interests and academics. Features real-time messaging, secure authentication, and responsive design.",
      tech: ["React.js", "Node.js", "MongoDB", "JWT", "AWS", "WebSocket"],
      image: "/api/placeholder/600/400",
      github: "#",
      live: "#",
      period: "Jan 2025 - Apr 2025",
      role: "Full-Stack Developer",
    },
    {
      title: "E-Commerce Platform",
      description: "Complete e-commerce solution with user authentication, product management, shopping cart, and payment integration. Built with modern web technologies.",
      tech: ["React.js", "Express.js", "MongoDB", "Stripe API", "AWS S3"],
      image: "/api/placeholder/600/400",
      github: "#",
      live: "#",
      period: "Sep 2024 - Dec 2024",
      role: "Lead Developer",
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, team collaboration features, and intuitive user interface.",
      tech: ["React.js", "Node.js", "Socket.io", "MongoDB", "Material-UI"],
      image: "/api/placeholder/600/400",
      github: "#",
      live: "#",
      period: "Jun 2024 - Aug 2024",
      role: "Frontend Developer",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Portfolio</h2>
          <div className="w-24 h-1 bg-red-500 mx-auto mb-6"></div>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Showcase of my recent projects and development work
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
            >
              <div className="h-48 bg-gradient-to-br from-slate-700 to-slate-600 flex items-center justify-center">
                <div className="text-slate-400 text-6xl">🚀</div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-red-400 text-sm font-medium">{project.role}</span>
                  <span className="text-slate-500 text-sm">{project.period}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-slate-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-slate-700 text-slate-300 px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center text-slate-400 hover:text-red-500 transition-colors duration-300"
                  >
                    <Github size={16} className="mr-1" />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center text-slate-400 hover:text-red-500 transition-colors duration-300"
                  >
                    <ArrowRight size={16} className="mr-1" />
                    <span className="text-sm">Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
            View More Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
