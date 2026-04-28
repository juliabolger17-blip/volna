import { motion } from "framer-motion";
import { MapPin, Phone, MessageCircle, Send, Loader2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const TELEGRAM_BOT_TOKEN = "8678305524:AAEGEX3AsxvR9A7vb164bkoDOPtDYPv5Hl0";
const TELEGRAM_CHAT_ID = "5190040039";

const ContactsSection = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    setLoading(true);
    const text = `🐠 Новая заявка с сайта Волна\n\n👤 Имя: ${name}\n📞 Телефон: ${phone}${message ? `\n💬 Сообщение: ${message}` : ""}`;

    try {
      const res = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text,
            parse_mode: "HTML",
          }),
        }
      );

      if (!res.ok) throw new Error("Telegram API error");

      toast({ title: "Заявка отправлена!", description: "Мы свяжемся с вами в ближайшее время." });
      setName("");
      setPhone("");
      setMessage("");
    } catch {
      toast({ title: "Ошибка", description: "Не удалось отправить заявку. Попробуйте позже.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contacts" className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            <span className="text-gradient-ocean">Контакты</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-card-glass rounded-xl p-8 space-y-5">
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">Оставить заявку</h3>
              <div>
                <input
                  type="text"
                  placeholder="Ваше имя *"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  maxLength={100}
                  className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Телефон *"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  maxLength={20}
                  className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>
              <div>
                <textarea
                  placeholder="Сообщение (необязательно)"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  maxLength={1000}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-medium text-primary-foreground text-lg transition-all duration-300 hover:scale-[1.02] shadow-ocean-glow disabled:opacity-60 disabled:hover:scale-100"
                style={{ background: "linear-gradient(135deg, hsl(200 80% 55%), hsl(180 60% 45%))" }}
              >
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                {loading ? "Отправка..." : "Отправить заявку"}
              </button>
            </form>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card-glass rounded-xl p-8 space-y-6 flex flex-col justify-center"
          >
            <div className="flex items-center gap-4">
              <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-foreground">Москва и Московская область</span>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="w-5 h-5 text-primary flex-shrink-0" />
              <a href="tel:+79778774281" className="text-foreground hover:text-primary transition-colors">
                +7 (977) 877-42-81
              </a>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
              <a
                href="https://wa.me/79778774281"
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
