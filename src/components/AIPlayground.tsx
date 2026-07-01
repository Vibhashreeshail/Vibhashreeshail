import { Terminal, Wand2 } from "lucide-react";
import { motion } from "motion/react";
import React, { useState } from "react";
import { GlitchText } from "./GlitchText";

export function AIPlayground() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleEnhance = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setIsLoading(true);
    setError("");
    setOutput("");

    try {
      const response = await fetch("/api/enhance-copy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: input }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to process text");
      }

      setOutput(data.result);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="bg-editorial-card p-8 border border-white/10 relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 transform translate-x-16 -translate-y-16 rotate-45 pointer-events-none"></div>
      
      <div className="flex justify-between items-center mb-8 relative z-10">
        <GlitchText text="AI Copy Enhancer" as="h2" className="text-xs font-bold tracking-[0.2em] uppercase text-white/60" delay={0.2} />
        <span className="text-[10px] font-mono bg-editorial-accent/20 text-editorial-accent px-2 py-1 uppercase tracking-widest border border-editorial-accent/30 rounded-sm flex items-center gap-2">
          <Terminal className="w-3 h-3" />
          Live Module
        </span>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="text-sm text-white/50 mb-6 leading-relaxed">
            Test the live Generative AI integration. Enter a raw project idea or rough draft, and the model will rewrite it in a sharp, editorial tone.
          </p>

          <form onSubmit={handleEnhance} className="space-y-4">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="e.g., I built a calculator app using React that helps people do math fast..."
              className="w-full bg-[#1A1A1A] border border-white/10 focus:border-editorial-accent outline-none text-sm text-white/90 p-4 h-32 resize-none transition-colors font-mono"
            />
            
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="w-full bg-white text-black font-bold uppercase tracking-widest text-xs py-4 hover:bg-[#D4D4D4] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                  Processing...
                </>
              ) : (
                <>
                  <Wand2 className="w-4 h-4" />
                  Initialize Enhance
                </>
              )}
            </button>
          </form>
        </div>

        <div className="bg-[#1A1A1A] border border-white/10 p-6 flex flex-col h-full min-h-[200px]">
          <h3 className="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-4 border-b border-white/10 pb-2">Output Stream</h3>
          
          <div className="flex-1">
            {error ? (
              <p className="text-sm text-red-400 font-mono">ERR: {error}</p>
            ) : output ? (
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-sm text-white/90 leading-relaxed font-sans"
              >
                {output}
              </motion.p>
            ) : (
              <p className="text-sm text-white/20 font-mono animate-pulse">Awaiting input payload...</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
