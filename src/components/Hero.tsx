import { motion } from 'framer-motion';
import { Terminal, Cpu } from 'lucide-react';
import MagnifiedBento from './MagnifiedBento';

const Hero = () => {
  const calendlyUrl = 'https://calendly.com/pramodthebe/30min';

  return (
    <section className="relative min-h-dvh flex flex-col items-center justify-center pt-24 pb-12 px-6 overflow-hidden bg-background">
      {/* Abstract AI Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/4 size-96 bg-primary/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 size-96 bg-primary/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full border border-primary/20 text-[10px] uppercase tracking-widest text-primary font-bold mb-8 bg-primary/5">
              <Terminal size={12} />
              System Status: Operational
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight text-balance">
              AI Workflow for <br />
              <span className="text-primary italic text-pretty tracking-tight">Construction Consultants</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-10 max-w-xl leading-relaxed text-pretty">
              Bespoke AI Agents • Custom Web Applications • Intelligent Process Automation. 
              We automate the heavy lifting of construction consultancy with secure, enterprise-grade neural networks.
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, times: [0, 0.5, 1] }}
                className="inline-block w-1 h-5 ml-1 bg-primary align-middle"
              />
            </p>

            <div className="flex justify-start">
              <a
                href={calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-primary text-primary-foreground font-bold rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-xl shadow-primary/10"
              >
                <Cpu size={18} />
                Book a Strategy Call
              </a>
            </div>
            
            <div className="mt-12 flex items-center gap-6 text-muted-foreground">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="size-10 rounded-full border-2 border-background bg-muted overflow-hidden">
                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`} alt="User" className="size-full object-cover grayscale" />
                  </div>
                ))}
              </div>
              <div className="text-sm font-medium text-pretty">
                <span className="text-foreground">400+</span> workflows automated
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative size-full"
          >
            <MagnifiedBento />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
