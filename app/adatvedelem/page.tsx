import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CONTACT } from "@/lib/data";

export const metadata: Metadata = {
  title: "Adatvédelmi tájékoztató",
  description: "A Hermann Automatika adatvédelmi tájékoztatója a weboldal használatával és a kapcsolatfelvétellel összefüggő adatkezelésről.",
  robots: { index: true, follow: true },
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-12 first:mt-0">
      <h2 className="font-display font-semibold text-xl md:text-2xl text-ink">{title}</h2>
      <div className="mt-4 space-y-4 text-steel leading-relaxed">{children}</div>
    </section>
  );
}

export default function AdatvedelemPage() {
  return (
    <>
      <Header />
      <main className="bg-mist pt-40 pb-24 md:pb-32">
        <div className="container-page max-w-3xl">
          <p className="eyebrow text-signal-dim mb-4">Jogi tájékoztató</p>
          <h1 className="font-display font-semibold text-3xl md:text-5xl text-ink text-balance">
            Adatvédelmi tájékoztató
          </h1>
          <p className="mt-5 text-steel leading-relaxed">
            Jelen tájékoztató a hermannautomatika.hu weboldal (a továbbiakban: Weboldal)
            működésével, valamint a Weboldalon keresztül – telefonon vagy e-mailben – történő
            kapcsolatfelvétellel összefüggő adatkezelést mutatja be, az Európai Parlament és a
            Tanács (EU) 2016/679 rendelete (GDPR) és az információs önrendelkezési jogról szóló
            2011. évi CXII. törvény alapján.
          </p>

          <Section title="1. Az adatkezelő">
            <p>
              Adatkezelő: Hermann Automatika (Hermann Miklós egyéni vállalkozó)
              <br />
              Székhely / telephely: {CONTACT.address}
              <br />
              Telefonszám: {CONTACT.phoneDisplay}
              <br />
              E-mail: {CONTACT.email}
            </p>
            <p className="text-sm text-steel/80">
              Nyilvántartási szám és adószám a{" "}
              <a href="/impresszum" className="underline underline-offset-2 hover:text-ink">
                Impresszum
              </a>{" "}
              oldalon található.
            </p>
          </Section>

          <Section title="2. Milyen adatokat kezelünk, és miért">
            <p>
              A Weboldal önmagában nem tartalmaz ajánlatkérő űrlapot – a kapcsolatfelvétel
              telefonhívás vagy e-mail útján történik. Ha telefonon vagy e-mailben megkeres
              minket, a hívás/üzenet során Ön által megadott adatokat (jellemzően név,
              telefonszám, e-mail cím, valamint a megkeresés tartalma – pl. a kapu típusa,
              helyszín) kizárólag az érdeklődés megválaszolása, az árajánlat elkészítése és a
              megrendelés teljesítése céljából kezeljük.
            </p>
            <p>
              Az adatkezelés jogalapja az Ön önkéntes hozzájárulása (GDPR 6. cikk (1) bekezdés a)
              pont), megrendelés esetén pedig a szerződés teljesítéséhez szükséges lépések
              megtétele (GDPR 6. cikk (1) bekezdés b) pont).
            </p>
          </Section>

          <Section title="3. Az adatkezelés időtartama">
            <p>
              Meg nem valósult megrendelés esetén az egyeztetés során megadott adatokat az
              utolsó kapcsolatfelvételtől számított 1 évig, létrejött megrendelés esetén a
              számviteli és adójogi kötelezettségek teljesítéséhez szükséges ideig (jellemzően 8
              évig) kezeljük.
            </p>
          </Section>

          <Section title="4. Sütik (cookie-k)">
            <p>
              A Weboldal a működéshez szükséges, minimális sütiket használ – ilyen például az
              Ön cookie-hozzájárulási döntésének (elfogadás/elutasítás) a böngészőjében történő
              megjegyzése.
            </p>
            <p>
              A Kapcsolat oldalon megjelenő Google Térkép beágyazás a Google LLC saját sütijeit
              helyezheti el, amennyiben Ön ehhez a sütik elfogadásával hozzájárul. A térkép a
              hozzájárulás megadásáig nem töltődik be. Hozzájárulását bármikor visszavonhatja,
              vagy megváltoztathatja a lábléc "Cookie-beállítások" gombjára kattintva.
            </p>
            <p>
              A Weboldal nem használ harmadik féltől származó marketing- vagy hirdetési célú
              követő sütiket.
            </p>
          </Section>

          <Section title="5. Adattovábbítás, adatfeldolgozók">
            <p>
              A térkép megjelenítéséhez szükséges technikai adatok (pl. IP-cím) a Google LLC
              (Amerikai Egyesült Államok) részére továbbításra kerülhetnek, kizárólag az Ön
              hozzájárulása esetén. A Weboldal tárhelyszolgáltatójának adatai az{" "}
              <a href="/impresszum" className="underline underline-offset-2 hover:text-ink">
                Impresszum
              </a>{" "}
              oldalon találhatók.
            </p>
          </Section>

          <Section title="6. Az Ön jogai">
            <p>
              A GDPR alapján Ön jogosult tájékoztatást kérni a kezelt adatairól, kérheti azok
              helyesbítését, törlését vagy kezelésének korlátozását, tiltakozhat az adatkezelés
              ellen, valamint jogosult az adathordozhatósághoz. Az önkéntes hozzájáruláson
              alapuló adatkezelés esetén a hozzájárulást bármikor, indokolás nélkül
              visszavonhatja. Kérését a fenti elérhetőségeken jelezheti.
            </p>
          </Section>

          <Section title="7. Jogorvoslati lehetőség">
            <p>
              Amennyiben megítélése szerint a személyes adatai kezelésével kapcsolatban jogsérelem
              érte, panasszal élhet a Nemzeti Adatvédelmi és Információszabadság Hatóságnál
              (NAIH):
            </p>
            <p>
              Cím: 1055 Budapest, Falk Miksa utca 9–11.
              <br />
              Postacím: 1363 Budapest, Pf. 9.
              <br />
              Telefon: +36 (1) 391-1400
              <br />
              E-mail: ugyfelszolgalat@naih.hu
              <br />
              Weboldal: www.naih.hu
            </p>
            <p>Ezen felül bírósághoz is fordulhat, az igény a lakóhelye szerinti törvényszéken is érvényesíthető.</p>
          </Section>

          <Section title="8. A tájékoztató módosítása">
            <p>
              Fenntartjuk a jogot jelen tájékoztató módosítására. A mindenkor hatályos verzió a
              Weboldalon érhető el. Utolsó frissítés: 2026.
            </p>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  );
}
