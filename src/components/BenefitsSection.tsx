import { motion } from "framer-motion";
import { Calendar, Users, Fingerprint, Shield } from "lucide-react";

const benefits = [
  { icon: Calendar, title: "Работаем с 2020 года", desc: "Опыт реализации проектов разного масштаба" },
  { icon: Users, title: "Проверенные поставщики", desc: "Надёжные подрядчики и материалы" },
  { icon: Fingerprint, title: "Индивидуальный подход", desc: "Каждый проект уникален" },
  { icon: Shield, title: "Гарантия до 5 лет", desc: "Уверенность в качестве решений" },
];

const BenefitsSection = () => (
  <section className="section-padding bg-ocean-gradient">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card-glass rounded-xl p-6 text-center group hover:shadow-ocean-glow transition-all duration-500"
          >
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <b.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">{b.title}</h3>
            <p className="text-sm text-muted-foreground">{b.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
