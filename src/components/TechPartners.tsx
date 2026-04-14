import { motion } from "framer-motion";

const partners = [
  { name: "Odoo", desc: "Enterprise Resource Planning" },
  { name: "AWS", desc: "Cloud Infrastructure" },
  { name: "Microsoft", desc: "Azure Integration" },
  { name: "Google", desc: "AI & Analytics" },
  { name: "Zoho", desc: "CRM & Productivity" },
  { name: "One", desc: "Unified Business Operations" },
];

const TechPartners = () => (
  <section id="partners" className="py-20 px-5">
    <div className="max-w-[1000px] mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h3 className="font-display text-3xl md:text-4xl font-bold text-plum-dark mb-5">Our Technology Partners</h3>
        <p className="text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
          We collaborate with industry-leading technology providers to deliver cutting-edge solutions that power your business transformation.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
        {partners.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="bg-card rounded-xl p-6 shadow-sm border border-primary/10 hover:-translate-y-1 hover:shadow-[var(--shadow-card)] transition-all cursor-default"
          >
            <div className="text-xl font-bold text-primary mb-2">{p.name}</div>
            <div className="text-sm text-muted-foreground">{p.desc}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TechPartners;
