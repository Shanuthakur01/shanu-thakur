
const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-red-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Short Bio</h3>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              Motivated and detail-oriented Web Development student with strong foundations in full-stack technologies. 
              Proficient in HTML, CSS, JavaScript, and frameworks like React.js for building responsive, user-centric interfaces.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              Hands-on experience with Node.js, MongoDB, and RESTful APIs for back-end development. Skilled in Git/GitHub, 
              DSA problem-solving, web performance optimization, and UI/UX best practices.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Adept in AWS deployment, encryption, and continuously learning new tools and frameworks to improve 
              development efficiency and code quality.
            </p>
            
            <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
              Download CV
            </button>
          </div>

          <div className="bg-slate-700 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Education</h3>
            
            <div className="border-l-4 border-red-500 pl-6">
              <h4 className="text-xl font-semibold text-white mb-2">
                Bachelor of Computer Applications (BCA)
              </h4>
              <p className="text-red-400 font-medium mb-2">Information Technology</p>
              <p className="text-slate-300 mb-2">Devi Ahilya Vishwavidyalaya, Indore, India</p>
              <p className="text-slate-400">2023 – 2026 (Expected)</p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-500 mb-2">Practical Training</div>
                <div className="text-slate-300">in Full-Stack Development</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-500 mb-2">Major Academic</div>
                <div className="text-slate-300">Projects Successfully Completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
