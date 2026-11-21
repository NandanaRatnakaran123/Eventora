// Page copy and placeholders from the design mockup.
// Anything in [square brackets] is a placeholder to replace with real content.

const img = {
  sunsetVeil: "/main/olcayertem-love-6600903_1920.jpg",
  henna: "/main/nawalescape-henna-1370136_1920.jpg",
  bouquet: "/main/congerdesign-bridal-bouquet-3323903_1920.jpg",
  hall: "/main/kleinheinz-event-6927353_1920.jpg",
  beach: "/main/pexels-beach-1854076_1920.jpg",
  redRoses: "/main/pexels-bride-1850126_1920.jpg",
  sunflowers: "/main/pexels-wedding-1867318_1920.jpg",
  reception: "/main/pexels-wedding-reception-1284245_1920.jpg",
  mandap: "/main/u_zom4ht8ewr-wedding-10365245_1920.png",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Events", href: "/#events" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Contact", href: "/#contact" },
];

export const numbers = [
  { value: "500+", label: "Events celebrated" },
  { value: "10+", label: "Years of excellence" },
  { value: "400+", label: "Happy clients" },
  { value: "80+", label: "Trusted vendor partners" },
];

export const tickerItems = [
  "Weddings",
  "Décor",
  "Social soirées",
  "Corporate galas",
  "Destination",
  "Concept & design",
  "Hospitality",
];

export const aboutPhotos = [
  { src: img.sunsetVeil, alt: "Couple embracing under a veil at sunset" },
  { src: img.redRoses, alt: "Bride holding a bouquet of red roses" },
];

export const aboutStats = [
  { value: "10+", label: "Years" },
  { value: "500+", label: "Events" },
  { value: "12", label: "Cities" },
];

export const services = [
  {
    title: "Wedding planning",
    text: "End-to-end curation of your once-in-a-lifetime day.",
    src: img.mandap,
    alt: "Bride and groom under a floral mandap at sunset",
  },
  {
    title: "Corporate events",
    text: "Immersive brand experiences and gala evenings.",
    src: img.hall,
    alt: "Elegant banquet hall set for a large gathering",
  },
  {
    title: "Social events",
    text: "Birthdays, anniversaries and private soirées.",
    src: img.henna,
    alt: "Henna-decorated hands and marigold flowers at a celebration",
  },
  {
    title: "Luxury décor",
    text: "Floral installations and cinematic set design.",
    src: img.beach,
    alt: "Floral canopy and table styling on a beach",
  },
];

export const journey = [
  { title: "The first conversation", text: "We listen: your story, your guests and the feeling you want." },
  { title: "Concept & mood", text: "Mood boards, venues and a clear plan you can say yes to." },
  { title: "Design & detail", text: "Décor, lighting, menus and run-of-show, detailed to the inch." },
  { title: "Flawless execution", text: "Vendors, build and rehearsals handled by one point of contact." },
  { title: "You celebrate", text: "You enjoy the day. We run it, quietly, from the background." },
];

export const pillars = [
  {
    title: "Professional planning",
    text: "A dedicated planner and assistant, curated vendors and contracts, a master timeline, rehearsals and a team in command on the day.",
  },
  { title: "Creative ideas", text: "Every event begins as a concept and a look, never a checklist." },
  { title: "Premium execution", text: "Build, décor and production held to one standard, down to the last detail." },
  { title: "Memorable experiences", text: "Moments your guests talk about long after the lights come down." },
];

export const featuredEvents = [
  {
    src: img.sunflowers,
    alt: "Couple walking through a sunflower field",
    kind: "Wedding · Udaipur",
    title: "Aarav & Meera: Golden hour in the fields",
  },
  {
    src: img.hall,
    alt: "Banquet hall with long dining tables and floral centrepieces",
    kind: "Corporate · Mumbai",
    title: "Nexa Group annual gala",
  },
  {
    src: img.reception,
    alt: "Head table with roses and glassware at a private celebration",
    kind: "Social · Goa",
    title: "Kapoor 50th anniversary: An evening in roses",
  },
];

export const behindTheScenes = [
  { src: img.reception, label: "The planning table" },
  { src: img.bouquet, label: "Fresh from the market" },
  { src: img.beach, label: "The garden set-up" },
  { src: img.mandap, label: "The final reveal" },
];

export const signature = [
  { title: "Mandap", text: "Hand-built floral structures, designed around your story." },
  { title: "Table", text: "Linen, glassware and centrepieces styled as one scene." },
  { title: "Sound", text: "Music and moments timed so nothing is left to chance." },
  { title: "Light", text: "Layered lighting that turns a venue into a set." },
];

export const gallery = [
  { src: img.henna, label: "Mehendi artistry", tall: true },
  { src: img.redRoses, label: "The bridal bouquet" },
  { src: img.mandap, label: "Sacred vows" },
  { src: img.sunsetVeil, label: "Golden hour", tall: true },
  { src: img.sunflowers, label: "Among the sunflowers" },
  { src: img.hall, label: "The grand hall" },
];

export const testimonials = [
  // SAMPLE TESTIMONIALS (fictional) for design review only. Replace with real, consented client reviews before launch.
  {
    quote:
      "Our families flew in from three countries and everything still felt effortless. The mandap, the lighting, the timing: we never once had to ask.",
    name: "Ananya & Rohan Menon",
    kind: "Wedding",
  },
  {
    quote:
      "We handed Eventora our annual gala with a tight deadline and a long guest list. The run-of-show was precise and our leadership team kept asking who was behind it.",
    name: "Priya Nair",
    kind: "Corporate event",
  },
  {
    quote:
      "They planned my parents' 50th anniversary as a surprise and kept the secret perfectly. The décor looked like a film set.",
    name: "Arjun Varghese",
    kind: "Anniversary",
  },
];

export const instagramTiles = [img.bouquet, img.henna, img.beach, img.reception, img.redRoses, img.sunflowers];

export const eventTypes = [
  "Wedding",
  "Corporate event",
  "Social celebration",
  "Décor only",
] as const;

export const footerContact = [
  "12 Marine Lines, Mumbai 400020",
  "+91 98765 43210",
  "hello@eventora.example",
];
export const quickLinks = ["Services", "Gallery", "Events", "About", "Contact"];
export const socials = ["Instagram", "Facebook", "YouTube", "LinkedIn"];

// Set NEXT_PUBLIC_WHATSAPP_NUMBER (digits only, with country code) to enable the WhatsApp button.
export const whatsappUrl = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER
  ? `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent(
      "Hi Eventora, I'd like to plan an event.",
    )}`
  : null;
