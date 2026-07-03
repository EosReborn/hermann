# Hermann Automatika – Landing Page

Modern, prémium landing oldal a Hermann Automatika számára. Next.js 14 (App Router),
React, TypeScript, Tailwind CSS és Framer Motion alapokon, Lucide ikonokkal.

## Gyors indítás

```bash
npm install
npm run dev
```

Nyisd meg: http://localhost:3000

Build:

```bash
npm run build
npm run start
```

> A telepítéshez internetkapcsolat szükséges (a Google Fonts betöltéséhez build időben).

## Amit mindenképp cserélj le éles indulás előtt

1. ✅ **Telefonszám, cím, e-mail** – ezek már a valós céges adatokkal szerepelnek
   (`lib/data.ts` → `CONTACT`), a Google-adatlap alapján: 06 20 366 7737,
   hermann.m@t-online.hu, 9081 Győrújbarát, Petőfi Sándor u. 104.
2. **Nyitvatartás** – csak a hétfői nyitás (9:00) volt ismert a forrásból, a többi
   becsült érték. Pontosítsd a `lib/data.ts` → `CONTACT.hours` tömböt a tényleges
   napi/heti rendre.
3. **Google Térkép beágyazás** – `lib/data.ts` → `CONTACT.mapEmbedSrc` jelenleg egy
   API-kulcs nélküli, cím alapú beágyazás (`output=embed`). Ha van saját Google
   Business profilod, cseréld a hivatalos "Térkép beágyazása" kódra a jobb
   találati pontosságért.
4. **Facebook link** – `lib/data.ts` → `CONTACT.facebookHref` egyelőre placeholder,
   írd át a cég valódi Facebook-oldalára.
5. **Fotók** – a hero szekcióban már a saját, feltöltött tolókapu-fotó szerepel
   (`public/images/hero-tolokapu.jpg`). A szolgáltatás kártyákon és a referencia
   galériában (`lib/data.ts` → `SERVICES`, `GALLERY_IMAGES`) egyelőre helyőrző
   (Unsplash) képek vannak – cseréld le őket a cég saját fotóira: helyezd a képeket
   a `public/images/` mappába, és írd át az elérési utakat (pl. `/images/referencia-01.jpg`).
6. **Schema.org adatok** – `lib/schema.ts`: cégnév, cím, GPS-koordináták, nyitvatartás,
   telefonszám. Ez adja a Google-nek a helyi keresési (Local SEO) információkat.
7. **Domain** – `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts` és `lib/schema.ts` fájlokban
   cseréld le a `https://www.hermannautomatika.hu` placeholder domaint a valós domainre.
8. **Vélemények / GYIK / csapat szövegek** – `lib/data.ts` → `TESTIMONIALS`, `FAQ`, `WHY_US`,
   `PROCESS`. Írd át valós ügyfélvéleményekre és céges részletekre.

## Szerkezet

```
app/
  layout.tsx      – fejléc metaadatok, fontok, Schema.org JSON-LD
  page.tsx        – az összes szekció összefűzése
  globals.css     – design tokenek, glassmorphism, "rail" motívum, reduced-motion
  robots.ts       – robots.txt generálás
  sitemap.ts      – sitemap.xml generálás
components/
  Header.tsx      – navigáció, mobil menü, glass háttér görgetéskor
  Hero.tsx        – nyitóképernyő nagy háttérképpel és CTA-kkal
  Services.tsx    – 7 szolgáltatás kártyás elrendezésben
  Gallery.tsx     – masonry referencia-galéria lightboxszal (min. 12 kép)
  WhyUs.tsx       – "Miért minket válasszon?" ikonos blokk
  Brands.tsx      – logófal (Beninca, Motorline, Sommer, Nice, BFT, FAAC)
  Process.tsx     – "Hogyan dolgozunk?" 6 lépéses folyamat
  Testimonials.tsx– ügyfélvélemények csillagértékeléssel
  FAQ.tsx         – gyakori kérdések accordion
  Contact.tsx      – nagy CTA blokk, térkép, nyitvatartás, cím
  Footer.tsx      – lábléc
  StickyCTA.tsx   – mobilon rögzített "Hívjon most / WhatsApp" sáv
lib/
  data.ts         – az összes szerkeszthető szöveg és elérhetőség egy helyen
  schema.ts       – Schema.org LocalBusiness strukturált adat
```

## Design rendszer

- **Színek**: mélyfekete (`ink`), antracit felületek, jelzőnarancs CTA (`signal`),
  WhatsApp-zöld a másodlagos CTA-hoz.
- **Tipográfia**: Space Grotesk (display), Inter (törzsszöveg), JetBrains Mono
  (kis, ritkított "eyebrow" feliratok – műszaki, precíz karakter).
- **Signature motívum**: a "sín" (rail) elem – egy futósín-szerű elválasztó, rajta egy
  narancssárga "görgővel" –, amely a tolókapu sínjére utal, és a szekciók közötti
  elválasztóként, illetve a "Hogyan dolgozunk?" folyamatábra vizuális gerinceként jelenik meg.

## Teljesítmény és SEO

- `next/image` lusta betöltéssel és `sizes` attribútumokkal minden képnél.
- App Router automatikus statikus generálással (`next build` → statikus HTML).
- Schema.org `LocalBusiness` strukturált adat a helyi keresési találatokhoz.
- `robots.ts` és `sitemap.ts` a keresőmotorok számára.
- `prefers-reduced-motion` támogatás, látható fókusz-jelölés minden interaktív elemen.

## Deploy

A projekt bármely Next.js-t támogató szolgáltatóra telepíthető (pl. Vercel):

```bash
npm i -g vercel
vercel
```
