import { TESTIMONIALS, IMAGES } from "../content";

export default function Testimonials() {
  return (
    <section className="bg-sky-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <p className="text-center uppercase tracking-widest text-xs font-bold text-brand-red mb-2">
          Testimonies From Nigerian Drivers
        </p>
        <h2 className="text-2xl md:text-3xl font-black text-brand-navy text-center mb-8">
          Real Roads. Real Rain. Real Results.
        </h2>

        <div className="space-y-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="bg-white rounded-xl shadow-md p-5">
              <img
                src={IMAGES[t.image]}
                alt={t.name}
                className="rounded-lg w-full aspect-[16/10] object-cover bg-gray-200 mb-4"
              />
              <h3 className="font-bold text-brand-navy mb-2 text-lg">{t.name}</h3>
              <p className="text-gray-700 leading-relaxed text-base">{t.body}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-base text-gray-600 mt-8 font-semibold">
          Three different drivers. Three different roads.{" "}
          <strong className="text-brand-navy">
            One result: clear visibility, every time it matters.
          </strong>
        </p>
      </div>
    </section>
  );
}
