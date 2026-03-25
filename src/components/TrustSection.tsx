import { motion } from "framer-motion";

const TrustSection = () => (
  <section className="section-padding">
    <div className="container mx-auto max-w-3xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-8">
          Почему нам <span className="text-gradient-ocean">доверяют</span>
        </h2>
        <div className="bg-card-glass rounded-xl p-8 md:p-12 text-left space-y-4">
          <p className="text-muted-foreground leading-relaxed text-lg">
            До запуска собственного проекта мы работали с аквариумами в рамках других компаний
            и участвовали в реализации реальных проектов.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Сейчас мы работаем напрямую с клиентами, лично ведём каждый проект
            и полностью отвечаем за результат.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default TrustSection;
