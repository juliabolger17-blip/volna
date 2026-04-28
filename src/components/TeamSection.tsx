import { motion } from "framer-motion";
import teamYuri from "@/assets/team-yuri.jpg";
import teamAndrey from "@/assets/team-andrey.jpg";
import teamYulia from "@/assets/team-yulia.jpg";

const team = [
  {
    img: teamYuri,
    name: "Юрий",
    role: "Ведущий аквариумист / Руководитель проектов",
    desc: "Отвечает за реализацию проектов и техническую часть. Контролирует все этапы — от подбора решений до запуска аквариума. Работает с 2020 года.",
  },
  {
    img: teamAndrey,
    name: "Андрей",
    role: "Аквариумист-дизайнер / Ведущий специалист по оформлению",
    desc: "Создаёт визуальную концепцию аквариума и отвечает за оформление. Работает с композицией, светом и объёмом — от подбора материалов до финального дизайна. Работает с 2020 года.",
  },
  {
    img: teamYulia,
    name: "Юлия",
    role: "Биолог / Специалист по экосистемам",
    desc: "Отвечает за биологический баланс, подбор обитателей и устойчивость среды.",
  },
];

const TeamSection = () => (
  <section id="team" className="section-padding bg-ocean-gradient">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
          Команда, которая создаёт <span className="text-gradient-ocean">ваш аквариум</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Каждый проект мы ведём лично — от идеи до стабильной экосистемы
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {team.map((m, i) => (
          <motion.div
            key={m.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card-glass rounded-xl overflow-hidden group"
          >
            <div className="overflow-hidden">
              <img
                src={m.img}
                alt={m.name}
                loading="lazy"
                width={600}
                height={600}
                className="w-full h-[28rem] md:h-[32rem] object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl font-bold text-foreground mb-1">{m.name}</h3>
              <p className="text-primary text-sm font-medium mb-3">{m.role}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{m.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
