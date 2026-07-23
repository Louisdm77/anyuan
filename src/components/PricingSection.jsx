import { useEffect, useState } from "react";
import { PRICING, STOCK_COUNT_START, IMAGES } from "../content";
import CountdownTimer from "./CountdownTimer";

export default function PricingSection() {
  // Evergreen "stock remaining" ticker — starts the same for each
  // visitor and ticks down slowly to feel live, without persisting.
  const [stock, setStock] = useState(STOCK_COUNT_START);

  useEffect(() => {
    const id = setInterval(() => {
      setStock((s) => (s > 6 ? s - 1 : s));
    }, 45000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="bg-brand-navy text-white py-12 px-4" id="pricing">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-black mb-2">
          Special Price — Today Only
        </h2>
        <p className="text-gray-300 mb-6 text-base">
          This price is only guaranteed for the next:
        </p>

        <CountdownTimer className="mb-8" />

        <img
          src={IMAGES.packageBox}
          alt="ClearView Pro package box"
          className="mx-auto rounded-xl w-full max-w-md object-contain bg-white p-4 mb-6 shadow-xl"
        />

        <p className="text-gray-300 mb-1 text-base">
          Normal Price:{" "}
          <span className="line-through">
            {PRICING.currency}
            {PRICING.wasPrice}
          </span>
        </p>
        <p className="text-4xl md:text-5xl font-black text-brand-gold mb-6">
          {PRICING.currency}
          {PRICING.nowPrice} only
        </p>

        <div className="bg-brand-red/90 rounded-xl py-3 px-4 mb-8 inline-block">
          <p className="text-sm md:text-base font-black">
            ⚠️ Only {stock} units left in stock — once it's gone, it's gone
          </p>
        </div>

        <div>
          <a
            href="#order-form"
            className="inline-block bg-brand-red hover:bg-red-600 text-white font-black text-lg px-8 py-4 rounded-xl shadow-lg transition-transform hover:scale-105"
          >
            Claim My Discount Now
          </a>
        </div>
      </div>
    </section>
  );
}
