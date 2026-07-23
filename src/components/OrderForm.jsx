import { useMemo, useState } from "react";
import emailjs from "@emailjs/browser";
import { BRAND, PRICING, STATES_CITIES, COLORS } from "../content";
import { EMAILJS_CONFIG } from "../emailjsConfig";
import { WhatsAppInlineButton } from "./WhatsAppButton";

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  fullAddress: "",
  state: "",
  city: "",
  whatsapp: "",
  readyIn3Days: "",
  packId: PRICING.tiers[0]?.id ?? "",
  color: COLORS[0]?.id ?? "",
};

export default function OrderForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const cities = useMemo(
    () => (form.state ? STATES_CITIES[form.state] ?? [] : []),
    [form.state]
  );

  const selectedTier = PRICING.tiers.find((t) => t.id === form.packId);
  const selectedColor = COLORS.find((c) => c.id === form.color);

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value, ...(field === "state" ? { city: "" } : {}) }));
  }

  function buildWhatsAppOrderLink() {
    const lines = [
      `New order from ${BRAND.name} website:`,
      `Name: ${form.fullName}`,
      `Phone: ${form.phone}`,
      `Address: ${form.fullAddress}`,
      `State: ${form.state}`,
      `City: ${form.city}`,
      `Pack: ${selectedTier ? selectedTier.label : ""} (${PRICING.currency}${selectedTier ? selectedTier.price : ""})`,
      `Color: ${selectedColor ? selectedColor.label : ""}`,
    ];
    return `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!form.fullName || !form.phone || !form.fullAddress || !form.state || !form.city) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          full_name: form.fullName,
          email: form.email,
          phone: form.phone,
          whatsapp: form.whatsapp,
          full_address: form.fullAddress,
          state: form.state,
          city: form.city,
          ready_in_3_days: form.readyIn3Days,
          pack_selected: selectedTier?.label ?? "",
          pack_price: selectedTier?.price ?? "",
          color: selectedColor?.label ?? "",
        },
        { publicKey: EMAILJS_CONFIG.PUBLIC_KEY }
      );
      setStatus("success");
    } catch (err) {
      console.error("EmailJS send failed:", err);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <section id="order-form" className="bg-white py-14 px-4">
        <div className="max-w-md mx-auto text-center">
          <div className="text-5xl mb-4">✓</div>
          <h2 className="text-xl font-bold text-brand-navy mb-2">
            Thanks for your order!
          </h2>
          <p className="text-gray-600">
            Our team will contact you shortly on {form.phone || "your phone number"}{" "}
            to confirm your details and arrange delivery.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="order-form" className="bg-white py-14 px-4">
      <div className="max-w-md mx-auto">
        <h2 className="text-xl md:text-2xl font-bold text-brand-navy text-center mb-2">
          Fill The Form Below To Place Your Order
        </h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Please make sure you're ready to receive your package and pay on
          delivery.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Field label="Full Name *">
            <input
              required
              type="text"
              value={form.fullName}
              onChange={(e) => update("fullName", e.target.value)}
              className="input"
            />
          </Field>

          <Field label="Email">
            <input
              type="email"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              className="input"
            />
          </Field>

          <Field label="Phone Number *">
            <input
              required
              type="tel"
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
              className="input"
            />
          </Field>

          <Field label="Full Address *">
            <textarea
              required
              rows={2}
              value={form.fullAddress}
              onChange={(e) => update("fullAddress", e.target.value)}
              className="input"
            />
          </Field>

          <Field label="State *">
            <select
              required
              value={form.state}
              onChange={(e) => update("state", e.target.value)}
              className="input"
            >
              <option value="">Select state...</option>
              {Object.keys(STATES_CITIES).map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </Field>

          <Field label="City *">
            <select
              required
              value={form.city}
              onChange={(e) => update("city", e.target.value)}
              className="input"
              disabled={!form.state}
            >
              <option value="">Select city...</option>
              {cities.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </Field>

          <Field label="WhatsApp Number">
            <input
              type="tel"
              value={form.whatsapp}
              onChange={(e) => update("whatsapp", e.target.value)}
              className="input"
            />
          </Field>

          <Field label="Are you ready to receive the product within 3 days?">
            <select
              value={form.readyIn3Days}
              onChange={(e) => update("readyIn3Days", e.target.value)}
              className="input"
            >
              <option value="">Select...</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </Field>

          <Field label="Select Your Color">
            <div className="flex gap-3 flex-wrap">
              {COLORS.map((c) => (
                <button
                  type="button"
                  key={c.id}
                  onClick={() => update("color", c.id)}
                  className={`flex flex-col items-center gap-1 ${
                    form.color === c.id ? "opacity-100" : "opacity-60"
                  }`}
                >
                  <span
                    className="w-9 h-9 rounded-full border-2"
                    style={{
                      backgroundColor: c.swatch,
                      borderColor: form.color === c.id ? "#101820" : "#d1d5db",
                    }}
                  />
                  <span className="text-xs text-gray-600">{c.label}</span>
                </button>
              ))}
            </div>
          </Field>

          <Field label="Select Your Pack">
            <div className="space-y-2">
              {PRICING.tiers.map((t) => (
                <label
                  key={t.id}
                  className={`flex items-center justify-between border rounded-lg px-3 py-2 cursor-pointer text-sm ${
                    form.packId === t.id
                      ? "border-brand-navy bg-gray-50"
                      : "border-gray-200"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="pack"
                      checked={form.packId === t.id}
                      onChange={() => update("packId", t.id)}
                    />
                    {t.label}
                  </span>
                  <span className="font-semibold">
                    {PRICING.currency}
                    {t.price}
                  </span>
                </label>
              ))}
            </div>
          </Field>

          {status === "error" && (
            <p className="text-sm text-red-600">
              Please fill all required fields and try again, or order directly
              on WhatsApp below.
            </p>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full bg-brand-red hover:bg-red-700 disabled:opacity-60 text-white font-bold py-3 rounded-lg transition-colors"
          >
            {status === "sending" ? "Placing your order..." : "Place My Order"}
          </button>
        </form>

        <div className="text-center mt-6">
          <p className="text-sm text-gray-500 mb-2">Prefer WhatsApp?</p>
          <a
            href={buildWhatsAppOrderLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5b] text-white font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Order With Your Details on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </span>
      {children}
    </label>
  );
}
