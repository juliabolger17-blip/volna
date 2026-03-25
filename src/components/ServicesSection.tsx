import { motion } from "framer-motion";
import { Box, Factory, Armchair, Palette, Wrench, Settings, Truck } from "lucide-react";

const services = [
  { icon: Box, title: "Аквариум под ключ" },
  { icon: Factory, title: "Производство аквариумов" },
  { icon: Armchair, title: "Производство тумб" },
  { icon: Palette, title: "Оформление аквариумов" },
  { icon: Settings, title: "Обслуживание аквариумов" },
  { icon: Wrench, title: "Ремонт аквариумов" },
  { icon: Truck, title: "Перевозка аквариумов" },
];

const ServicesSection = () => (
  <section id="services" className="section-padding">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
          Наши <span className="text-gradient-ocean">услуги</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="bg-card-glass rounded-xl p-6 group hover:shadow-ocean-glow hover:border-primary/30 transition-all duration-500 cursor-pointer"
          >
            <s.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-display text-lg font-semibold text-foreground">{s.title}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
