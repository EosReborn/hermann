import Image from "next/image";
import Link from "next/link";
import { Facebook, Phone } from "lucide-react";
import { CONTACT, SERVICES } from "@/lib/data";
import CookieSettingsButton from "./CookieSettingsButton";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-porcelain border-t border-ink/10 pt-16 pb-28 md:pb-16">
      <div className="container-page">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3">
              <span className="relative w-10 h-10 rounded-sm overflow-hidden bg-black shrink-0">
                <Image
                  src="/images/logo-mark.jpg"
                  alt="Hermann Automatika logó"
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </span>
              <span className="font-display font-semibold text-lg text-ink">
                Hermann <span className="text-signal-dim">Automatika</span>
              </span>
            </div>
            <p className="mt-4 text-sm text-steel leading-relaxed max-w-xs">
              Kapuautomatika, garázskapu és kaputelefon telepítés
              Győr-Moson-Sopron megyében.
            </p>
          </div>

          <div>
            <h4 className="eyebrow text-steel mb-4">Szolgáltatások</h4>
            <ul className="space-y-2.5">
              {SERVICES.slice(0, 5).map((s) => (
                <li key={s.id}>
                  <a
                    href="/#szolgaltatasok"
                    className="text-sm text-steel hover:text-ink transition-colors"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="eyebrow text-steel mb-4">Kapcsolat</h4>
            <ul className="space-y-2.5 text-sm text-steel">
              <li>{CONTACT.address}</li>
              <li>
                <a href={CONTACT.phoneHref} className="hover:text-ink transition-colors">
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className="hover:text-ink transition-colors">
                  {CONTACT.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="eyebrow text-steel mb-4">Kövessen minket</h4>
            <div className="flex gap-3">
              <a
                href={CONTACT.facebookHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-sm border border-ink/10 flex items-center justify-center text-steel hover:text-ink hover:border-ink/30 transition-colors"
              >
                <Facebook size={17} />
              </a>
              <a
                href={CONTACT.phoneHref}
                aria-label="Telefon"
                className="w-10 h-10 rounded-sm border border-ink/10 flex items-center justify-center text-steel hover:text-signal-dim hover:border-signal/40 transition-colors"
              >
                <Phone size={17} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-ink/10 flex flex-col sm:flex-row justify-between gap-4 text-xs text-steel">
          <span>© {year} Hermann Automatika. Minden jog fenntartva.</span>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link href="/adatvedelem" className="hover:text-ink underline underline-offset-2 transition-colors">
              Adatvédelmi tájékoztató
            </Link>
            <Link href="/impresszum" className="hover:text-ink underline underline-offset-2 transition-colors">
              Impresszum
            </Link>
            <CookieSettingsButton />
          </div>
        </div>
      </div>
    </footer>
  );
}
