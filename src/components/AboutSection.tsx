import { motion } from "framer-motion";
import heroImg from "@/assets/hero-abstract.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-5" style={{ background: "linear-gradient(135deg, hsl(30 20% 97%), hsl(0 0% 100%))" }}>
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6 relative">
              About Us
              <span className="absolute -bottom-2 left-0 w-16 h-1 bg-primary rounded-full" />
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg text-muted-foreground leading-relaxed mb-5"
            >
              We are a company dedicated to providing innovative solutions to businesses that still operate manually. By automating key processes and integrating comprehensive ERP systems, we help transform traditional operations into efficient, streamlined workflows that drive growth and productivity.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              Our expertise lies in implementing robust automation tools that eliminate repetitive tasks, reduce errors, and provide real-time insights into business operations.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="relative"
          >
            <img
              src={heroImg}
              alt="Business Automation Solutions"
              className="w-full rounded-2xl shadow-[var(--shadow-card)] hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)] transition-all duration-300"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
