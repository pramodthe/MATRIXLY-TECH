import { motion } from 'framer-motion';
import { Sparkles, Microscope } from 'lucide-react';

const Innovation = () => {
  return (
    <section className="py-24 px-6 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 tracking-tight text-balance">Powered by Agentic Innovation</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            We build specialized AI entities designed for construction-specific logic and complex consulting tasks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-10 rounded-3xl bg-card border border-border relative group shadow-sm hover:border-primary/50 transition-colors"
          >
            <div className="absolute top-8 right-8 text-primary/10 group-hover:text-primary/20 transition-colors">
              <Sparkles size={48} />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Neural Agent Workflows</h3>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              Bespoke AI agents capable of autonomous research, document drafting, and complex scheduling. These aren't just chatbots—they're digital extensions of your consultancy.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-10 rounded-3xl bg-card border border-border relative group shadow-sm hover:border-primary/50 transition-colors"
          >
            <div className="absolute top-8 right-8 text-primary/10 group-hover:text-primary/20 transition-colors">
              <Microscope size={48} />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Bespoke Web Interfaces</h3>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              We deploy custom web applications that put powerful AI tools directly into the hands of your consultants. Tailored interfaces for your specific methodology.
            </p>
          </motion.div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-40 hover:opacity-100 transition-all duration-700">
          <div className="flex items-center justify-center p-4"><div className="text-foreground font-bold tracking-widest text-xl italic underline decoration-primary">AI LABS</div></div>
          <div className="flex items-center justify-center p-4"><div className="text-foreground font-bold tracking-widest text-xl italic underline decoration-primary/80">TECH CORE</div></div>
          <div className="flex items-center justify-center p-4"><div className="text-foreground font-bold tracking-widest text-xl italic underline decoration-primary/60">QUANTUM</div></div>
          <div className="flex items-center justify-center p-4"><div className="text-foreground font-bold tracking-widest text-xl italic underline decoration-primary/40">FRONTIER</div></div>
        </div>
      </div>
    </section>
  );
};

export default Innovation;
