import { Check, Copy, Plus, RotateCcw, Settings2, Terminal, Trash2, Wand2 } from "lucide-react";
import { motion } from "motion/react";
import React, { useState } from "react";
import { GlitchText } from "./GlitchText";

type Rule = {
  keyword: string;
  title: string;
  output: string;
};

const DEFAULT_RULES: Rule[] = [
  { keyword: "calculator", title: "Resource Optimizer", output: "Engineered a high-performance React computational engine, optimizing mathematical processing and user interaction flows." },
  { keyword: "water", title: "Ecological Metrics", output: "Architected a scalable analytics pipeline to quantify ecological impact, translating complex datasets into actionable metrics." },
  { keyword: "rural", title: "Decentralized Hospitality", output: "Developed a decentralized hospitality accelerator, bridging the urban-rural divide through a standardized 'host readiness' evaluation system." }
];

export function AIPlayground() {
  const [rules, setRules] = useState<Rule[]>(DEFAULT_RULES);
  const [newKeyword, setNewKeyword] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newOutput, setNewOutput] = useState("");

  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleAddRule = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newKeyword.trim() || !newTitle.trim() || !newOutput.trim()) return;
    setRules([{ keyword: newKeyword, title: newTitle, output: newOutput }, ...rules]);
    setNewKeyword("");
    setNewTitle("");
    setNewOutput("");
  };

  const handleDeleteRule = (indexToRemove: number) => {
    setRules(rules.filter((_, index) => index !== indexToRemove));
  };

  const handleEnhance = async () => {
    if (!input.trim()) return;
    setIsLoading(true);
    setOutput("");

    // Simulate local processing delay
    await new Promise(resolve => setTimeout(resolve, 800));

    const lowerInput = input.toLowerCase();
    const matchedRule = rules.find(r => lowerInput.includes(r.keyword.toLowerCase()));

    if (matchedRule) {
      setOutput(`[${matchedRule.title.toUpperCase()}]\n${matchedRule.output}`);
    } else {
      setOutput(`Deployed a robust solution addressing core system requirements: "${input}". The architecture prioritizes scalability and an intuitive user experience.`);
    }

    setIsLoading(false);
  };

  const copyToClipboard = () => {
    if (!output) return;
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="bg-editorial-card p-8 border border-white/10 relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 transform translate-x-16 -translate-y-16 rotate-45 pointer-events-none"></div>
      
      <div className="flex justify-between items-center mb-8 relative z-10">
        <GlitchText text="Zero-API Inference Engine" as="h2" className="text-xs font-bold tracking-[0.2em] uppercase text-white/60" delay={0.2} />
        <span className="text-[10px] font-mono bg-editorial-accent/20 text-editorial-accent px-2 py-1 uppercase tracking-widest border border-editorial-accent/30 rounded-sm flex items-center gap-2">
          <Terminal className="w-3 h-3" />
          Client-Side Logic Active
        </span>
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Side: Training Map */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#1A1A1A] border border-white/10 p-6 flex flex-col h-full max-h-[600px]">
            <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-4">
              <h3 className="text-[10px] font-mono text-white/40 uppercase tracking-widest flex items-center gap-2">
                <Settings2 className="w-3 h-3" />
                Custom Training Map
              </h3>
              <button onClick={() => setRules(DEFAULT_RULES)} className="text-[10px] text-white/30 hover:text-white transition flex items-center gap-1">
                <RotateCcw className="w-3 h-3" /> Reset
              </button>
            </div>

            <form onSubmit={handleAddRule} className="space-y-4 mb-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] text-white/40 block mb-1 uppercase tracking-widest">Keyword</label>
                  <input 
                    type="text" 
                    value={newKeyword}
                    onChange={e => setNewKeyword(e.target.value)}
                    placeholder="e.g. auth" 
                    className="w-full bg-black/50 border border-white/10 focus:border-editorial-accent outline-none text-xs text-white/90 px-3 py-2 font-mono"
                  />
                </div>
                <div>
                  <label className="text-[10px] text-white/40 block mb-1 uppercase tracking-widest">Impact Title</label>
                  <input 
                    type="text" 
                    value={newTitle}
                    onChange={e => setNewTitle(e.target.value)}
                    placeholder="e.g. Secure Gate" 
                    className="w-full bg-black/50 border border-white/10 focus:border-editorial-accent outline-none text-xs text-white/90 px-3 py-2 font-mono"
                  />
                </div>
              </div>
              <div>
                <label className="text-[10px] text-white/40 block mb-1 uppercase tracking-widest">Editorial Rewrite</label>
                <textarea 
                  value={newOutput}
                  onChange={e => setNewOutput(e.target.value)}
                  rows={2} 
                  placeholder="The polished output..." 
                  className="w-full bg-black/50 border border-white/10 focus:border-editorial-accent outline-none text-xs text-white/90 px-3 py-2 resize-none font-sans"
                />
              </div>
              <button type="submit" className="w-full bg-white/5 hover:bg-white/10 border border-white/10 text-white text-[10px] uppercase tracking-widest py-2 transition flex justify-center items-center gap-2">
                <Plus className="w-3 h-3" /> Add Rule
              </button>
            </form>

            <div className="flex-1 overflow-y-auto pr-2 space-y-2">
              <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest block mb-2">Active Rules ({rules.length})</span>
              {rules.map((r, i) => (
                <div key={i} className="bg-black/30 border border-white/5 p-3 rounded-sm group/rule relative overflow-hidden">
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-xs font-mono text-editorial-accent">"{r.keyword}"</span>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-white/30 uppercase">{r.title}</span>
                      <button 
                        onClick={() => handleDeleteRule(i)}
                        className="opacity-0 group-hover/rule:opacity-100 text-white/30 hover:text-red-400 transition"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                  <p className="text-xs text-white/50 line-clamp-2 leading-relaxed">{r.output}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Simulator */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="bg-[#1A1A1A] border border-white/10 p-6 flex-1 flex flex-col">
            <h3 className="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-4 border-b border-white/10 pb-2">Live Simulator</h3>
            
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Raw project idea (e.g., I built a calculator...)"
              className="w-full bg-black/50 border border-white/10 focus:border-editorial-accent outline-none text-sm text-white/90 p-4 h-32 resize-none transition-colors font-mono mb-4"
            />
            
            <button
              onClick={handleEnhance}
              disabled={isLoading || !input.trim()}
              className="w-full bg-white text-black font-bold uppercase tracking-widest text-xs py-4 hover:bg-[#D4D4D4] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2 mb-6"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                  Processing...
                </>
              ) : (
                <>
                  <Wand2 className="w-4 h-4" />
                  Generate Rewrite
                </>
              )}
            </button>

            <div className="flex-1 bg-black/30 border border-white/5 p-4 relative min-h-[120px]">
              <div className="flex justify-between items-center mb-4">
                <span className="text-[10px] font-mono text-editorial-accent uppercase tracking-widest">Output Result</span>
                {output && (
                  <button onClick={copyToClipboard} className="text-[10px] text-white/40 hover:text-white flex items-center gap-1 uppercase tracking-widest transition">
                    {copied ? <Check className="w-3 h-3 text-editorial-accent" /> : <Copy className="w-3 h-3" />}
                    {copied ? "Copied" : "Copy"}
                  </button>
                )}
              </div>
              
              {output ? (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-sm text-white/90 leading-relaxed font-sans whitespace-pre-wrap"
                >
                  {output}
                </motion.div>
              ) : (
                <p className="text-xs text-white/20 font-mono animate-pulse">Awaiting input payload...</p>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
