import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CONTACT } from "@/lib/data";

export const metadata: Metadata = {
  title: "Impresszum",
  description: "A Hermann Automatika weboldal üzemeltetőjének jogi adatai.",
  robots: { index: true, follow: true },
};

function Row({ label, value, placeholder }: { label: string; value?: string; placeholder?: boolean }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 py-3 border-b border-ink/10 last:border-0">
      <dt className="text-sm text-steel sm:w-48 shrink-0">{label}</dt>
      <dd className={`text-ink font-medium ${placeholder ? "text-signal-dim" : ""}`}>{value}</dd>
    </div>
  );
}

export default function ImpresszumPage() {
  return (
    <>
      <Header />
      <main className="bg-mist pt-40 pb-24 md:pb-32">
        <div className="container-page max-w-3xl">
          <p className="eyebrow text-signal-dim mb-4">Jogi tájékoztató</p>
          <h1 className="font-display font-semibold text-3xl md:text-5xl text-ink text-balance">
            Impresszum
          </h1>
          <p className="mt-5 text-steel leading-relaxed">
            Az elektronikus kereskedelmi szolgáltatások, valamint az információs társadalommal
            összefüggő szolgáltatások egyes kérdéseiről szóló 2001. évi CVIII. törvény alapján a
            hermannautomatika.hu weboldal üzemeltetőjének adatai az alábbiak.
          </p>

          <div className="mt-10 rounded-md border border-ink/10 bg-porcelain p-6 md:p-8">
            <h2 className="font-display font-semibold text-lg text-ink mb-2">Szolgáltató adatai</h2>
            <dl>
              <Row label="Név" value="Hermann Miklós (Hermann Automatika)" />
              <Row label="Székhely / telephely" value={CONTACT.address} />
              <Row label="Nyilvántartási szám" value="[töltendő – egyéni vállalkozói nyilvántartási szám]" placeholder />
              <Row label="Adószám" value="[töltendő]" placeholder />
              <Row label="Telefonszám" value={CONTACT.phoneDisplay} />
              <Row label="E-mail" value={CONTACT.email} />
              <Row label="A tartalomért felelős" value="Hermann Miklós" />
            </dl>
          </div>

          <div className="mt-6 rounded-md border border-ink/10 bg-porcelain p-6 md:p-8">
            <h2 className="font-display font-semibold text-lg text-ink mb-2">Tárhelyszolgáltató</h2>
            <dl>
              <Row label="Név" value="[töltendő – a tárhelyszolgáltató neve]" placeholder />
              <Row label="Székhely" value="[töltendő]" placeholder />
              <Row label="E-mail" value="[töltendő]" placeholder />
            </dl>
          </div>

          <div className="mt-10 space-y-4 text-steel leading-relaxed">
            <h2 className="font-display font-semibold text-xl text-ink">Szerzői jogok</h2>
            <p>
              A hermannautomatika.hu weboldalon található tartalmak – szövegek, grafikai
              elemek, logó, fényképek – szerzői jogi védelem alatt állnak. Ezek másolása,
              terjesztése, illetve felhasználása kizárólag a jogtulajdonos előzetes írásbeli
              hozzájárulásával lehetséges.
            </p>
            <h2 className="font-display font-semibold text-xl text-ink pt-2">Felelősség kizárása</h2>
            <p>
              A Weboldalon található információk tájékoztató jellegűek, azok pontosságáért és
              teljességéért az üzemeltető a legnagyobb gondosság mellett is korlátozott
              felelősséget vállal. A pontos, egyedi ajánlatot minden esetben a helyszíni felmérés
              után adjuk meg.
            </p>
          </div>

          <p className="mt-10 text-xs text-steel/70">
            A [töltendő] jelölésű mezőket kérjük a tényleges céges adatokkal kitölteni a weboldal
            éles közzététele előtt.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
