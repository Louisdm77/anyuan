import { BRAND, IMAGES } from "../content";
import { WhatsAppInlineButton } from "./WhatsAppButton";

function RainStreaks() {
  // Decorative diagonal rain-streak background, tiled and animated.
  return (
    <div
      className="absolute inset-0 opacity-25 rain-layer pointer-events-none"
      style={{
        backgroundImage:
          "repeating-linear-gradient(70deg, rgba(255,255,255,0.9) 0px, rgba(255,255,255,0.9) 1px, transparent 1px, transparent 22px)",
        backgroundSize: "100% 200px",
      }}
    />
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Hazard-stripe alert ribbon */}
      <div className="hazard-stripe py-1.5">
        <p className="text-center text-white text-[11px] md:text-xs font-extrabold uppercase tracking-widest [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">
          🌧️ Rainy Season Alert · Your Side Mirror Is At Risk Every Time It Rains
        </p>
      </div>

      {/* Main hero */}
      <div className="relative bg-gradient-to-b from-sky-700 via-brand-navy to-sky-800 text-white pt-10 pb-12 px-4">
        <RainStreaks />

        <div className="relative max-w-3xl mx-auto text-center">
          <p className="text-blue-100 font-semibold text-sm md:text-base mb-2">
            🌧️ It's Raining Season In Nigeria Right Now
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black leading-[1.02] tracking-tight mb-5">
            Never Drive In The Rain With A{" "}
            <span className="bg-brand-red px-2 py-0.5 inline-block -rotate-1 rounded">
              Blurry Side Mirror
            </span>{" "}
            Again
          </h1>

          <h3 className="text-base md:text-2xl font-bold text-brand-gold leading-snug mb-8 max-w-xl mx-auto">
            One quick wipe clears the rain off your side mirror, and the fog
            off your windscreen, in seconds
          </h3>

          <div className="relative inline-block mb-6 w-full">
            <img
              src={IMAGES.heroProduct}
              alt={`${BRAND.name} clearing a rain-covered side mirror`}
              className="mx-auto rounded-2xl shadow-2xl w-full max-w-xl aspect-square object-cover ring-4 ring-white/10"
            />
            <div className="absolute -top-4 -right-2 md:-right-6 bg-brand-gold text-brand-navy font-black text-sm md:text-lg rounded-full w-20 h-20 md:w-28 md:h-28 flex flex-col items-center justify-center rotate-12 shadow-lg leading-tight">
              <span className="text-xl md:text-3xl">1</span>
              <span className="text-[9px] md:text-xs font-bold uppercase text-center px-1">
                Wipe & Clear
              </span>
            </div>
          </div>

          <p className="text-base md:text-lg text-blue-50 mb-7 max-w-lg mx-auto">
            <strong className="text-white">Every car owner needs one.</strong>{" "}
            It fits in your door pocket, costs almost nothing, and clears
            your rain-soaked mirror and foggy windscreen before either
            becomes a problem.
          </p>

          <a
            href="#order-form"
            className="cta-pulse inline-flex items-center gap-2 bg-brand-red hover:bg-red-600 text-white font-extrabold text-base md:text-lg px-8 py-4 rounded-xl mb-4 shadow-lg transition-transform hover:scale-105"
          >
            🌧️ Beat The Rain — Get Your Side Mirror Wiper Now
          </a>

          <div>
            <WhatsAppInlineButton />
          </div>
        </div>
      </div>
    </section>
  );
}
