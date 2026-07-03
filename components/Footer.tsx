import { Facebook, MessageCircle, Phone } from "lucide-react";
import { CONTACT, SERVICES } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-anthracite border-t border-white/10 pt-16 pb-28 md:pb-16">
      <div className="container-page">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <span className="font-display font-semibold text-lg text-porcelain">
              Hermann <span className="text-signal">Automatika</span>
            </span>
            <p className="mt-4 text-sm text-steel-light leading-relaxed max-w-xs">
              Kapuautomatika, garázskapu, kaputelefon és kamerarendszer telepítés
              Győr-Moson-Sopron megyében.
            </p>
          </div>

          <div>
            <h4 className="eyebrow text-steel-light mb-4">Szolgáltatások</h4>
            <ul className="space-y-2.5">
              {SERVICES.slice(0, 5).map((s) => (
                <li key={s.id}>
                  <a
                    href="#szolgaltatasok"
                    className="text-sm text-steel-light hover:text-porcelain transition-colors"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="eyebrow text-steel-light mb-4">Kapcsolat</h4>
            <ul className="space-y-2.5 text-sm text-steel-light">
              <li>{CONTACT.address}</li>
              <li>
                <a href={CONTACT.phoneHref} className="hover:text-porcelain transition-colors">
                  {CONTACT.phoneDisplay}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="eyebrow text-steel-light mb-4">Kövessen minket</h4>
            <div className="flex gap-3">
              <a
                href={CONTACT.facebookHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-sm border border-white/10 flex items-center justify-center text-steel-light hover:text-porcelain hover:border-white/30 transition-colors"
              >
                <Facebook size={17} />
              </a>
              <a
                href={CONTACT.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-sm border border-white/10 flex items-center justify-center text-steel-light hover:text-whatsapp hover:border-whatsapp/40 transition-colors"
              >
                <MessageCircle size={17} />
              </a>
              <a
                href={CONTACT.phoneHref}
                aria-label="Telefon"
                className="w-10 h-10 rounded-sm border border-white/10 flex items-center justify-center text-steel-light hover:text-signal hover:border-signal/40 transition-colors"
              >
                <Phone size={17} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3 text-xs text-steel-light">
          <span>© {year} Hermann Automatika. Minden jog fenntartva.</span>
          <span>Készült precizitással, mint egy jól beállított kapumotor.</span>
        </div>
      </div>
    </footer>
  );
}
