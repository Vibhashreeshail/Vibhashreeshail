import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';
import { motion } from 'motion/react';
import { downloadResume } from '../utils/resume';

type CommandHandler = (args: string[]) => string | void;

export function TerminalConsole() {
  const [history, setHistory] = useState<{ type: 'input' | 'output'; text: string }[]>([
    { type: 'output', text: 'Portfolio Terminal [Version 1.0.0]' },
    { type: 'output', text: 'Type "help" to see available commands.' },
  ]);
  const [input, setInput] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [history]);

  const scrollTo = (id: string) => {
    // Blur input to prevent the browser from snapping back to it
    inputRef.current?.blur();
    
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        // Find the element's position and scroll the window to it
        const yOffset = -50; 
        const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 100);
    return `Navigating to ${id}...`;
  };

  const commands: Record<string, CommandHandler> = {
    help: () => `Available Commands:\n  about     - Go to About section\n  skills    - Go to Skills section\n  projects  - Go to Projects section\n  resume    - Download/View resume\n  github    - View GitHub profile\n  clear     - Clear terminal\n  theme     - Toggle theme`,
    about: () => scrollTo('about'),
    skills: () => scrollTo('skills'),
    projects: () => scrollTo('projects'),
    resume: () => {
      downloadResume();
      return 'Generating and downloading resume PDF...';
    },
    github: () => {
      window.open('https://github.com/vibhashreeshail', '_blank');
      return 'Opening GitHub...';
    },
    theme: () => {
      document.documentElement.classList.toggle('light-theme');
      return document.documentElement.classList.contains('light-theme') ? 'Switched to Light Theme.' : 'Switched to Dark Theme.';
    },
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && input.trim()) {
      const cmd = input.trim().toLowerCase();
      const args = cmd.split(' ');
      const command = args[0];

      if (command === 'clear') {
        setHistory([]);
        setInput('');
        return;
      }

      const newHistory = [...history, { type: 'input' as const, text: input }];
      setInput('');

      if (commands[command]) {
        const output = commands[command](args.slice(1));
        if (output) {
          newHistory.push({ type: 'output', text: output });
        }
      } else {
        newHistory.push({ type: 'output', text: `Command not found: ${command}. Type "help" for a list of commands.` });
      }

      setHistory(newHistory);
    }
  };

  return (
    <div className="w-full bg-[#1e1e1e] border border-white/10 rounded-lg overflow-hidden font-mono text-sm mt-12 mb-12 shadow-2xl">
      {/* Terminal Header */}
      <div className="bg-[#2d2d2d] px-4 py-2 flex items-center gap-2 border-b border-white/5">
        <TerminalIcon className="w-4 h-4 text-white/50" />
        <span className="text-white/50 text-xs tracking-wider">bash - portfolio</span>
      </div>

      {/* Terminal Body */}
      <div 
        ref={containerRef}
        className="h-[300px] p-4 overflow-y-auto cursor-text text-[#cccccc]"
        onClick={() => inputRef.current?.focus()}
      >
        {history.map((line, i) => (
          <div key={i} className="mb-1 whitespace-pre-wrap">
            {line.type === 'input' ? (
              <div className="flex gap-2">
                <span className="text-emerald-400">guest@portfolio:~$</span>
                <span>{line.text}</span>
              </div>
            ) : (
              <div className="text-white/70">{line.text}</div>
            )}
          </div>
        ))}
        
        <div className="flex gap-2 items-center">
          <span className="text-emerald-400">guest@portfolio:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="flex-1 bg-transparent outline-none text-[#cccccc] caret-white"
            autoComplete="off"
            spellCheck="false"
          />
        </div>
      </div>
    </div>
  );
}
