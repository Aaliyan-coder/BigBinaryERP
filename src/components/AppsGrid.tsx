import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const apps = [
  { name: "Accounting", slug: "accounting", icon: "https://download.odoocdn.com/icons/accountant/static/description/icon.svg" },
  { name: "CRM", slug: "crm", icon: "https://download.odoocdn.com/icons/crm/static/description/icon.svg" },
  { name: "POS", slug: "pos", icon: "https://download.odoocdn.com/icons/point_of_sale/static/description/icon.svg" },
  { name: "Sales", slug: "sales", icon: "https://download.odoocdn.com/icons/sale/static/description/icon.svg" },
  { name: "Website", slug: "website", icon: "https://download.odoocdn.com/icons/website/static/description/icon.svg" },
  { name: "Purchase", slug: "purchase", icon: "https://download.odoocdn.com/icons/purchase/static/description/icon.svg" },
  { name: "Inventory", slug: "inventory", icon: "https://download.odoocdn.com/icons/stock/static/description/icon.svg" },
  { name: "Quality", slug: "quality", icon: "https://download.odoocdn.com/icons/quality_control/static/description/icon.svg" },
  { name: "Fleet", slug: "fleet", icon: "https://download.odoocdn.com/icons/fleet/static/description/icon.svg" },
  { name: "Events", slug: "events", icon: "https://download.odoocdn.com/icons/website_event/static/description/icon.svg" },
  { name: "Social", slug: "social", icon: "https://download.odoocdn.com/icons/social/static/description/icon.svg" },
  { name: "Dashboard", slug: "dashboard", icon: "https://download.odoocdn.com/icons/board/static/description/icon.svg" },
  { name: "Project", slug: "project", icon: "https://download.odoocdn.com/icons/project/static/description/icon.svg" },
  { name: "Employees", slug: "employees", icon: "https://download.odoocdn.com/icons/hr/static/description/icon.svg" },
  { name: "Discuss", slug: "discuss", icon: "https://download.odoocdn.com/icons/mail/static/description/icon.svg" },
  { name: "AI Bot", slug: "ai-bot", icon: "https://download.odoocdn.com/icons/mail_bot/static/description/icon.svg" },
];

const AppsGrid = () => {
  return (
    <section id="apps" className="py-16 px-5">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center font-display text-3xl md:text-4xl font-bold text-primary mb-12"
        style={{ textShadow: "0 0 6px hsl(272 35% 42% / 0.12)" }}
      >
        Everything your business needs
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-[800px] mx-auto bg-secondary rounded-[80px_0_80px_0] md:rounded-[180px_0_180px_0] lg:rounded-[250px_0_250px_0] p-8 md:p-12"
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center max-w-[600px] mx-auto">
          {apps.map((app, i) => (
            <motion.div
              key={app.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.4 }}
              className="flex flex-col items-center group"
            >
              <Link to={`/apps/${app.slug}`} className="flex flex-col items-center">
                <div className="w-[90px] h-[90px] md:w-[100px] md:h-[100px] bg-card rounded-lg shadow-sm flex items-center justify-center hover:-translate-y-1 transition-transform cursor-pointer border border-border/50">
                  <img src={app.icon} alt={app.name} className="w-14 h-14 object-contain" />
                </div>
                <span className="mt-2.5 text-sm text-foreground font-medium">{app.name}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AppsGrid;
