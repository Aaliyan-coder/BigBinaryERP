import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { ReactNode } from "react";

interface SolutionRowProps {
  badge: string;
  badgeIcon: ReactNode;
  title: string;
  description: string;
  features: string[];
  linkText: string;
  visual: ReactNode;
  flipped?: boolean;
}

const SolutionRow = ({ badge, badgeIcon, title, description, features, linkText, visual, flipped }: SolutionRowProps) => (
  <motion.div
    initial={{ opacity: 0, y: 48 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.12 }}
    transition={{ duration: 0.7, ease: [0.22, 0.68, 0, 1] }}
    className={`grid md:grid-cols-2 gap-16 items-center mb-24 ${flipped ? "md:[direction:rtl]" : ""}`}
  >
    <div className={flipped ? "md:[direction:ltr]" : ""}>
      <div className="inline-flex items-center gap-2 text-xs font-extrabold tracking-widest uppercase text-primary mb-4">
        <span className="w-6 h-6 rounded-lg bg-gradient-to-br from-primary to-plum-glow flex items-center justify-center text-primary-foreground">
          {badgeIcon}
        </span>
        {badge}
      </div>
      <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-transparent rounded mb-6" />
      <h3 className="font-display text-2xl md:text-4xl font-bold text-foreground leading-tight mb-4">{title}</h3>
      <p className="text-muted-foreground leading-relaxed mb-7">{description}</p>
      <ul className="flex flex-col gap-3 mb-8">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm text-foreground/80">
            <span className="flex-shrink-0 w-5 h-5 rounded-md bg-gradient-to-br from-primary to-plum-glow flex items-center justify-center mt-0.5">
              <Check size={12} className="text-primary-foreground" strokeWidth={3} />
            </span>
            {f}
          </li>
        ))}
      </ul>
      <a href="#" className="inline-flex items-center gap-2 text-primary text-sm font-bold hover:gap-3 transition-all group">
        {linkText}
        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
      </a>
    </div>
    <div className={flipped ? "md:[direction:ltr]" : ""}>
      {visual}
    </div>
  </motion.div>
);

export default SolutionRow;
