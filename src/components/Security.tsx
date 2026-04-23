import { motion } from 'framer-motion';
import { Lock, EyeOff, Globe, Database, Shield } from 'lucide-react';

const guarantees = [
  {
    icon: EyeOff,
    title: "Zero-Data Sharing Policy",
    description: "Your inputs never train public models or leave your secure environment."
  },
  {
    icon: Lock,
    title: "Private AI Deployment",
    description: "Isolated infrastructure with encrypted, role-based access controls."
  },
  {
    icon: Shield,
    title: "No Third-Party Exposure",
    description: "Guaranteed isolation from public AI platforms, including ChatGPT."
  },
  {
    icon: Globe,
    title: "Global Standards Alignment",
    description: "Structured for international building codes and ISO compliance."
  },
  {
    icon: Database,
    title: "Full Ownership & Audit Control",
    description: "You retain complete control over all data, logs, prompts & AI outputs."
  }
];

const Security = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="p-12 rounded-3xl bg-muted/30 border border-border relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance tracking-tight">Data Sovereignty & Client Confidentiality</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed text-pretty">
                Your proprietary consulting methodologies and client-sensitive data are protected by the industry's most rigorous security protocols. We guarantee your inputs never train public models.
              </p>
            </div>


            <div className="space-y-6">
              {guarantees.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="mt-1">
                    <item.icon className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="text-foreground font-semibold mb-1">{item.title}</h4>
                    <p className="text-muted-foreground text-sm text-pretty">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;
