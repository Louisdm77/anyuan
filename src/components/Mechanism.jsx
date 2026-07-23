import { IMAGES } from "../content";
import { WhatsAppInlineButton } from "./WhatsAppButton";

const STEPS = [
  {
    n: "1",
    title: "PULL IT OUT",
    text: "Pull the handle to make it longer. It reaches almost 1 metre, so it gets to your side mirror easily.",
  },
  {
    n: "2",
    title: "WIPE YOUR MIRROR",
    text: "Press the soft rubber head on your side mirror. Wipe one time. The rain, mist, or dust comes off instantly.",
  },
  {
    n: "3",
    title: "PUSH IT BACK",
    text: "Push the handle down to make it short again. Keep it in your door pocket, ready for next time.",
  },
];

export default function Mechanism() {
  return (
    <section className="bg-brand-navy text-white py-12 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-black mb-2">
          How To Clear Your{" "}
          <span className="text-brand-gold">Side Mirror</span>
        </h2>
        <p className="text-gray-300 mb-8 text-base md:text-lg">
          <strong className="text-white">It's very easy.</strong> Just 3
          simple steps.
        </p>

        <img
          src={IMAGES.featureCallouts}
          alt="ClearView Pro parts: rubber wiper head, metal pole, soft handle, safety strap"
          className="rounded-xl w-full max-w-2xl mx-auto object-contain bg-white mb-8 shadow-xl"
        />

        <div className="grid gap-6 md:grid-cols-3 text-left mb-8">
          {STEPS.map((s) => (
            <div key={s.n} className="bg-white/5 rounded-lg p-4">
              <div className="text-brand-gold font-extrabold text-2xl mb-2">
                {s.n}. {s.title}
              </div>
              <p className="text-gray-200 text-sm leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>

        <WhatsAppInlineButton />
      </div>
    </section>
  );
}
