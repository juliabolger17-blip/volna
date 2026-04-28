import { motion } from "framer-motion";
import portfolio1 from "@/assets/portfolio-1.jpg";

const projects = [
  {
    img: portfolio1,
    title: "Аквариум на 350 литров",
    style: "Природный стиль",
    desc: "Природная композиция с корягами, живыми растениями и каменной структурой. Биологически сбалансированная экосистема в современном интерьере.",
  },
];

const PortfolioSection = () => (
  <section id="portfolio" className="section-padding bg-background">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
          Наше <span className="text-gradient-ocean">портфолио</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Реализованные проекты — от концепции до живой экосистемы
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card-glass rounded-xl overflow-hidden group"
          >
            <div className="overflow-hidden">
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                className="w-full h-[28rem] object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl font-bold text-foreground mb-1">{p.title}</h3>
              <p className="text-primary text-sm font-medium mb-3">{p.style}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PortfolioSection;
