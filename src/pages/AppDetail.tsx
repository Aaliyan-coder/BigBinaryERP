import { useParams, Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, ArrowRight } from "lucide-react";
import { getAppBySlug, appsData } from "@/data/appsData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const AppDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { pathname } = useLocation();
  const app = getAppBySlug(slug || "");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  if (!app) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">App Not Found</h1>
          <Link to="/" className="text-primary hover:underline">← Back to Home</Link>
        </div>
      </div>
    );
  }

  const currentIndex = appsData.findIndex((a) => a.slug === app.slug);
  const prevApp = appsData[(currentIndex - 1 + appsData.length) % appsData.length];
  const nextApp = appsData[(currentIndex + 1) % appsData.length];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32">
        {/* Decorative blobs */}
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full opacity-15 blur-3xl" style={{ background: app.color }} />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full opacity-10 blur-3xl bg-gradient-brand" />

        <div className="max-w-[1100px] mx-auto px-5">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
            <Link to="/#apps" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm mb-8">
              <ArrowLeft size={16} /> Back to all apps
            </Link>
          </motion.div>

          <div className="flex flex-col md:flex-row items-start gap-8 md:gap-14">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
              className="w-24 h-24 md:w-32 md:h-32 rounded-2xl shadow-xl flex items-center justify-center shrink-0 border border-border/50"
              style={{ background: `linear-gradient(135deg, ${app.color}15, ${app.color}08)` }}
            >
              <img src={app.icon} alt={app.name} className="w-16 h-16 md:w-20 md:h-20 object-contain" />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-3">
                {app.name}
              </h1>
              <p className="text-lg md:text-xl font-medium mb-4" style={{ color: app.color }}>
                {app.tagline}
              </p>
              <p className="text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed">
                {app.description}
              </p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8 flex flex-wrap gap-4"
              >
                <a
                  href="#contact"
                  className="bg-gradient-brand text-primary-foreground px-7 py-3 rounded-xl font-semibold hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-lg"
                >
                  Get Started
                </a>
                <a
                  href="#features"
                  className="border border-border px-7 py-3 rounded-xl font-semibold text-foreground hover:bg-secondary transition-all"
                >
                  Explore Features
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative z-10 -mt-8 mb-16">
        <div className="max-w-[800px] mx-auto px-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-2xl shadow-lg border border-border/50 p-6 md:p-8 grid grid-cols-3 gap-4"
          >
            {app.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.4, type: "spring" }}
                className="text-center"
              >
                <div className="text-2xl md:text-4xl font-bold font-display" style={{ color: app.color }}>
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-16 md:py-24 px-5">
        <div className="max-w-[1100px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
              Powerful Features
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Everything you need to streamline your {app.name.toLowerCase()} operations.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {app.features.map((feature, i) => (
              <motion.div
                key={feature.title}
                variants={item}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group relative bg-card rounded-2xl p-6 border border-border/50 shadow-sm hover:shadow-xl transition-shadow overflow-hidden"
              >
                {/* Hover gradient */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(135deg, ${app.color}08, ${app.color}03)` }}
                />
                <div className="relative z-10">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: `${app.color}18` }}
                  >
                    <img src={app.icon} alt="" className="w-6 h-6 object-contain opacity-80" />
                  </div>
                  <h3 className="font-semibold text-foreground text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24 px-5 bg-secondary/50">
        <div className="max-w-[900px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
              Why Choose {app.name}?
            </h2>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-5"
          >
            {app.benefits.map((benefit) => (
              <motion.div
                key={benefit}
                variants={item}
                className="flex items-start gap-4 bg-card rounded-xl p-5 border border-border/50 shadow-sm"
              >
                <CheckCircle2 className="w-6 h-6 shrink-0 mt-0.5" style={{ color: app.color }} />
                <span className="text-foreground font-medium">{benefit}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 px-5">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-[800px] mx-auto text-center rounded-3xl p-10 md:p-16 relative overflow-hidden"
          style={{ background: `linear-gradient(135deg, ${app.color}, ${app.color}cc)` }}
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 border border-white/30 rounded-full" />
            <div className="absolute bottom-10 right-10 w-48 h-48 border border-white/20 rounded-full" />
          </div>
          <div className="relative z-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to transform your {app.name.toLowerCase()}?
            </h2>
            <p className="text-white/80 mb-8 max-w-lg mx-auto">
              Get started today and see why thousands of businesses trust Big Binary ERP.
            </p>
            <Link
              to="/#contact"
              className="inline-block bg-white text-foreground px-8 py-3.5 rounded-xl font-semibold hover:-translate-y-1 transition-transform shadow-lg"
            >
              Request a Demo
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Prev / Next Navigation */}
      <section className="pb-16 px-5">
        <div className="max-w-[900px] mx-auto grid grid-cols-2 gap-4">
          <Link
            to={`/apps/${prevApp.slug}`}
            className="group flex items-center gap-3 bg-card rounded-xl p-5 border border-border/50 hover:shadow-md transition-shadow"
          >
            <ArrowLeft size={18} className="text-muted-foreground group-hover:text-foreground transition-colors" />
            <div>
              <div className="text-xs text-muted-foreground">Previous</div>
              <div className="font-semibold text-foreground text-sm">{prevApp.name}</div>
            </div>
          </Link>
          <Link
            to={`/apps/${nextApp.slug}`}
            className="group flex items-center gap-3 justify-end text-right bg-card rounded-xl p-5 border border-border/50 hover:shadow-md transition-shadow"
          >
            <div>
              <div className="text-xs text-muted-foreground">Next</div>
              <div className="font-semibold text-foreground text-sm">{nextApp.name}</div>
            </div>
            <ArrowRight size={18} className="text-muted-foreground group-hover:text-foreground transition-colors" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AppDetail;
