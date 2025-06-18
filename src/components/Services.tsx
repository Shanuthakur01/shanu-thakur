
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

  return (
    <section id="services" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Services</h2>
          <div className="w-24 h-1 bg-red-500 mx-auto mb-6"></div>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            I offer comprehensive web development services to help bring your ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-lg p-8 hover:bg-slate-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-slate-300 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
