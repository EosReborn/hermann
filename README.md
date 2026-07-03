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
   találati pontosságért. A térkép csak a süti-hozzájárulás elfogadása után
   töltődik be – lásd a "Cookie-kezelés" szakaszt lentebb.
4. **Facebook link** – `lib/data.ts` → `CONTACT.facebookHref` egyelőre placeholder,
   írd át a cég valódi Facebook-oldalára.
5. ✅ **Fotók** – a hero szekcióban, a galéria első 5 helyén, valamint a "Tolókapu" és
   "Szárnyaskapu" szolgáltatáskártyán már valós, feltöltött munkafotók szerepelnek
   (`public/images/gate-01.jpg` – `gate-05.jpg`). A galéria maradék 7 képe és a
   "Garázskapu", "Kaputelefon", "Szerviz" kártyák egyelőre helyőrző (Unsplash) képek –
   cseréld le őket további saját fotókra, ahogy gyűlnek (`lib/data.ts` →
   `SERVICES`, `GALLERY_IMAGES`).
6. **Schema.org adatok** – `lib/schema.ts`: cégnév, cím, GPS-koordináták, nyitvatartás,
   telefonszám, e-mail. Ez adja a Google-nek a helyi keresési (Local SEO) információkat.
7. **Domain** – `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts` és `lib/schema.ts` fájlokban
   cseréld le a `https://www.hermannautomatika.hu` placeholder domaint a valós domainre.
8. ✅ **Vélemények** – a `TESTIMONIALS` már a két valós, hitelesített ügyfélvéleményt
   tartalmazza. **GYIK / csapat szövegek** – `lib/data.ts` → `FAQ`, `WHY_US`,
   `PROCESS`. Ezeket érdemes valós céges részletekre pontosítani.
9. ⚠️ **Impresszum adatai** – az `/impresszum` oldalon két mező placeholder
   (`[töltendő]` jelöléssel): a nyilvántartási szám / adószám, és a
   tárhelyszolgáltató adatai. Ezeket a `app/impresszum/page.tsx` fájlban, éles
   közzététel előtt mindenképp töltsd ki a tényleges adatokkal – jogszabályi
   kötelezettség.

## Logó

A feltöltött logó két kivágott, webre optimalizált változatban került be:

- `public/images/logo-mark.jpg` – csak az ikon (kapu-H jel), ezt használja a fejléc
  és a lábléc kis négyzetes jelvénye.
- `public/images/logo-full.jpg` – a teljes logó (ikon + felirat), tartalék, ha
  később nagyobb méretben is szükség lenne rá (pl. egy külön "Rólunk" oldalon).
- `app/icon.png` – ebből készült a böngésző-fül ikon (favicon), a Next.js
  automatikusan felismeri.

A jelvény háttere feketére van állítva a header/footer kis dobozában, hogy a
logó eredeti sötét háttere láthatatlanul illeszkedjen bele.

## Cookie-kezelés

A `lib/cookie-consent-context.tsx` egy egyszerű, saját React context-alapú
hozzájárulás-kezelőt ad, ami a döntést (elfogad / elutasít) a böngésző
`localStorage`-jában jegyzi meg:

- Első látogatáskor megjelenik a `components/CookieConsent.tsx` sáv.
- Amíg nincs elfogadva, a Kapcsolat szekció Google Térkép beágyazása nem
  töltődik be – helyette egy gomb kéri a hozzájárulást.
- A lábléc "Cookie-beállítások" linkje (`components/CookieSettingsButton.tsx`)
  bármikor újranyitja a sávot, ha a látogató meggondolja magát.

A tájékoztató szövege az `/adatvedelem` oldalon (`app/adatvedelem/page.tsx`)
szerkeszthető.

## Szerkezet

```
app/
  layout.tsx        – fejléc metaadatok, fontok, Schema.org JSON-LD, cookie provider
  page.tsx          – az összes szekció összefűzése (főoldal)
  adatvedelem/       – Adatvédelmi tájékoztató oldal
  impresszum/        – Impresszum oldal
  icon.png           – favicon (a logóból generálva)
  globals.css        – design tokenek, glassmorphism, "rail" motívum, reduced-motion
  robots.ts          – robots.txt generálás
  sitemap.ts         – sitemap.xml generálás
components/
  Header.tsx           – navigáció, mobil menü, logó, glass háttér görgetéskor
  Hero.tsx             – nyitóképernyő nagy háttérképpel és hívás CTA-val
  Services.tsx         – 5 szolgáltatás kártyás elrendezésben
  Gallery.tsx          – masonry referencia-galéria lightboxszal (min. 12 kép)
  WhyUs.tsx            – "Miért minket válasszon?" ikonos blokk
  Brands.tsx           – logófal (Beninca, Motorline, Sommer, Nice, BFT, FAAC)
  Process.tsx          – "Hogyan dolgozunk?" 6 lépéses folyamat
  Testimonials.tsx     – ügyfélvélemények csillagértékeléssel
  FAQ.tsx              – gyakori kérdések accordion
  Contact.tsx          – nagy CTA blokk, süti-függő térkép, nyitvatartás, cím
  Footer.tsx           – lábléc (logó, jogi linkek, cookie-beállítások)
  StickyCTA.tsx        – mobilon rögzített "Hívjon most" sáv
  CookieConsent.tsx    – süti-hozzájárulási sáv
  CookieSettingsButton.tsx – a lábléc "Cookie-beállítások" gombja
lib/
  data.ts            – az összes szerkeszthető szöveg és elérhetőség egy helyen
  schema.ts          – Schema.org LocalBusiness strukturált adat
  cookie-consent-context.tsx – a süti-hozzájárulás állapotkezelője
```

## Design rendszer

- **Színek**: mélyfekete (`ink`), antracit felületek, jelzőnarancs CTA (`signal`).
- **Tipográfia**: Space Grotesk (display), Inter (törzsszöveg), JetBrains Mono
  (kis, ritkított "eyebrow" feliratok – műszaki, precíz karakter).
- **Signature motívum**: a "sín" (rail) elem – egy futósín-szerű elválasztó, rajta egy
  narancssárga "görgővel" –, amely a tolókapu sínjére utal, és a szekciók közötti
  elválasztóként, illetve a "Hogyan dolgozunk?" folyamatábra vizuális gerinceként jelenik meg.

## Teljesítmény és SEO

- `next/image` lusta betöltéssel és `sizes` attribútumokkal minden képnél.
- App Router automatikus statikus generálással (`next build` → statikus HTML).
- Schema.org `LocalBusiness` strukturált adat a helyi keresési találatokhoz.
- `robots.ts` és `sitemap.ts` a keresőmotorok számára (az `/adatvedelem` és
  `/impresszum` oldalakat is tartalmazza).
- `prefers-reduced-motion` támogatás, látható fókusz-jelölés minden interaktív elemen.

## Deploy

A projekt bármely Next.js-t támogató szolgáltatóra telepíthető (pl. Vercel):

```bash
npm i -g vercel
vercel
```
