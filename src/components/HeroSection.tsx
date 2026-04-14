import { motion } from "framer-motion";
import { Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center text-center px-5 overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none" />
      <div className="absolute top-20 right-[15%] w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-20 left-[10%] w-96 h-96 rounded-full bg-accent/40 blur-3xl" />

      {/* Floating geometric shapes */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 left-[20%] w-16 h-16 rounded-xl border-2 border-primary/15 bg-primary/5 hidden lg:block"
      />
      <motion.div
        animate={{ y: [0, 12, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-40 right-[18%] w-12 h-12 rounded-full border-2 border-plum-glow/20 bg-plum-glow/5 hidden lg:block"
      />
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-48 right-[25%] w-6 h-6 rounded-md bg-primary/10 hidden lg:block"
      />

      <div className="relative z-10 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-accent border border-primary/15 text-accent-foreground text-xs font-bold tracking-widest uppercase px-5 py-2 rounded-full mb-8"
        >
          <Zap size={14} className="fill-current" />
          Powered by Big Binary
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-display text-5xl md:text-7xl font-bold leading-[1.1] mb-6 text-foreground"
        >
          Automate Your{" "}
          <span className="text-gradient-plum italic">Business</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-script text-2xl md:text-4xl text-muted-foreground mb-12"
          style={{ textShadow: "0 0 8px hsl(272 35% 42% / 0.15)" }}
        >
          One Platform, Endless Growth
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <a
            href="#contact"
            className="bg-gradient-brand text-primary-foreground px-8 py-4 rounded-lg text-base font-semibold hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-[var(--shadow-elevated)]"
          >
            Get Started
          </a>
          <a
            href="#solutions"
            className="bg-background text-primary border-2 border-primary/30 px-8 py-4 rounded-lg text-base font-semibold hover:border-primary hover:bg-accent/50 hover:-translate-y-0.5 transition-all"
          >
            Learn More
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
