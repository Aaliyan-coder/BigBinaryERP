import { ReactNode } from "react";

interface MockupFrameProps {
  children: ReactNode;
  className?: string;
  small?: boolean;
}

const MockupFrame = ({ children, className = "", small }: MockupFrameProps) => (
  <div className={`bg-card rounded-2xl shadow-[var(--shadow-card)] border border-border/40 overflow-hidden ${className}`}>
    <div className="bg-secondary/80 px-3 py-2 flex items-center gap-1.5 border-b border-border/40">
      <div className="w-2.5 h-2.5 rounded-full bg-destructive/70" />
      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
      <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
      <div className="flex-1 h-1.5 bg-border rounded ml-2" />
    </div>
    <div className={small ? "p-3" : "p-4"}>
      {children}
    </div>
  </div>
);

export default MockupFrame;
