export const CONTACT = {
  phoneDisplay: "06 20 366 7737",
  phoneHref: "tel:+36203667737",
  email: "hermann.m@t-online.hu",
  facebookHref: "https://www.facebook.com/hermannautomatika",
  address: "9081 Győrújbarát, Petőfi Sándor u. 104",
  mapEmbedSrc:
    "https://www.google.com/maps?q=" +
    encodeURIComponent("Hermann Automatika, 9081 Győrújbarát, Petőfi Sándor u. 104") +
    "&output=embed",
  hours: [
    { day: "Hétfő – Péntek", time: "9:00 – 17:00" },
    { day: "Szombat", time: "Telefonos egyeztetés alapján" },
    { day: "Vasárnap", time: "Zárva" },
  ],
};


export type Service = {
  id: string;
  title: string;
  description: string;
  image: string;
};

export const SERVICES: Service[] = [
  {
    id: "tolokapu",
    title: "Tolókapu automatika",
    description:
      "Csendes, egyenletes futású motoros tolókapu-rendszerek, akár beton, akár térköves aljzatra tervezve, hosszú távú megbízhatósággal.",
    image: "/images/gate-05.jpg",
  },
  {
    id: "szarnyaskapu",
    title: "Szárnyaskapu automatika",
    description:
      "Rejtett vagy föld feletti motorokkal szerelt szárnyaskapu-megoldások, egy- és kétszárnyú kivitelben, kertkapuhoz és beállóhoz egyaránt.",
    image: "/images/gate-04.jpg",
  },
  {
    id: "garazskapu",
    title: "Garázskapu motorok",
    description:
      "Szekcionált és billenő garázskapukhoz illesztett motorok, halk működéssel és vészhelyzeti kézi kioldással minden telepítésnél.",
    image: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "kaputelefon",
    title: "Kaputelefon rendszerek",
    description:
      "Audio és video kaputelefonok, mobiltelefonra továbbított hívással, több lakásos társasházaktól a családi házakig.",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "szerviz",
    title: "Javítás és karbantartás",
    description:
      "Gyors kiszállású szakszerviz meghibásodott motorokhoz, vezérlésekhez és távirányítókhoz, márkától függetlenül.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1200&auto=format&fit=crop",
  },
];

export const WHY_US = [
  { title: "Több éves szakmai tapasztalat", description: "Minden telepítés mögött kipróbált, terepen bevált gyakorlat áll." },
  { title: "Minőségi motorok", description: "Kizárólag európai gyártók automatikáival dolgozunk, garanciával." },
  { title: "Gyors kivitelezés", description: "A felméréstől a beüzemelésig rövid, kiszámítható átfutási idő." },
  { title: "Garancia", description: "Írásos garanciát vállalunk minden beépített alkatrészre és munkára." },
  { title: "Szakszerviz", description: "A telepítés után is elérhetőek maradunk, gyors hibaelhárítással." },
  { title: "Megbízható ügyintézés", description: "Világos árazás, pontos időpontok, végig átlátható folyamat." },
];

export const BRANDS = ["Beninca", "Motorline", "Sommer", "Nice", "BFT", "FAAC"];

export const PROCESS = [
  { title: "Kapcsolatfelvétel", description: "Hívjon minket – felmérjük az igényeit telefonon." },
  { title: "Helyszíni felmérés", description: "Megnézzük a kaput, a beállót és a rendelkezésre álló áramforrást." },
  { title: "Személyre szabott megoldás", description: "Javaslatot adunk a kapu típusához és a költségkerethez illő motorra." },
  { title: "Telepítés", description: "Szakszerű, tiszta munkavégzés, egyeztetett időpontban." },
  { title: "Beüzemelés", description: "Beállítjuk az erőt, a végállásokat és a biztonsági funkciókat." },
  { title: "Szerviz", description: "Igény szerint karbantartjuk és javítjuk a rendszert a jövőben is." },
];

export type Testimonial = {
  name: string;
  meta: string;
  quote: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "N. Zsolt",
    meta: "Hitelesített vélemény · 6 hónapja",
    quote:
      "Nagyon elégedett vagyok: végig pontosak és rugalmasak voltak. A pontosság miatt nem volt csúszás, és a rugalmasságuk nagyon megkönnyítette az egyeztetéseket.",
  },
  {
    name: "K. Tamás",
    meta: "Hitelesített vélemény · 1 éve",
    quote: "Gyors volt, precízen dolgozott.",
  },
];

export type FaqItem = { question: string; answer: string };

export const FAQ: FaqItem[] = [
  {
    question: "Mennyi idő alatt készül el egy kapuautomatika telepítése?",
    answer:
      "A legtöbb tolókapu vagy szárnyaskapu automatika egy nap alatt beépíthető és beüzemelhető, a helyszíni felmérés után egyeztetett időpontban.",
  },
  {
    question: "Milyen garanciát vállalnak a beépített motorokra?",
    answer:
      "Minden telepített motorra és vezérlésre írásos garanciát adunk, a gyártói garanciafeltételeknek megfelelően, munkadíjra pedig saját garanciát vállalunk.",
  },
  {
    question: "Meglévő kapuhoz is telepíthető automatika?",
    answer:
      "Igen, a legtöbb esetben a meglévő tolókapu vagy szárnyaskapu utólag is motorizálható, ha a szerkezet állapota és geometriája megfelelő – ezt a helyszíni felmérésen ellenőrizzük.",
  },
  {
    question: "Áramszünet esetén hogyan nyitható a kapu?",
    answer:
      "Minden általunk telepített motor rendelkezik kézi kioldással, így áramszünet esetén is egyszerűen, kulccsal vagy karral nyitható a kapu.",
  },
  {
    question: "Milyen márkájú motorokkal dolgoznak?",
    answer:
      "Beninca, Motorline, Sommer, Nice, BFT és FAAC automatikákkal dolgozunk, a kapu méretéhez és a napi használat gyakoriságához illesztve a megfelelő modellt.",
  },
  {
    question: "Mennyibe kerül egy kapuautomatika kiépítése?",
    answer:
      "Az ár a kapu típusától, méretétől és a választott kiegészítőktől (távirányító, kaputelefon, biztonsági fotocella) függ. Pontos árajánlatot a helyszíni felmérés után adunk, telefonon.",
  },
  {
    question: "Vállalnak javítást más cég által telepített motorokon is?",
    answer:
      "Igen, márkától függetlenül vállalunk hibaelhárítást és karbantartást már meglévő, más által telepített kapuautomatikákon is.",
  },
  {
    question: "Milyen gyorsan tudnak kiszállni meghibásodás esetén?",
    answer:
      "Győr-Moson-Sopron megyén belül jellemzően 1–2 munkanapon belül helyszíni szervizt vállalunk, sürgős esetben telefonos egyeztetés alapján hamarabb is.",
  },
];

export const GALLERY_IMAGES = [
  "/images/gate-01.jpg",
  "/images/gate-02.jpg",
  "/images/gate-03.jpg",
  "/images/gate-04.jpg",
  "/images/gate-05.jpg",
  "https://images.unsplash.com/photo-1600607687644-c7171b42498b?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1000&auto=format&fit=crop",
];
