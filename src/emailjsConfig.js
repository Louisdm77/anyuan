// ─────────────────────────────────────────────────────────────
// Paste your EmailJS keys here (from emailjs.com dashboard).
// Get them from: Account > API Keys / Email Services / Email Templates
// ─────────────────────────────────────────────────────────────
export const EMAILJS_CONFIG = {
  SERVICE_ID: "YOUR_SERVICE_ID", // e.g. "service_abc1234"
  TEMPLATE_ID: "YOUR_TEMPLATE_ID", // e.g. "template_xyz789"
  PUBLIC_KEY: "YOUR_PUBLIC_KEY", // e.g. "AbCdEfGhIjKlMnOp"
};

// Your EmailJS template should expect these variable names
// (match them in the EmailJS dashboard template editor):
//   {{full_name}}, {{email}}, {{phone}}, {{whatsapp}},
//   {{full_address}}, {{state}}, {{city}}, {{ready_in_3_days}},
//   {{pack_selected}}, {{pack_price}}, {{color}}
