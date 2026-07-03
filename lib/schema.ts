export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.hermannautomatika.hu/#business",
  name: "Hermann Automatika",
  image: "https://www.hermannautomatika.hu/images/hero-tolokapu.jpg",
  description:
    "Motoros tolókapu és szárnyaskapu automatika, garázskapu motorok, kaputelefon telepítés és szakszerviz Győr-Moson-Sopron megyében.",
  url: "https://www.hermannautomatika.hu",
  telephone: "+36-70-000-0000",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Fő út 1.",
    addressLocality: "Bőny",
    addressRegion: "Győr-Moson-Sopron",
    postalCode: "9081",
    addressCountry: "HU",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 47.6167,
    longitude: 17.7167,
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Győr-Moson-Sopron megye",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "09:00",
      closes: "13:00",
    },
  ],
  sameAs: [
    "https://www.facebook.com/hermannautomatika",
    "https://wa.me/36700000000",
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
