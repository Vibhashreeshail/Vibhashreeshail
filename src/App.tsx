import { ExternalLink, Github, Linkedin, Mail, MapPin, Terminal, Dices, FileDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { GlitchText } from "./components/GlitchText";
import { TerminalConsole } from "./components/TerminalConsole";
import { ResumeTemplate } from "./components/ResumeTemplate";
import { downloadResume } from "./utils/resume";
import { profileData } from "./data";

export default function App() {
  const [randomProject, setRandomProject] = useState<number | null>(null);

  const handleSurpriseMe = () => {
    const randomIndex = Math.floor(Math.random() * profileData.projects.length);
    setRandomProject(randomIndex);
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-editorial-bg text-editorial-text font-sans selection:bg-editorial-accent selection:text-white">
      <ResumeTemplate />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjRkZGRkZGIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-20 pointer-events-none z-0"></div>
      
      <main className="relative z-10 max-w-5xl mx-auto px-6 py-24 md:py-32 space-y-24">
        
        {/* Header / Hero */}
        <section className="space-y-6">
          <div className="flex items-center gap-4 mb-8 text-editorial-muted">
            <Terminal className="w-8 h-8" />
            <span className="text-xs font-bold tracking-[0.3em] uppercase">System Initialization...</span>
          </div>
          
          <GlitchText text={profileData.name} as="h1" className="text-6xl md:text-8xl leading-[0.85] font-serif italic tracking-tighter text-white mb-4" />
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="border-l border-white/10 pl-6 py-2 space-y-4"
          >
            <h2 className="text-sm md:text-base text-editorial-accent font-mono mb-4 uppercase tracking-widest">
              {profileData.role}
            </h2>
            <div className="flex flex-wrap items-center gap-6 text-xs font-bold tracking-widest uppercase text-white/50">
              <a href={`mailto:${profileData.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4" /> {profileData.email}
              </a>
              <a href={`https://${profileData.linkedin}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-white text-black px-4 py-2 hover:bg-[#D4D4D4] transition-colors">
                <Github className="w-4 h-4" /> GitHub Connection
              </a>
              <span className="flex items-center gap-2 text-white/40">
                <MapPin className="w-4 h-4" /> {profileData.location}
              </span>
            </div>
            <button onClick={downloadResume} className="mt-6 flex w-fit items-center gap-2 bg-editorial-accent text-black font-bold text-xs font-mono tracking-widest uppercase px-4 py-2 hover:bg-emerald-400 transition-colors cursor-pointer">
              <FileDown className="w-4 h-4" /> Download Resume
            </button>
          </motion.div>
        </section>

        {/* Summary */}
        <section id="about" className="space-y-6">
          <GlitchText text="Summary" as="h2" className="text-xs font-bold tracking-[0.2em] uppercase text-white/60 mb-6 flex justify-between items-center" delay={0.2} />
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-editorial-card border border-white/10 p-6 md:p-8"
          >
            <p className="text-sm text-white/50 leading-relaxed font-sans">
              {profileData.summary}
            </p>
          </motion.div>
        </section>

        {/* Skills Grid */}
        <section id="skills" className="space-y-6">
          <GlitchText text="Skills" as="h2" className="text-xs font-bold tracking-[0.2em] uppercase text-white/60 mb-6 flex justify-between items-center" delay={0.3} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <SkillBlock title="Core Tech" skills={profileData.skills.core} color="cyan" delay={0.1} />
            <SkillBlock title="AI Integration" skills={profileData.skills.ai} color="magenta" delay={0.2} />
            <SkillBlock title="Strengths" skills={profileData.skills.strengths} color="green" delay={0.3} />
          </div>
        </section>

        {/* Experience */}
        <section className="space-y-8 bg-editorial-card p-8 border border-white/10">
          <GlitchText text="Experience" as="h2" className="text-xs font-bold tracking-[0.2em] uppercase text-white/60 mb-8 flex justify-between items-center" delay={0.4} />
          <div className="space-y-8">
            {profileData.experience.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-lg font-medium group-hover:text-editorial-accent transition-colors">{exp.role}</h3>
                  <span className="text-[10px] font-mono text-white/40 mt-1">{exp.company}</span>
                </div>
                <p className="text-sm text-white/50 leading-relaxed">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Education & Extra */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <section className="space-y-8 bg-editorial-card p-8 border border-white/10 flex flex-col">
            <GlitchText text="Education" as="h2" className="text-xs font-bold tracking-[0.2em] uppercase text-white/60 mb-8 flex justify-between items-center" delay={0.6} />
            <div className="space-y-6">
              {profileData.education.map((edu, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex flex-col md:flex-row md:items-start justify-between border-b border-white/10 pb-4"
                >
                  <div>
                    <h3 className="text-lg font-medium">{edu.degree}</h3>
                    <p className="text-[10px] font-mono text-white/40 mt-1">{edu.institution}</p>
                  </div>
                  <div className="text-right mt-2 md:mt-0">
                    <span className="block text-[10px] font-mono text-editorial-accent uppercase">{edu.year}</span>
                    <span className="block text-[10px] font-mono text-white/30 uppercase mt-1">{edu.cgpa}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="space-y-8 bg-editorial-card p-8 border border-white/10 flex flex-col">
            <GlitchText text="Extra Curriculum" as="h2" className="text-xs font-bold tracking-[0.2em] uppercase text-white/60 mb-8 flex justify-between items-center" delay={0.7} />
            <div className="space-y-8 flex-1 flex flex-col">
              <div>
                <GlitchText text="Symposium" as="h3" className="text-[10px] font-mono text-editorial-accent uppercase mb-2" delay={0.7} />
                <p className="text-xs text-white/40">
                  {profileData.symposium}
                </p>
              </div>

              <div>
                <GlitchText text="Passion" as="h3" className="text-[10px] font-mono text-editorial-accent uppercase mb-2" delay={0.8} />
                <p className="text-xs text-white/40">
                  {profileData.passion}
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Projects */}
        <section id="projects" className="space-y-8 bg-editorial-card p-8 border border-white/10 relative">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
            <GlitchText text="Projects & Architectures" as="h2" className="text-xs font-bold tracking-[0.2em] uppercase text-white/60" delay={0.5} />
            
            <button 
              onClick={handleSurpriseMe}
              className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white/80 px-4 py-2 text-[10px] font-mono uppercase tracking-widest border border-white/10 transition-colors self-start sm:self-auto"
            >
              <Dices className="w-4 h-4" /> Surprise Me
            </button>
          </div>

          <div className="space-y-8">
            <AnimatePresence mode="popLayout">
              {profileData.projects.map((proj, idx) => {
                if (randomProject !== null && randomProject !== idx) return null;

                return (
                  <motion.div 
                    key={`${idx}-${randomProject}`}
                    initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
                    transition={{ duration: 0.4 }}
                    className={`group cursor-pointer pb-8 last:pb-0 relative overflow-hidden ${
                      proj.name.includes("Grama-Vasathi") 
                        ? "p-6 -mx-6 rounded-sm border border-emerald-900/40 bg-gradient-to-br from-emerald-950/30 via-[#1A1A1A] to-[#1A1A1A] mb-8 shadow-[inset_0_0_20px_rgba(16,185,129,0.02)] before:absolute before:inset-0 before:content-[''] before:bg-[url('https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=800&auto=format&fit=crop')] before:bg-cover before:bg-center before:opacity-[0.15] before:pointer-events-none" 
                        : proj.name.toLowerCase().includes("water footprint")
                        ? "p-6 -mx-6 rounded-sm border border-blue-900/40 bg-gradient-to-br from-[#0a192f] via-[#1A1A1A] to-[#1A1A1A] mb-8 shadow-[inset_0_0_20px_rgba(59,130,246,0.1)] before:absolute before:inset-0 before:content-[''] before:bg-[url('https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1000&auto=format&fit=crop')] before:bg-cover before:bg-center before:opacity-[0.2] before:pointer-events-none"
                        : "border-b border-white/10"
                    }`}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-medium group-hover:text-editorial-accent transition-colors">{proj.name}</h3>
                    </div>

                    {proj.techStack && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {proj.techStack.map((tech, i) => (
                          <span key={i} className="text-[10px] font-mono text-white/50 bg-[#1A1A1A] border border-white/5 px-2 py-1 rounded-sm flex items-center gap-1">
                            <Terminal className="w-3 h-3 text-editorial-accent/70" />
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    <p className="text-sm text-white/70 leading-relaxed mb-6">
                      {proj.description}
                    </p>
                    
                    {proj.challenge && (
                      <div className="mb-4">
                        <h4 className="text-[10px] font-mono text-editorial-accent uppercase tracking-widest mb-1">The Challenge</h4>
                        <p className="text-sm text-white/50 leading-relaxed">{proj.challenge}</p>
                      </div>
                    )}
                    
                    {proj.architecture && (
                      <div className="mb-4">
                        <h4 className="text-[10px] font-mono text-editorial-accent uppercase tracking-widest mb-1">System Architecture</h4>
                        <ul className="list-disc list-inside text-sm text-white/50 leading-relaxed space-y-1">
                          {proj.architecture.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {proj.usage && (
                      <div className="mb-4">
                        <h4 className="text-[10px] font-mono text-editorial-accent uppercase tracking-widest mb-1">Implementation Details</h4>
                        <ul className="list-disc list-inside text-sm text-white/50 leading-relaxed space-y-1">
                          {proj.usage.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {proj.hurdle && (
                      <div className="mb-4">
                        <h4 className="text-[10px] font-mono text-editorial-accent uppercase tracking-widest mb-1">Technical Hurdle</h4>
                        <p className="text-sm text-white/50 leading-relaxed">{proj.hurdle}</p>
                      </div>
                    )}
                    
                    {proj.impact && (
                      <div className="mb-4">
                        <h4 className="text-[10px] font-mono text-editorial-accent uppercase tracking-widest mb-1">Impact & Achievements</h4>
                        <ul className="list-disc list-inside text-sm text-white/50 leading-relaxed space-y-1">
                          {proj.impact.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {proj.successCriteria && (
                      <div className="mb-4">
                        <h4 className="text-[10px] font-mono text-editorial-accent uppercase tracking-widest mb-1">Success Metrics</h4>
                        <ul className="list-disc list-inside text-sm text-white/50 leading-relaxed space-y-1">
                          {proj.successCriteria.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </AnimatePresence>
            
            {randomProject !== null && (
              <button 
                onClick={() => setRandomProject(null)}
                className="text-xs text-white/50 hover:text-white font-mono uppercase tracking-widest transition-colors"
              >
                [ View All Projects ]
              </button>
            )}
          </div>
        </section>

        <section id="contact">
           <TerminalConsole />
        </section>

        <footer className="text-center pt-8 pb-8 flex justify-between items-center text-[10px] font-mono text-white/30 uppercase tracking-widest border-t border-white/10 mt-12">
          <div className="flex gap-8">
            <span>Local Time: 14:22 GMT-4</span>
            <span>Network: Stable</span>
          </div>
          <p>Portfolio / v2.04 // VIBHA SHREESHAIL B V © 2026</p>
        </footer>

      </main>
    </div>
  );
}

function SkillBlock({ title, skills, color, delay }: { title: string; skills: string[]; color: string; delay: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className={`border border-white/10 p-6 relative overflow-hidden group bg-editorial-card`}
    >
      <div className={`absolute top-0 right-0 w-16 h-16 bg-white/5 transform translate-x-8 -translate-y-8 rotate-45 group-hover:scale-150 transition-transform duration-500`}></div>
      <h3 className={`text-sm font-bold mb-4 text-editorial-accent uppercase tracking-[0.2em]`}>{title}</h3>
      <ul className="space-y-2 relative z-10">
        {skills.map((skill, idx) => (
          <li key={idx} className="flex items-start text-sm text-white/50">
            <span className={`mr-2 text-white/20`}>/</span>
            {skill}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
