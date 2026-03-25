import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const GuaranteeSection = () => (
  <section className="section-padding bg-ocean-gradient">
    <div className="container mx-auto max-w-3xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <ShieldCheck className="w-16 h-16 text-primary mx-auto mb-6" />
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
          Прозрачные условия <span className="text-gradient-ocean">гарантии</span>
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-8">
          Мы уверены в качестве наших решений и даём гарантию на конструкции:
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <div className="bg-card-glass rounded-xl p-6 flex-1">
            <p className="text-3xl font-display font-bold text-primary mb-2">5 лет</p>
            <p className="text-sm text-muted-foreground">при разовой покупке аквариума</p>
          </div>
          <div className="bg-card-glass rounded-xl p-6 flex-1">
            <p className="text-3xl font-display font-bold text-primary mb-2">Весь период</p>
            <p className="text-sm text-muted-foreground">обслуживания при работе с нами</p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default GuaranteeSection;
