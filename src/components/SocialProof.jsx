import { IMAGES } from "../content";

export default function SocialProof() {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-black text-brand-navy mb-8">
          See What Drivers Are Saying
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {IMAGES.socialProof.map((src, i) => (
            <img
              key={src + i}
              src={src}
              alt={`Customer feedback ${i + 1}`}
              className="rounded-lg aspect-[3/4] object-cover bg-gray-200 w-full"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
