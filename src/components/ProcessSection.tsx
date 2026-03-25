import { motion } from "framer-motion";
import process1 from "@/assets/process-1.jpg";
import process2 from "@/assets/process-2.jpg";
import process3 from "@/assets/process-3.jpg";
import process4 from "@/assets/process-4.jpg";
import process5 from "@/assets/process-5.jpg";

const steps = [
  {
    img: process1,
    title: "Изготовление",
    desc: "Создаём аквариум по индивидуальным размерам и задачам. Устанавливаем на тумбу или интегрируем в мебель и перегородки с учётом особенностей помещения.",
  },
  {
    img: process2,
    title: "Оборудование",
    desc: "Подбираем и устанавливаем надёжное оборудование, которое поддерживает стабильную экосистему и снижает необходимость частого вмешательства.",
  },
  {
    img: process3,
    title: "Дизайн",
    desc: "Оформляем аквариум с учётом композиции, света и объёма. Используем натуральный и декоративный декор для гармоничного визуального результата.",
  },
  {
    img: process4,
    title: "Заселение",
    desc: "Подбираем здоровых и совместимых обитателей из проверенных источников и формируем устойчивую среду.",
  },
  {
    img: process5,
    title: "Обслуживание",
    desc: "Берём на себя регулярный уход за аквариумом — от чистки до контроля состояния воды и оборудования. Вы просто наслаждаетесь результатом.",
  },
];

const ProcessSection = () => (
  <section id="process" className="section-padding">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
          Как создаётся <span className="text-gradient-ocean">ваш аквариум</span>
        </h2>
      </motion.div>

      <div className="space-y-16">
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}
          >
            <div className="w-full md:w-1/2">
              <div className="overflow-hidden rounded-xl shadow-card">
                <img
                  src={step.img}
                  alt={step.title}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="flex items-center gap-4 mb-4">
                <span className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center font-display font-bold text-primary text-lg">
                  {i + 1}
                </span>
                <h3 className="font-display text-2xl font-bold text-foreground">{step.title}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
