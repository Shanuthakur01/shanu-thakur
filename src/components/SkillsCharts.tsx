
import { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Cell } from 'recharts';

const SkillsCharts = () => {
  const [activeChart, setActiveChart] = useState<'bar' | 'radar'>('bar');

  const skillLevels = [
    { name: "JavaScript", level: 90, icon: "⚡" },
    { name: "React.js", level: 85, icon: "⚛️" },
    { name: "Node.js", level: 80, icon: "🟢" },
    { name: "MongoDB", level: 75, icon: "🍃" },
    { name: "AWS", level: 70, icon: "☁️" },
    { name: "UI/UX", level: 75, icon: "🎨" },
  ];

  const radarData = [
    { skill: 'Frontend', level: 90 },
    { skill: 'Backend', level: 80 },
    { skill: 'Database', level: 75 },
    { skill: 'DevOps', level: 70 },
    { skill: 'UI/UX', level: 75 },
    { skill: 'Mobile', level: 65 },
  ];

  // Custom tooltip for bar chart
  const CustomBarTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-slate-800 border border-blue-500/30 rounded-lg p-3 shadow-xl backdrop-blur-sm">
          <p className="text-white font-semibold flex items-center gap-2">
            <span className="text-lg">{data.icon}</span>
            {label}: {payload[0].value}%
          </p>
        </div>
      );
    }
    return null;
  };

  // Custom tooltip for radar chart
  const CustomRadarTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-800 border border-purple-500/30 rounded-lg p-3 shadow-xl backdrop-blur-sm">
          <p className="text-white font-semibold flex items-center gap-2">
            📊 {label}: {payload[0].value}%
          </p>
        </div>
      );
    }
    return null;
  };

  const barVariants = {
    hidden: { scaleY: 0, opacity: 0 },
    visible: (i: number) => ({
      scaleY: 1,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  return (
    <div className="space-y-8">
      {/* Chart Toggle */}
      <motion.div 
        className="flex justify-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-white dark:bg-slate-800 rounded-xl p-2 shadow-lg border border-slate-200 dark:border-slate-700">
          <button
            onClick={() => setActiveChart('bar')}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
              activeChart === 'bar'
                ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
                : 'text-slate-600 dark:text-slate-400 hover:text-blue-500'
            }`}
          >
            📊 Bar Chart
          </button>
          <button
            onClick={() => setActiveChart('radar')}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
              activeChart === 'radar'
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                : 'text-slate-600 dark:text-slate-400 hover:text-purple-500'
            }`}
          >
            🎯 Radar Chart
          </button>
        </div>
      </motion.div>

      {/* Bar Chart */}
      {activeChart === 'bar' && (
        <motion.div 
          className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-xl border border-slate-200 dark:border-slate-700"
          initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          exit={{ opacity: 0, scale: 0.9, rotateY: 10 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
              🚀
            </div>
            <h4 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Skills Progress
            </h4>
          </div>
          <div className="h-[350px] relative">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={skillLevels} margin={{ top: 20, right: 30, left: 20, bottom: 80 }}>
                <defs>
                  <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity={1} />
                    <stop offset="50%" stopColor="#06b6d4" stopOpacity={0.8} />
                    <stop offset="100%" stopColor="#0891b2" stopOpacity={0.6} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#475569" opacity={0.3} />
                <XAxis 
                  dataKey="name" 
                  tick={{ fill: '#6b7280', fontSize: 12 }}
                  angle={-45}
                  textAnchor="end"
                  height={80}
                />
                <YAxis tick={{ fill: '#6b7280' }} />
                <Tooltip content={<CustomBarTooltip />} />
                <Bar 
                  dataKey="level" 
                  fill="url(#barGradient)" 
                  radius={[8, 8, 0, 0]}
                  className="drop-shadow-lg"
                >
                  {skillLevels.map((entry, index) => (
                    <Cell key={`cell-${index}`} className="hover:brightness-110 transition-all duration-300" />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      )}

      {/* Radar Chart */}
      {activeChart === 'radar' && (
        <motion.div 
          className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-xl border border-slate-200 dark:border-slate-700"
          initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          exit={{ opacity: 0, scale: 0.9, rotateY: -10 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              📊
            </div>
            <h4 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Proficiency Radar
            </h4>
          </div>
          <div className="h-[350px] relative">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radarData}>
                <defs>
                  <linearGradient id="radarGradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#8b5cf6" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="#ec4899" stopOpacity={0.1} />
                  </linearGradient>
                </defs>
                <PolarGrid stroke="#475569" opacity={0.3} />
                <PolarAngleAxis tick={{ fill: '#6b7280', fontSize: 12 }} />
                <PolarRadiusAxis 
                  angle={90} 
                  domain={[0, 100]} 
                  tick={{ fill: '#6b7280', fontSize: 10 }}
                  tickCount={6}
                />
                <Radar 
                  name="Skills" 
                  dataKey="level" 
                  stroke="#8b5cf6" 
                  fill="url(#radarGradient)"
                  strokeWidth={3}
                  dot={{ r: 6, fill: '#8b5cf6', strokeWidth: 2, stroke: '#fff' }}
                  className="drop-shadow-lg"
                />
                <Tooltip content={<CustomRadarTooltip />} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      )}

      {/* Legend */}
      <motion.div 
        className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-600"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="text-center">
          <h5 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">
            📈 Chart Legend
          </h5>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-600 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded"></div>
              <span>Bar Chart: Individual skill proficiency</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded"></div>
              <span>Radar Chart: Overall skill categories</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SkillsCharts;
