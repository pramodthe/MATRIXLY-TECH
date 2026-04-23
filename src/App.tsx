import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Security from './components/Security';
import Innovation from './components/Innovation';
import VisualiserFeature from './components/VisualiserFeature';
import ChatWidget from './components/ChatWidget';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, ChevronDown, LayoutGrid, Home as HomeIcon } from 'lucide-react';

function App() {
  const calendlyUrl = 'https://calendly.com/pramodthebe/30min';
  const [view, setView] = useState<'home' | 'visualiser'>('home');
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="min-h-dvh bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-background/50 backdrop-blur-xl border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <button 
            onClick={() => setView('home')}
            className="text-xl font-bold tracking-tighter hover:opacity-80 transition-opacity"
          >
            MATRIXLY
          </button>
          
          <div className="flex items-center gap-4 md:gap-8">
            <div className="flex items-center gap-6 text-sm font-medium">
              <button 
                onClick={() => setView('home')}
                className={cn(
                  "flex items-center gap-2 transition-colors",
                  view === 'home' ? "text-primary" : "text-muted-foreground hover:text-foreground"
                )}
              >
                <HomeIcon size={16} />
                Home
              </button>
              
              <div className="relative group">
                <button 
                  className={cn(
                    "flex items-center gap-1 transition-colors",
                    view === 'visualiser' ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <LayoutGrid size={16} className="mr-1" />
                  Apps
                  <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
                </button>
                
                {/* Dropdown */}
                <div className="absolute top-full right-0 mt-2 w-64 p-2 bg-card border border-border rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <button 
                    onClick={() => setView('visualiser')}
                    className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors text-left"
                  >
                    <div className="size-8 rounded-md bg-primary/10 flex items-center justify-center text-primary">
                      <LayoutGrid size={18} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-foreground tracking-tight">Generative Design Visualiser</div>
                      <div className="text-[10px] text-muted-foreground">AI-driven 3D environment synthesis</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            
            <div className="h-4 w-px bg-border mx-2" />

            <button 
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-accent transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            <a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:block px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Book a Strategy Call
            </a>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        <AnimatePresence mode="wait">
          {view === 'home' ? (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Hero />
              <Features />
              
              {/* Integration Steps Section */}
              <section className="py-24 px-6 bg-muted/30 border-t border-border">
                <div className="max-w-6xl mx-auto text-center">
                  <h2 className="text-3xl md:text-5xl font-bold mb-16 text-balance tracking-tight">How We Automate</h2>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {[
                      { step: "01", title: "Discovery & Map", desc: "Identify high-friction manual tasks in your consulting workflow." },
                      { step: "02", title: "Build & Secure", desc: "Develop custom AI agents and webapps with isolated pipelines." },
                      { step: "03", title: "Deploy & Scale", desc: "Roll out bespoke tools to your teams with full support." },
                      { step: "04", title: "Iterate & Optimise", desc: "Continuous tuning based on real-world project outcomes." }
                    ].map((item, i) => (
                      <div key={i} className="relative p-6 group">
                        <div className="text-4xl font-black text-foreground/5 absolute top-0 left-0">
                          {item.step}
                        </div>
                        <h3 className="text-xl font-bold mb-3 relative z-10 tracking-tight">{item.title}</h3>
                        <p className="text-muted-foreground text-sm relative z-10 text-pretty leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <Security />
              <Innovation />

              {/* Final CTA */}
              <section className="py-32 px-6 text-center bg-muted/20">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="max-w-3xl mx-auto"
                >
                  <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight text-balance">AI applications are built on endless possibilities.</h2>
                  <p className="text-muted-foreground text-lg mb-12 text-pretty">
                    Contact us to know more and discover how your workflows can transform.
                  </p>
                  <div className="flex justify-center">
                    <a
                      href={calendlyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-10 py-4 bg-primary text-primary-foreground font-bold rounded-xl text-lg hover:opacity-90 transition-all shadow-xl shadow-primary/10"
                    >
                      Book a Strategy Call
                    </a>
                  </div>
                  </motion.div>
                  </section>

            </motion.div>
          ) : (
            <motion.div
              key="visualiser"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="py-12"
            >
              <div className="max-w-7xl mx-auto px-6 mb-8 flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold tracking-tight">App Console</h1>
                  <p className="text-xs text-muted-foreground uppercase font-bold tracking-widest mt-1 flex items-center gap-2">
                    <div className="size-2 rounded-full bg-green-500 animate-pulse" />
                    Neural Workspace Active
                  </p>
                </div>
                <button 
                  onClick={() => setView('home')}
                  className="text-xs font-bold text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted border border-border"
                >
                  <HomeIcon size={14} />
                  Return to Dashboard
                </button>
              </div>
              <VisualiserFeature />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="py-12 px-6 border-t border-border text-center text-muted-foreground text-sm">
        <div className="mb-6 font-bold text-foreground tracking-widest uppercase">Matrixly</div>
        <p>&copy; 2026 Matrixly AI Construction Platform. All rights reserved.</p>
      </footer>

      <ChatWidget />
    </div>
  );
}

// Add cn helper since it's used in App.tsx
import { cn } from './lib/utils';

export default App;
