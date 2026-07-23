import { FAQS } from "../content";
import { WhatsAppInlineButton } from "./WhatsAppButton";

export function VisionSection() {
  return (
    <section className="bg-brand-navy text-white py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-black text-center mb-6">
          Your Next Rainy Drive
        </h2>
        <p className="text-gray-200 leading-relaxed mb-4">
          It starts to rain. You get in your car. You look at your side
          mirror before you drive, and it is clear. No stress, no guessing.
        </p>
        <p className="text-gray-200 leading-relaxed mb-4">
          You drive on the express way and you can see well. You reverse out
          of a tight parking spot without straining your eyes. You stop
          worrying about your mirrors, because they just work.
        </p>
        <p className="text-gray-200 leading-relaxed mb-8">
          This is not a dream. This is what happens for drivers who already
          use ClearView Pro this rainy season.
        </p>
        <div className="text-center">
          <WhatsAppInlineButton />
        </div>
      </div>
    </section>
  );
}

export function FaqSection() {
  return (
    <section className="bg-sky-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-black text-brand-navy text-center mb-8">
          Common Questions
        </h2>
        <div className="space-y-6">
          {FAQS.map((f) => (
            <div key={f.q}>
              <h3 className="font-bold text-brand-navy mb-1">{f.q}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
