import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="text-primary-foreground pt-16 pb-8 px-5" style={{ background: "var(--gradient-footer)" }}>
    <div className="max-w-[1200px] mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        <div>
          <img src={logo} alt="Big Binary ERP" className="h-12 w-auto mb-4 brightness-0 invert" />
          <p className="text-sm leading-relaxed opacity-80">
            We transform manually operated businesses into efficient, automated enterprises through comprehensive ERP solutions and cutting-edge technology.
          </p>
          <div className="flex gap-3 mt-5">
            {["f", "𝕏", "in", "📷"].map((s) => (
              <a key={s} href="#" className="w-10 h-10 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 flex items-center justify-center text-sm font-bold hover:bg-plum-glow hover:border-plum-glow hover:-translate-y-0.5 transition-all">
                {s}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display text-lg mb-5">Quick Links</h4>
          <div className="flex flex-col gap-3">
            {["Home", "Apps", "Solutions", "About Us", "Pricing", "Contact"].map((l) => (
              <a key={l} href="#" className="text-sm opacity-80 hover:opacity-100 transition-opacity">{l}</a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display text-lg mb-5">Services</h4>
          <div className="flex flex-col gap-3">
            {["Business Automation", "ERP Implementation", "Cloud Solutions", "Technical Support", "Custom Development"].map((l) => (
              <a key={l} href="#" className="text-sm opacity-80 hover:opacity-100 transition-opacity">{l}</a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display text-lg mb-5">Contact Info</h4>
          <div className="text-sm space-y-3 opacity-80">
            <p><strong>Email:</strong><br /><a href="mailto:info@bigbinaryerp.com" className="hover:opacity-100">info@bigbinaryerp.com</a></p>
            <p><strong>Phone:</strong><br /><a href="tel:03268880101" className="hover:opacity-100">+92 326 8880101</a></p>
            <p><strong>Address:</strong><br />444-Q DHA Phase 2, Lahore, Pakistan</p>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 pt-8 text-center">
        <p className="text-sm opacity-70">© 2026 Big Binary ERP. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
