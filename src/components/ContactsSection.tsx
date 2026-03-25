import { motion } from "framer-motion";
import { MapPin, Phone, MessageCircle, Send } from "lucide-react";

const ContactsSection = () => (
  <section id="contacts" className="section-padding">
    <div className="container mx-auto max-w-3xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-12">
          <span className="text-gradient-ocean">Контакты</span>
        </h2>

        <div className="bg-card-glass rounded-xl p-8 md:p-12 space-y-6">
          <div className="flex items-center gap-4 justify-center">
            <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
            <span className="text-foreground">Москва и Московская область</span>
          </div>

          <div className="flex items-center gap-4 justify-center">
            <Phone className="w-5 h-5 text-primary flex-shrink-0" />
            <a href="tel:+74951234567" className="text-foreground hover:text-primary transition-colors">
              +7 (495) 123-45-67
            </a>
          </div>

          <div className="flex items-center gap-6 justify-center pt-4">
            <a
              href="https://wa.me/74951234567"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-secondary hover:bg-secondary/80 text-secondary-foreground transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
            <a
              href="https://t.me/volna"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-secondary hover:bg-secondary/80 text-secondary-foreground transition-colors"
            >
              <Send className="w-5 h-5" />
              Telegram
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ContactsSection;
