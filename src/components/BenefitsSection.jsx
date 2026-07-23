import sidevid1 from "../assets/sidevid1.mp4";

const BENEFITS = [
  { lead: "See clearly", text: "in rain, mist, or dust, every single time you drive." },
  { lead: "No more wiping with a cloth", text: "clears your foggy windscreen without a wet sleeve or rag." },
  { lead: "Costs almost nothing", text: "compared to the cost of even one small accident." },
  { lead: "Always ready", text: "no charging, no wiring, just pull it out and use it." },
  { lead: "Works in seconds", text: "one wipe and your mirror or windscreen is clear again." },
  { lead: "Keeps your family safer", text: "every trip, every time it rains." },
];

export default function BenefitsSection() {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-black text-brand-navy text-center mb-2">
          Why Every Car Owner Needs This
        </h2>
        <p className="text-gray-600 text-center mb-8 text-base md:text-lg">
          <strong className="text-brand-navy">
            This small tool does a big job.
          </strong>
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          {BENEFITS.map((b) => (
            <div
              key={b.lead}
              className="flex items-start gap-3 bg-sky-50 rounded-xl p-4 border border-sky-100"
            >
              <span className="text-brand-red text-xl font-black leading-none mt-0.5">
                ✓
              </span>
              <p className="text-gray-800 text-sm md:text-base leading-relaxed">
                <strong className="text-brand-navy">{b.lead}</strong> {b.text}
              </p>
            </div>


          ))}
        </div>
        <video
          className="rounded-2xl w-full max-h-[380px] mt-6 object-cover shadow-lg mb-6"
          src={sidevid1}
          preload="metadata"
          controls
          muted
          loop
          playsInline
        >
          Your browser does not support the video tag.
        </video>

      </div>
    </section>
  );
}
