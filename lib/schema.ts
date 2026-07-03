export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.hermannautomatika.hu/#business",
  name: "Hermann Automatika",
  image: "https://www.hermannautomatika.hu/images/hero-tolokapu.jpg",
  description:
    "Motoros tolókapu és szárnyaskapu automatika, garázskapu motorok, kaputelefon telepítés és szakszerviz Győr-Moson-Sopron megyében.",
  url: "https://www.hermannautomatika.hu",
  telephone: "+36-20-366-7737",
  email: "hermann.m@t-online.hu",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Petőfi Sándor u. 104.",
    addressLocality: "Győrújbarát",
    addressRegion: "Győr-Moson-Sopron",
    postalCode: "9081",
    addressCountry: "HU",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 47.6489,
    longitude: 17.5511,
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Győr-Moson-Sopron megye",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  sameAs: [
    "https://www.facebook.com/hermannautomatika",
    "https://wa.me/36203667737",
  ],
  makesOffer: [
    "Tolókapu automatika",
    "Szárnyaskapu automatika",
    "Garázskapu motorok",
    "Kaputelefon rendszerek",
    "Javítás és karbantartás",
  ].map((name) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name },
  })),
};
