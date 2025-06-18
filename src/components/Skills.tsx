
const Skills = () => {
  const skillCategories = [
    {
      category: "Languages & Frameworks",
      skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "React.js", "Node.js"],
    },
    {
      category: "Back-End & Database",
      skills: ["RESTful APIs", "MongoDB", "Express.js", "JWT Authentication"],
    },
    {
      category: "Tools & Platforms",
      skills: ["Git", "GitHub", "VS Code", "AWS", "Postman", "NPM"],
    },
    {
      category: "Concepts",
      skills: ["UI/UX Design", "DSA (Arrays, Trees, Graphs)", "Encryption", "Debugging"],
    },
    {
      category: "Business Systems",
      skills: ["SAP ERP (MM, SD, FICO)", "Email APIs", "Gmail Integration"],
    },
  ];

  const skillLevels = [
    { name: "JavaScript", level: 90 },
    { name: "React.js", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "MongoDB", level: 75 },
    { name: "AWS", level: 70 },
    { name: "UI/UX Design", level: 75 },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Skills</h2>
          <div className="w-24 h-1 bg-red-500 mx-auto mb-6"></div>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and proficiencies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skill Categories */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Technical Skills</h3>
            <div className="space-y-6">
              {skillCategories.map((category, index) => (
                <div key={index} className="bg-slate-700 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-red-400 mb-4">{category.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-slate-600 text-slate-200 px-3 py-1 rounded-full text-sm font-medium hover:bg-red-500 transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skill Levels */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Proficiency Levels</h3>
            <div className="space-y-6">
              {skillLevels.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-300 font-medium">{skill.name}</span>
                    <span className="text-red-400 font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-red-500 to-orange-500 h-3 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-slate-700 rounded-lg">
              <h4 className="text-lg font-semibold text-white mb-4">Currently Learning</h4>
              <div className="flex flex-wrap gap-2">
                {["TypeScript", "Next.js", "Docker", "GraphQL"].map((tech, index) => (
                  <span
                    key={index}
                    className="bg-yellow-500 text-slate-900 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
