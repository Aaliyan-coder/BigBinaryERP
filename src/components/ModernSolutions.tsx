import { motion } from "framer-motion";
import { Filter, BarChart3, Package, Users, Layers } from "lucide-react";
import SolutionRow from "./SolutionRow";
import MockupFrame from "./MockupFrame";

/* CRM Visual */
const CRMVisual = () => (
  <div className="relative h-[380px] md:h-[420px]">
    <div className="absolute w-2 h-2 rounded-full bg-primary/20 animate-spin-slow border border-dashed border-primary/25 -top-5 -right-5 w-28 h-28 hidden md:block" />
    <MockupFrame className="absolute w-[88%] top-0 left-0 z-[2]">
      <div className="text-[10px] font-extrabold text-foreground mb-2.5 tracking-tight">CRM Pipeline — Q2 2025</div>
      <div className="flex gap-2 overflow-hidden">
        {[
          { label: "New (8)", color: "bg-accent", textColor: "text-primary", cards: [
            { name: "TechFlow Inc.", val: "$24,000", stage: "Meeting scheduled" },
            { name: "Summit Group", val: "$8,500", stage: "Email sent" },
          ]},
          { label: "Qualified (5)", color: "bg-blue-50", textColor: "text-blue-600", cards: [
            { name: "Apex Retail", val: "$46,000", stage: "Proposal sent" },
          ]},
          { label: "Proposal (4)", color: "bg-amber-50", textColor: "text-amber-700", cards: [
            { name: "OmniTrade", val: "$78,000", stage: "Negotiating" },
          ]},
          { label: "Won ✓", color: "bg-green-50", textColor: "text-green-700", cards: [
            { name: "GlobalNet", val: "$120,000", stage: "Closed" },
          ]},
        ].map((col) => (
          <div key={col.label} className="flex-1 min-w-0">
            <div className={`text-[9px] font-extrabold uppercase tracking-wide px-2 py-1 rounded-md mb-2 ${col.color} ${col.textColor}`}>{col.label}</div>
            {col.cards.map((c) => (
              <div key={c.name} className="bg-secondary/60 rounded-md p-2 mb-1.5 border-l-[3px] border-primary/50">
                <div className="text-[9px] font-bold text-foreground">{c.name}</div>
                <div className="text-[8px] font-bold text-primary">{c.val}</div>
                <div className="text-[7px] text-muted-foreground mt-0.5">{c.stage}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </MockupFrame>
    <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute w-[56%] bottom-0 right-0 z-[3]">
      <MockupFrame small>
        <div className="text-[9px] font-extrabold text-foreground mb-1">Monthly Revenue</div>
        <div className="flex items-end gap-1 h-12 px-1">
          {[55, 75, 45, 90, 65, 80].map((h, i) => (
            <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-primary to-plum-glow origin-bottom animate-bar-up" style={{ height: `${h}%`, animationDelay: `${i * 0.1}s` }} />
          ))}
        </div>
        <div className="text-[8px] text-muted-foreground text-center mt-1">Jan – Jun 2025</div>
      </MockupFrame>
    </motion.div>
  </div>
);

/* Accounting Visual */
const AccountingVisual = () => (
  <div className="relative h-[380px] md:h-[420px]">
    <MockupFrame className="absolute w-[88%] top-0 left-0 z-[2]">
      <div className="text-[10px] font-extrabold text-foreground mb-2.5">Financial Overview — June 2025</div>
      <div className="flex gap-2 mb-3">
        {[
          { label: "Revenue", val: "$284k", delta: "▲ 18.4%", color: "text-primary" },
          { label: "Expenses", val: "$142k", delta: "▲ 6.1%", color: "text-destructive" },
          { label: "Net Profit", val: "$142k", delta: "▲ 31.2%", color: "text-green-600" },
        ].map((kpi) => (
          <div key={kpi.label} className="flex-1 bg-accent/50 rounded-lg p-2 border border-primary/10">
            <div className="text-[8px] text-muted-foreground uppercase tracking-wide">{kpi.label}</div>
            <div className={`text-sm font-extrabold ${kpi.color}`}>{kpi.val}</div>
            <div className={`text-[8px] font-bold ${kpi.color}`}>{kpi.delta}</div>
          </div>
        ))}
      </div>
      <div className="bg-secondary/60 rounded-lg p-2.5">
        <svg viewBox="0 0 260 70" className="w-full h-16" preserveAspectRatio="none">
          <defs>
            <linearGradient id="revG" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="hsl(316,21%,35%)" stopOpacity="0.25" />
              <stop offset="100%" stopColor="hsl(316,21%,35%)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0,58 L43,46 L86,38 L130,28 L173,18 L216,10 L260,4" fill="none" stroke="hsl(316,21%,35%)" strokeWidth="2" />
          <path d="M0,58 L43,46 L86,38 L130,28 L173,18 L216,10 L260,4 L260,70 L0,70Z" fill="url(#revG)" />
          <path d="M0,64 L43,60 L86,55 L130,50 L173,47 L216,44 L260,40" fill="none" stroke="hsl(0,84%,60%)" strokeWidth="1.5" strokeDasharray="4 3" />
        </svg>
        <div className="text-[8px] text-muted-foreground text-center mt-1">Revenue vs Expenses</div>
      </div>
    </MockupFrame>
    <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 0.5 }} className="absolute w-[56%] bottom-0 right-0 z-[3]">
      <MockupFrame small>
        <div className="flex flex-col gap-1.5">
          {[
            { name: "INV-2025-047", amt: "$12,400", status: "Paid", statusClass: "bg-green-100 text-green-700" },
            { name: "INV-2025-048", amt: "$8,200", status: "Due", statusClass: "bg-amber-100 text-amber-700" },
            { name: "INV-2025-049", amt: "$5,100", status: "Overdue", statusClass: "bg-red-100 text-red-700" },
          ].map((inv) => (
            <div key={inv.name} className="flex items-center gap-2 bg-secondary/60 rounded-md px-2 py-1.5">
              <div className="text-[9px] font-semibold text-foreground flex-1">{inv.name}</div>
              <div className="text-[9px] font-bold text-primary">{inv.amt}</div>
              <span className={`text-[8px] font-bold px-1.5 py-0.5 rounded-full ${inv.statusClass}`}>{inv.status}</span>
            </div>
          ))}
        </div>
      </MockupFrame>
    </motion.div>
  </div>
);

/* Inventory Visual */
const InventoryVisual = () => (
  <div className="relative h-[380px] md:h-[420px]">
    <MockupFrame className="absolute w-[88%] top-0 left-0 z-[2]">
      <div className="text-[10px] font-extrabold text-foreground mb-2.5">Warehouse Overview</div>
      <div className="flex gap-2 mb-3">
        {[
          { num: "1,248", label: "Products", bg: "bg-blue-50" },
          { num: "38", label: "Low Stock", bg: "bg-accent" },
          { num: "156", label: "Incoming", bg: "bg-green-50" },
          { num: "4", label: "Alerts", bg: "bg-amber-50" },
        ].map((s) => (
          <div key={s.label} className={`flex-1 ${s.bg} rounded-lg p-2 text-center`}>
            <div className="text-sm font-extrabold text-foreground">{s.num}</div>
            <div className="text-[8px] text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>
      <table className="w-full text-[9px]">
        <thead><tr className="text-muted-foreground uppercase tracking-wide border-b border-border">
          <th className="text-left py-1 font-bold">Item</th><th className="text-left py-1 font-bold">SKU</th><th className="text-left py-1 font-bold">Qty</th><th className="text-left py-1 font-bold">Status</th>
        </tr></thead>
        <tbody>
          {[
            { item: "Steel Bolts M8", sku: "SB-M8-100", qty: "2,400", status: "In Stock", cls: "bg-green-100 text-green-700" },
            { item: "Circuit Board A1", sku: "CB-A1-50", qty: "18", status: "Low Stock", cls: "bg-amber-100 text-amber-700" },
            { item: "PVC Pipe 2\"", sku: "PV-2IN-200", qty: "0", status: "Out", cls: "bg-red-100 text-red-700" },
          ].map((r) => (
            <tr key={r.sku} className="border-b border-border/40">
              <td className="py-1.5 font-semibold">{r.item}</td>
              <td className="py-1.5 text-muted-foreground">{r.sku}</td>
              <td className="py-1.5">{r.qty}</td>
              <td className="py-1.5"><span className={`text-[8px] font-bold px-1.5 py-0.5 rounded-full ${r.cls}`}>{r.status}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </MockupFrame>
    <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }} className="absolute w-[56%] bottom-0 right-0 z-[3]">
      <MockupFrame small>
        <div className="text-center">
          <svg width="72" height="72" viewBox="0 0 72 72" className="mx-auto mb-2" style={{ transform: "rotate(-90deg)" }}>
            <circle cx="36" cy="36" r="28" fill="none" stroke="hsl(280 10% 90%)" strokeWidth="8" />
            <circle cx="36" cy="36" r="28" fill="none" stroke="hsl(316 21% 35%)" strokeWidth="8" strokeDasharray="132 44" strokeLinecap="round" />
            <circle cx="36" cy="36" r="28" fill="none" stroke="hsl(210 70% 55%)" strokeWidth="8" strokeDasharray="0 132 26.4 17.6" strokeLinecap="round" />
          </svg>
          <div className="text-[8px] flex flex-col gap-1 items-start pl-4">
            <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-sm bg-primary" /> In Stock (75%)</div>
            <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-sm bg-blue-500" /> Low (15%)</div>
            <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-sm bg-border" /> Out (10%)</div>
          </div>
        </div>
      </MockupFrame>
    </motion.div>
  </div>
);

/* HR Visual */
const HRVisual = () => (
  <div className="relative h-[380px] md:h-[420px]">
    <MockupFrame className="absolute w-[88%] top-0 left-0 z-[2]">
      <div className="text-[10px] font-extrabold text-foreground mb-2.5">HR Dashboard</div>
      <div className="flex gap-2 mb-3">
        {[
          { icon: "👥", num: "142", lbl: "Employees" },
          { icon: "📊", num: "12", lbl: "On Leave" },
          { icon: "🎯", num: "8", lbl: "Open Positions" },
        ].map((k) => (
          <div key={k.lbl} className="flex-1 bg-accent/50 rounded-lg p-2 border border-primary/10">
            <div className="text-sm mb-0.5">{k.icon}</div>
            <div className="text-sm font-extrabold text-primary">{k.num}</div>
            <div className="text-[8px] text-muted-foreground">{k.lbl}</div>
          </div>
        ))}
      </div>
      <table className="w-full text-[9px]">
        <thead><tr className="text-muted-foreground uppercase tracking-wide border-b border-border">
          <th className="text-left py-1 font-bold">Employee</th><th className="text-left py-1 font-bold">Dept</th><th className="text-left py-1 font-bold">Status</th>
        </tr></thead>
        <tbody>
          {[
            { name: "Ahmed Raza", init: "AR", color: "bg-primary", dept: "Sales", status: "Active" },
            { name: "Sara Noor", init: "SN", color: "bg-blue-500", dept: "Finance", status: "Active" },
            { name: "Malik Khan", init: "MK", color: "bg-green-600", dept: "IT", status: "On Leave" },
          ].map((e) => (
            <tr key={e.name} className="border-b border-border/40">
              <td className="py-1.5 flex items-center gap-1.5">
                <span className={`w-4 h-4 rounded-full ${e.color} text-[7px] text-primary-foreground flex items-center justify-center font-bold`}>{e.init}</span>
                <span className="font-semibold">{e.name}</span>
              </td>
              <td className="py-1.5"><span className="bg-accent text-primary text-[8px] font-semibold px-1.5 py-0.5 rounded-full">{e.dept}</span></td>
              <td className="py-1.5"><span className={`text-[8px] font-bold px-1.5 py-0.5 rounded-full ${e.status === "Active" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"}`}>{e.status}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </MockupFrame>
    <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 1.5 }} className="absolute w-[56%] bottom-0 right-0 z-[3]">
      <MockupFrame small>
        <div className="text-[9px] font-extrabold text-primary uppercase tracking-wide mb-2 pb-1 border-b border-dashed border-border">Payslip — June 2025</div>
        {[
          { label: "Basic Salary", val: "$2,800" },
          { label: "Allowances", val: "$400" },
          { label: "Overtime", val: "$150" },
          { label: "Tax Deduction", val: "-$210", red: true },
        ].map((r) => (
          <div key={r.label} className={`flex justify-between text-[9px] mb-1 ${r.red ? "text-destructive" : "text-muted-foreground"}`}>
            <span>{r.label}</span><span>{r.val}</span>
          </div>
        ))}
        <div className="flex justify-between text-[10px] font-extrabold text-primary mt-2 pt-1.5 border-t border-border">
          <span>Net Pay</span><span>$3,140</span>
        </div>
      </MockupFrame>
    </motion.div>
  </div>
);

/* Custom Dev Visual */
const CustomVisual = () => (
  <div className="relative h-[380px] md:h-[420px]">
    <MockupFrame className="absolute w-[88%] top-0 left-0 z-[2]">
      <div className="text-[10px] font-extrabold text-foreground mb-2.5">Custom Development Pipeline</div>
      <div className="flex flex-col gap-1.5">
        {[
          { icon: "📋", label: "Requirements Analysis", sub: "Business process mapping & scoping", done: true },
          { icon: "⚙️", label: "Module Development", sub: "Python / OWL / XML — clean & tested", done: true },
          { icon: "🔗", label: "Integration & Testing", sub: "API connections & QA sign-off", done: false },
          { icon: "🚀", label: "Go-Live & Handover", sub: "Training, docs & ongoing support", done: false },
        ].map((n, i) => (
          <div key={i}>
            <div className="flex items-center gap-2.5 bg-secondary/60 rounded-lg p-2.5 border border-primary/10">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary to-plum-glow flex items-center justify-center text-sm flex-shrink-0">{n.icon}</div>
              <div className="flex-1 min-w-0">
                <div className="text-[10px] font-bold text-foreground">{n.label}</div>
                <div className="text-[8px] text-muted-foreground">{n.sub}</div>
              </div>
              <div className="text-[10px] text-primary/60">{n.done ? "✓" : "⟳"}</div>
            </div>
            {i < 3 && <div className="w-0.5 h-2 bg-gradient-to-b from-primary/30 to-transparent mx-auto" />}
          </div>
        ))}
      </div>
    </MockupFrame>
    <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 2 }} className="absolute w-[56%] bottom-0 right-0 z-[3]">
      <MockupFrame small>
        <div className="text-[9px] font-extrabold text-foreground mb-2">Integrated with</div>
        <div className="flex flex-wrap gap-1.5">
          {["WhatsApp", "Shopify", "Stripe", "FBR", "AWS S3"].map((b) => (
            <span key={b} className="text-[9px] font-bold px-2 py-1 rounded-full bg-accent text-primary border border-primary/15">{b}</span>
          ))}
        </div>
      </MockupFrame>
    </motion.div>
  </div>
);

const ModernSolutions = () => {
  return (
    <section id="solutions" className="py-24 px-5 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none" />
      <div className="absolute -top-48 -right-36 w-[600px] h-[600px] rounded-full bg-primary/[0.04] blur-3xl pointer-events-none" />

      <div className="max-w-[1160px] mx-auto relative z-10">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-accent to-accent/50 text-primary text-[11px] font-extrabold tracking-widest uppercase px-5 py-2 rounded-full border border-primary/20 mb-6">
            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse-dot" />
            ERP Solutions by Big Binary
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight mb-5">
            Manage your business with<br />
            <span className="text-gradient-plum italic">modern solutions</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
            One connected platform that links every department — sales, finance, operations, and people — giving you complete visibility and control.
          </p>
        </motion.div>

        {/* Rows */}
        <SolutionRow
          badge="CRM & Sales"
          badgeIcon={<Filter size={13} />}
          title="Turn every lead into a loyal customer"
          description="Track prospects from first contact to closed deal in a visual Kanban pipeline. Automated follow-ups and AI lead scoring ensure your team never misses the right moment."
          features={[
            "Visual pipeline — drag leads across stages instantly",
            "Automated emails & WhatsApp follow-ups",
            "Sales forecasting & commission tracking",
            "One-click quotation to signed contract",
          ]}
          linkText="Explore CRM module"
          visual={<CRMVisual />}
        />

        <SolutionRow
          badge="Accounting & Finance"
          badgeIcon={<BarChart3 size={13} />}
          title="Real-time financial clarity, zero surprises"
          description="Automated invoicing, live P&L and balance sheet, and AI-powered bank reconciliation that matches transactions in seconds."
          features={[
            "Smart bank reconciliation with auto-matching",
            "Live P&L, cash flow & balance sheet",
            "Multi-currency & multi-company consolidation",
            "FBR & international tax compliance built in",
          ]}
          linkText="Explore Accounting module"
          visual={<AccountingVisual />}
          flipped
        />

        <SolutionRow
          badge="Inventory & Operations"
          badgeIcon={<Package size={13} />}
          title="Full warehouse visibility in real time"
          description="Barcode scanning, automated reorder points, and multi-warehouse management that keeps your supply chain lean and responsive."
          features={[
            "Real-time stock levels across warehouses",
            "Smart reorder rules & demand forecasting",
            "Barcode / QR scanning for fast operations",
            "Lot tracking, serial numbers & expiry alerts",
          ]}
          linkText="Explore Inventory module"
          visual={<InventoryVisual />}
        />

        <SolutionRow
          badge="HR & People"
          badgeIcon={<Users size={13} />}
          title="Your people, streamlined from hire to retire"
          description="Recruitment, attendance, payroll, leave management, and appraisals — all in one place with employee self-service portals."
          features={[
            "One-click payroll with tax calculations",
            "Leave management with approval workflows",
            "Attendance tracking with biometric integration",
            "Performance appraisals & goal tracking",
          ]}
          linkText="Explore HR module"
          visual={<HRVisual />}
          flipped
        />

        <SolutionRow
          badge="Custom Modules"
          badgeIcon={<Layers size={13} />}
          title="ERP built exactly around your workflow"
          description="No two businesses are identical. Our certified developers build tailored modules, third-party integrations, and automated workflows that fit how your team works."
          features={[
            "Custom module development from scratch",
            "API integrations — WhatsApp, Shopify, banks & more",
            "Version migrations & upgrades",
            "Dedicated support & SLA-backed maintenance",
          ]}
          linkText="Start a custom project"
          visual={<CustomVisual />}
        />

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center pt-12"
        >
          <p className="text-muted-foreground mb-6">Ready to unify your entire operation on one intelligent platform?</p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a href="#" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-sm font-bold shadow-[var(--shadow-elevated)] hover:bg-plum-dark hover:-translate-y-0.5 transition-all">
              Explore All Modules
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 text-primary px-8 py-4 rounded-full text-sm font-bold border-2 border-primary/30 hover:border-primary hover:bg-accent/50 hover:-translate-y-0.5 transition-all">
              Get a Free Consultation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ModernSolutions;
