import { motion } from 'framer-motion';
import { FileText, ClipboardCheck, LayoutGrid, FileSearch, BarChart3, ShieldAlert } from 'lucide-react';

const features = [
  {
    icon: FileSearch,
    title: "Bid & Tender Automation",
    description: "AI agents that analyze project specs and draft high-win-rate proposals based on your project history."
  },
  {
    icon: ClipboardCheck,
    title: "Regulatory Compliance",
    description: "Automated cross-referencing of designs against global building codes, ISO standards, and regional laws."
  },
  {
    icon: LayoutGrid,
    title: "Design Optimization Apps",
    description: "Bespoke web applications that use neural engines to validate structural feasibility and material efficiency."
  },
  {
    icon: BarChart3,
    title: "Automated Insights",
    description: "Instantly transform raw site data and contractor logs into executive-ready status reports."
  },
  {
    icon: FileText,
    title: "Contract Intelligence",
    description: "Natural language agents for instant retrieval and risk analysis across thousands of project documents."
  },
  {
    icon: ShieldAlert,
    title: "Predictive Risk Modeling",
    description: "Advanced simulations to forecast budget overruns and schedule delays before they occur."
  }
];

const Features = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance tracking-tight">Where AI Empowers Consulting</h2>
          <p className="text-muted-foreground text-pretty max-w-2xl mx-auto">Focus on high-value strategy while our AI agents handle the complex data processing and manual documentation.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-card text-card-foreground border border-border hover:border-primary/50 transition-colors group shadow-sm"
            >
              <div className="size-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed text-pretty">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
