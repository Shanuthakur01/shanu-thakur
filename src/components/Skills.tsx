
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

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

  const COLORS = ['#ef4444', '#f97316', '#eab308', '#22c55e', '#3b82f6', '#8b5cf6'];

  return (
    <section id="skills" className="py-20 bg-slate-800 transform-gpu">
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

          {/* Skill Levels with Charts */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Proficiency Levels</h3>
            
            {/* Bar Chart */}
            <div className="bg-slate-700 rounded-lg p-6 mb-8">
              <h4 className="text-lg font-semibold text-white mb-4">Skills Bar Chart</h4>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={skillLevels}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
                  <XAxis 
                    dataKey="name" 
                    tick={{ fill: '#cbd5e1', fontSize: 12 }}
                    angle={-45}
                    textAnchor="end"
                    height={80}
                  />
                  <YAxis tick={{ fill: '#cbd5e1' }} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1e293b', 
                      border: '1px solid #ef4444',
                      borderRadius: '8px',
                      color: '#fff'
                    }}
                  />
                  <Bar dataKey="level" fill="#ef4444" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Pie Chart */}
            <div className="bg-slate-700 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-white mb-4">Skills Distribution</h4>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={skillLevels}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="level"
                  >
                    {skillLevels.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1e293b', 
                      border: '1px solid #ef4444',
                      borderRadius: '8px',
                      color: '#fff'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
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
