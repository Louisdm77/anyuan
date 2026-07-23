import { IMAGES } from "../content";

export default function MultiUse() {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-black text-brand-navy text-center mb-2">
          Made For Your Side Mirror, In The Rain
        </h2>
        <p className="text-gray-600 text-center mb-8 text-base md:text-lg">
          <strong className="text-brand-navy">
            This is the main job it does best:
          </strong>{" "}
          keep your side mirror clear in the rain, so you can see danger
          before it reaches you.
        </p>

        <img
          src={IMAGES.lifestyle}
          alt="Hand using ClearView Pro to wipe a rainy side mirror"
          className="rounded-2xl w-full max-h-[420px] object-cover shadow-lg mb-4"
        />

        <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-8">
          <strong>Rain starts. Reach out. Wipe once. See clearly.</strong>{" "}
          That's it. No more guessing what's in your blind spot when it's
          raining. No more slowing down because you can't trust what you see
          in your mirror.
        </p>

        <div className="bg-sky-50 rounded-xl p-5 border border-sky-100">
          <div className="text-3xl mb-3">🏠</div>
          <h4 className="font-bold text-brand-navy mb-2">Glass At Home</h4>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            Rain leaves your windows and glass doors at home messy too. The
            same soft silicone head cleans them safely, no scratches, no
            streaks, indoors or outdoors.
          </p>
        </div>
      </div>
    </section>
  );
}
