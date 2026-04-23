import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, Layers, Cpu, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const VisualiserFeature = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isProcessing) {
      setProgress(0);
      interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            setIsProcessing(false);
            return 100;
          }
          return prev + 5;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isProcessing]);

  return (
    <section className="py-24 px-6 bg-background overflow-hidden border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest mb-6">
              <Cpu size={14} />
              Generative Engine v4.2
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance tracking-tight">Generative Design <br /><span className="text-muted-foreground/50">Visualiser App</span></h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed text-pretty">
              A bespoke web application for consultants to instantly generate photorealistic renders from 2D drawings. Enhance client presentations and streamline council submissions with AI-driven visualization.
            </p>
            
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card shadow-sm">
                <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Maximize2 size={20} className="text-primary" />
                </div>
                <div>
                  <div className="text-sm font-bold text-foreground">Spatial Reconstruction</div>
                  <div className="text-xs text-muted-foreground">Neural depth mapping from 2D images</div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card shadow-sm">
                <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Layers size={20} className="text-primary" />
                </div>
                <div>
                  <div className="text-sm font-bold text-foreground">Material Synthesis</div>
                  <div className="text-xs text-muted-foreground">AI-driven texture and lighting generation</div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <button 
                onClick={() => setIsProcessing(true)}
                disabled={isProcessing}
                className="px-8 py-3 bg-primary text-primary-foreground font-bold rounded-xl hover:opacity-90 transition-all flex items-center gap-2 disabled:opacity-50 shadow-xl shadow-primary/10"
              >
                {isProcessing ? "Processing..." : "Run AI Visualisation"}
              </button>
            </div>
          </motion.div>

          <div className="relative aspect-square lg:aspect-[4/3] group shadow-2xl rounded-3xl overflow-hidden border border-border bg-muted">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070"
              alt="Architecture Visualization"
              className={cn(
                "size-full object-cover transition-all duration-1000",
                isProcessing ? "scale-110 blur-xl grayscale opacity-50" : "scale-100"
              )}
            />
            
            <AnimatePresence>
              {isProcessing && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-background/20 backdrop-blur-sm"
                >
                  <div className="size-20 border-4 border-primary/20 border-t-primary rounded-full animate-spin mb-6" />
                  <div className="text-2xl font-bold text-foreground mb-2">{progress}%</div>
                  <div className="text-xs font-bold text-primary uppercase tracking-[0.2em]">Synthesizing Environment</div>
                </motion.div>
              )}
            </AnimatePresence>

            {!isProcessing && progress === 100 && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-6 right-6 px-4 py-2 bg-green-500 text-white rounded-full flex items-center gap-2 text-xs font-bold shadow-lg"
              >
                <CheckCircle2 size={14} />
                RENDER_COMPLETE
              </motion.div>
            )}
            
            <div className="absolute bottom-0 inset-x-0 h-1 bg-muted">
              <motion.div 
                animate={{ width: `${progress}%` }}
                className="h-full bg-primary shadow-[0_0_10px_rgba(59,130,246,1)]"
              />
            </div>

            <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-border text-foreground text-[10px] font-bold uppercase tracking-widest shadow-sm flex items-center gap-2">
              <div className="size-1.5 rounded-full bg-primary animate-pulse" />
              Neural Preview Mode
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisualiserFeature;
