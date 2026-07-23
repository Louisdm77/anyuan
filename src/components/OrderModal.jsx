import { useEffect, useMemo, useState } from "react";
import { BRAND, PRICING, STATES_CITIES, COLORS } from "../content";
import { useOrderModal } from "../context/OrderModalContext";

const initialForm = {
  fullName: "",
  phone: "",
  address: "",
  state: "",
  city: "",
  color: COLORS[0]?.id ?? "",
  packId: PRICING.tiers[0]?.id ?? "",
};

export default function OrderModal() {
  const { isOpen, closeModal } = useOrderModal();
  const [form, setForm] = useState(initialForm);

  const cities = useMemo(
    () => (form.state ? STATES_CITIES[form.state] ?? [] : []),
    [form.state]
  );
  const selectedTier = PRICING.tiers.find((t) => t.id === form.packId);
  const selectedColor = COLORS.find((c) => c.id === form.color);

  // Lock background scroll while the modal is open.
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value, ...(field === "state" ? { city: "" } : {}) }));
  }

  function handleSend(e) {
    e.preventDefault();

    if (!form.fullName || !form.phone || !form.address || !form.state || !form.city) {
      return;
    }

    const lines = [
      `New order from ${BRAND.name} website:`,
      `Name: ${form.fullName}`,
      `Phone: ${form.phone}`,
      `Address: ${form.address}`,
      `State: ${form.state}`,
      `City: ${form.city}`,
      `Color: ${selectedColor ? selectedColor.label : ""}`,
      `Pack: ${selectedTier ? selectedTier.label : ""} (${PRICING.currency}${
        selectedTier ? selectedTier.price : ""
      })`,
    ];

    const url = `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(
      lines.join("\n")
    )}`;

    window.open(url, "_blank", "noopener,noreferrer");
    setForm(initialForm);
    closeModal();
  }

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end md:items-center justify-center bg-black/50 px-4"
      onClick={closeModal}
    >
      <div
        className="bg-white rounded-t-2xl md:rounded-2xl w-full max-w-md max-h-[90vh] overflow-y-auto p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={closeModal}
          aria-label="Close"
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl leading-none"
        >
          ✕
        </button>

        <div className="flex items-center gap-2 mb-1">
          <span className="text-[#25D366]">
            <svg viewBox="0 0 32 32" className="w-6 h-6 fill-current">
              <path d="M16.001 3C9.373 3 4 8.373 4 15c0 2.386.696 4.61 1.898 6.484L4 29l7.7-1.868A11.94 11.94 0 0016.001 27C22.63 27 28 21.627 28 15S22.63 3 16.001 3zm0 21.75c-1.98 0-3.833-.55-5.414-1.505l-.388-.23-4.573 1.11 1.13-4.457-.253-.407A9.71 9.71 0 016.25 15c0-5.385 4.366-9.75 9.75-9.75S25.75 9.615 25.75 15 21.386 24.75 16 24.75zm5.34-7.29c-.293-.147-1.734-.856-2.003-.954-.269-.098-.464-.147-.66.147-.195.293-.756.954-.927 1.15-.171.196-.342.22-.635.073-.293-.147-1.237-.456-2.356-1.454-.87-.776-1.458-1.735-1.629-2.028-.171-.293-.018-.451.129-.598.132-.132.293-.342.44-.514.146-.171.195-.293.293-.489.098-.196.049-.367-.024-.514-.073-.147-.66-1.594-.905-2.183-.238-.573-.48-.495-.66-.504l-.562-.01c-.196 0-.514.073-.783.367-.269.293-1.026 1.003-1.026 2.445s1.051 2.837 1.198 3.033c.146.196 2.07 3.16 5.014 4.432.7.302 1.246.482 1.672.617.703.224 1.343.192 1.849.117.564-.084 1.734-.709 1.978-1.394.244-.685.244-1.271.171-1.394-.073-.122-.269-.196-.562-.343z" />
            </svg>
          </span>
          <h2 className="text-lg font-bold text-brand-navy">
            Order on WhatsApp
          </h2>
        </div>
        <p className="text-sm text-gray-500 mb-5">
          Fill in your details, then we'll open WhatsApp with your order ready
          to send.
        </p>

        <form onSubmit={handleSend} className="space-y-3">
          <Field label="Full Name *">
            <input
              required
              type="text"
              value={form.fullName}
              onChange={(e) => update("fullName", e.target.value)}
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
              value={form.address}
              onChange={(e) => update("address", e.target.value)}
              className="input"
            />
          </Field>

          <div className="grid grid-cols-2 gap-3">
            <Field label="State *">
              <select
                required
                value={form.state}
                onChange={(e) => update("state", e.target.value)}
                className="input"
              >
                <option value="">Select...</option>
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
                <option value="">Select...</option>
                {cities.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </Field>
          </div>

          <Field label="Color">
            <div className="flex gap-2 flex-wrap">
              {COLORS.map((c) => (
                <button
                  type="button"
                  key={c.id}
                  onClick={() => update("color", c.id)}
                  className={`w-8 h-8 rounded-full border-2 ${
                    form.color === c.id ? "border-brand-navy" : "border-gray-200"
                  }`}
                  style={{ backgroundColor: c.swatch }}
                  aria-label={c.label}
                  title={c.label}
                />
              ))}
            </div>
          </Field>

          <Field label="Pack">
            <select
              value={form.packId}
              onChange={(e) => update("packId", e.target.value)}
              className="input"
            >
              {PRICING.tiers.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.label} — {PRICING.currency}
                  {t.price}
                </option>
              ))}
            </select>
          </Field>

          <button
            type="submit"
            className="w-full bg-[#25D366] hover:bg-[#1ebe5b] text-white font-bold py-3 rounded-lg mt-2 flex items-center justify-center gap-2"
          >
            Send Order to WhatsApp
          </button>
        </form>
      </div>
    </div>
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
