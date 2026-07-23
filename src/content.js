// ─────────────────────────────────────────────────────────────
// ALL EDITABLE CONTENT LIVES HERE — swap text, prices, images,
// and contact details in this one file.
// ─────────────────────────────────────────────────────────────

export const BRAND = {
  name: "ClearView Pro",
  tagline: "Side Mirror Wiper | All-Weather Visibility | 1 Year Warranty",
  whatsapp: "2349065706641", // digits only, no + or spaces
  whatsappMessage: "Hi, I want to order the ClearView Pro Side Mirror Wiper",
};

// Real product photos, swapped in from the supplied images.
export const IMAGES = {
  heroProduct: "/product/hero-in-use.jpg",
  trustBanner: "/placeholders/trust-banner.jpg",
  lifestyle: "/product/in-use-hand.png",
  problemBefore: "/product/before-after.jpg",
  problemAfter: "/product/before-after-2.jpg",
  headCloseup: "/product/head-closeup.jpg",
  colorLineup: "/product/color-lineup.jpg",
  featureCallouts: "/product/feature-callouts.png",
  packageBox: "/product/package-box.png",
  easyClean: "/product/easy-clean.png",
  testimonial1: "/placeholders/testimonial-1.jpg",
  testimonial2: "/placeholders/testimonial-2.jpg",
  testimonial3: "/placeholders/testimonial-3.jpg",
  socialProof: [
    "/placeholders/social-1.jpg",
    "/placeholders/social-2.jpg",
    "/placeholders/social-3.jpg",
    "/placeholders/social-4.jpg",
  ],
  guaranteeBadge: "/placeholders/guarantee-badge.png",
  // Windscreen photos — swap these for real photos when ready.
  windscreenBefore: "/placeholders/windscreen-before.jpg",
  windscreenAfter: "/placeholders/windscreen-after.jpg",
  windscreenUse: "/placeholders/windscreen-use.jpg",
};

// Product comes in 5 colors — shown as a picker in the order form.
export const COLORS = [
  { id: "green", label: "Green", swatch: "#7fb069" },
  { id: "black", label: "Black", swatch: "#1f2328" },
  { id: "orange", label: "Orange", swatch: "#e8722c" },
  { id: "pink", label: "Pink", swatch: "#f2a6c1" },
  { id: "blue", label: "Blue", swatch: "#6f9bd1" },
];

// Placeholder video slot — replace `url` with the real hosted video
// (e.g. mp4 link or HyperFrames render_video output) when ready.
export const VIDEO = {
  url: "", // e.g. "https://cdn.example.com/clearview-demo.mp4"
  poster: "/placeholders/video-poster.jpg",
};

export const PRICING = {
  currency: "₦",
  wasPrice: "20,000",
  nowPrice: "15,000",
  tiers: [
    { id: "t1", label: "1 ClearView Pro (Free Delivery)", price: "15,000" },
    { id: "t2", label: "2 ClearView Pro — Best for Couples (Free Delivery)", price: "25,000" },
    { id: "t3", label: "3 ClearView Pro — Most Popular (Free Delivery)", price: "40,000" },
  ],
};

export const STATES_CITIES = {
  Lagos: ["Ikeja", "Lekki", "Surulere", "Yaba", "Ajah"],
  Abuja: ["Garki", "Wuse", "Maitama", "Gwarinpa"],
  Rivers: ["Port Harcourt", "Obio-Akpor"],
  Oyo: ["Ibadan", "Ogbomosho"],
  Kano: ["Kano Municipal", "Nassarawa"],
  // add more states/cities as needed
};

export const TESTIMONIALS = [
  {
    name: "Mr. Bankole's Story",
    body:
      "A logistics driver who spent years pulling over every time rain hit, just to wipe his side mirrors by hand with a wet sleeve. His brother-in-law introduced him to ClearView Pro after a near-miss on the expressway. Now he keeps it in the door pocket, extends it in seconds, and clears both mirrors before pulling off, even in the heaviest downpour on the Lagos-Ibadan expressway.",
    image: "testimonial1",
  },
  {
    name: "Mrs. Adaeze's Story",
    body:
      "A school run mum in Enugu who dreaded early morning harmattan mist fogging up her mirrors right when she needed to reverse out of a tight driveway. She keeps ClearView Pro clipped to her sun visor. One quick swipe of the telescopic squeegee and her mirror is clear on the very first try, every single morning.",
    image: "testimonial2",
  },
  {
    name: "Chief Okonkwo's Fleet",
    body:
      "Runs a small fleet of hire cars in Port Harcourt and was tired of drivers complaining about rainy-season visibility. He handed a ClearView Pro to each driver, one per glove box. He says driver complaints about mirror visibility dropped to zero the same month.",
    image: "testimonial3",
  },
];

export const FAQS = [
  {
    q: "WILL THIS WORK ON MY CAR?",
    a: "Yes. You hold it in your hand, it does not fix to your mirror. So it works on any car, big or small. It can stretch from a short size up to almost 1 metre, so it can reach both side mirrors easily.",
  },
  {
    q: "DOES IT NEED BATTERIES OR WIRING?",
    a: "No. It does not need batteries. It does not need any wiring. You just pull it out with your hand, wipe, and push it back in.",
  },
  {
    q: "WHAT IF IT DOESN'T WORK FOR ME?",
    a: "If you are not happy with it, we will give your money back. No long questions. No stress.",
  },
];

export const STOCK_COUNT_START = 20; // starting "stock remaining" shown to each visitor
export const COUNTDOWN_HOURS = 24; // evergreen countdown length per visitor
