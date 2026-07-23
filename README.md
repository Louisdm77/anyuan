# ClearView Pro — Landing Page

Vite + React + Tailwind CSS sales page, modeled on the veritol/solutionsh.shop
funnel structure, adapted for a side mirror wiper product.

## Setup

```bash
npm install
npm run dev
```

## Before going live, edit these files

1. **`src/content.js`** — brand name, WhatsApp number, all copy, testimonials,
   FAQ, pricing tiers, states/cities for the order form, stock counter start,
   countdown length.

2. **`src/emailjsConfig.js`** — paste your EmailJS `SERVICE_ID`, `TEMPLATE_ID`,
   and `PUBLIC_KEY`. Your EmailJS template should use these variables:
   `full_name`, `email`, `phone`, `whatsapp`, `full_address`, `state`, `city`,
   `ready_in_3_days`, `pack_selected`, `pack_price`.

3. **`public/placeholders/`** — replace every placeholder image with real
   product photos (same filenames, or update the paths in `content.js`).

4. **`src/content.js` → `VIDEO.url`** — once you have a hosted product demo
   video (e.g. from HyperFrames or elsewhere), paste its URL here and the
   video player in the "See ClearView Pro In Action" section goes live
   automatically.

5. **Pricing** — all values in `PRICING` in `content.js` are set to
   `"PLACEHOLDER"`. Replace with real Naira amounts.

6. **States/cities** — `STATES_CITIES` in `content.js` only has a handful of
   sample states. Add the full list you want to support.

## Order flow

- Primary: the form at the bottom submits via EmailJS to your inbox.
- Secondary: a WhatsApp button (floating + inline + form fallback) opens a
  pre-filled chat to +234 906 570 6641 with the order details.

## Build for production

```bash
npm run build
```

Outputs static files to `dist/` — deploy anywhere that serves static sites
(Netlify, Vercel, GitHub Pages, etc).
