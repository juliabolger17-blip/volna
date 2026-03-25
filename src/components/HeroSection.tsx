import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Подводный мир аквариума"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-8 text-center max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight"
        >
          Аквариум{" "}
          <span className="text-gradient-ocean">вашей мечты</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Проектируем и реализуем аквариумы, которые становятся частью пространства
          и создают атмосферу в интерьере. Все этапы — от идеи до обслуживания — берём на себя.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#cta"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-medium text-primary-foreground transition-all duration-300 hover:scale-105 shadow-ocean-glow"
            style={{ background: "linear-gradient(135deg, hsl(200 80% 55%), hsl(180 60% 45%))" }}
          >
            Оставить заявку
          </a>
          <a
            href="#contacts"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-medium text-foreground border border-border hover:border-primary/50 hover:bg-secondary/50 transition-all duration-300"
          >
            Получить консультацию
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
