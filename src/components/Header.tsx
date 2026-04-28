import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import logoVolna from "@/assets/logo-volna.png";

const navItems = [
  { label: "Каталог", href: "#services" },
  { label: "Услуги", href: "#services" },
  { label: "Портфолио", href: "#process" },
  { label: "О компании", href: "#team" },
  { label: "Контакты", href: "#contacts" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-8">
        <a href="#" className="flex items-center gap-3">
          <div
            aria-label="Волна — аквариумная студия"
            role="img"
            className="h-12 w-12 bg-primary"
            style={{
              WebkitMaskImage: `url(${logoVolna})`,
              maskImage: `url(${logoVolna})`,
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
              maskPosition: "center",
              WebkitMaskSize: "contain",
              maskSize: "contain",
            }}
          />
          <span className="font-display text-xl font-semibold text-foreground tracking-wide">Волна</span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Phone className="w-4 h-4 text-primary" />
          <a href="tel:+79778774281" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            +7 (977) 877-42-81
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-foreground p-2"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border px-4 pb-6"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-muted-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="flex items-center gap-2 pt-3 border-t border-border mt-3">
            <Phone className="w-4 h-4 text-primary" />
            <a href="tel:+79778774281" className="text-sm text-foreground">+7 (977) 877-42-81</a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
