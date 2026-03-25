import { motion } from "framer-motion";

const CtaSection = () => (
  <section id="cta" className="section-padding bg-ocean-gradient">
    <div className="container mx-auto max-w-3xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
          Рассчитаем стоимость <span className="text-gradient-ocean">вашего аквариума</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
          Оставьте заявку — поможем с размерами, подберём решение и сориентируем по стоимости.
        </p>
        <a
          href="#contacts"
          className="inline-flex items-center justify-center px-10 py-4 rounded-lg font-medium text-primary-foreground text-lg transition-all duration-300 hover:scale-105 shadow-ocean-glow"
          style={{ background: "linear-gradient(135deg, hsl(200 80% 55%), hsl(180 60% 45%))" }}
        >
          Оставить заявку
        </a>
      </motion.div>
    </div>
  </section>
);

export default CtaSection;
