import { IMAGES, COLORS } from "../content";

export default function FeaturesAndColors() {
  return (
    <section className="bg-sky-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-black text-brand-navy text-center mb-8">
          Built to Last, In a Color You'll Love
        </h2>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-white rounded-xl p-3 shadow-md">
            <img
              src={IMAGES.headCloseup}
              alt="Close-up of the soft silicone squeegee head"
              className="rounded-lg w-full aspect-square object-cover mb-3"
            />
            <p className="text-sm md:text-base text-gray-700 text-center font-bold">
              Soft head, no streaks left on your mirror
            </p>
          </div>
          <div className="bg-white rounded-xl p-3 shadow-md">
            <img
              src={IMAGES.easyClean}
              alt="Wiping the squeegee head clean with a paper towel"
              className="rounded-lg w-full aspect-square object-cover mb-3"
            />
            <p className="text-sm md:text-base text-gray-700 text-center font-bold">
              Easy to clean, just wipe with a paper towel
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 shadow-md text-center">
          <img
            src={IMAGES.colorLineup}
            alt="ClearView Pro available in green, black, orange, pink, and blue"
            className="rounded-lg w-full object-contain mb-4"
          />
          <p className="text-base md:text-lg text-gray-700 mb-3 font-bold">
            Pick your favourite, 5 colors available:
          </p>
          <div className="flex justify-center gap-3 flex-wrap">
            {COLORS.map((c) => (
              <div key={c.id} className="flex flex-col items-center gap-1">
                <span
                  className="w-9 h-9 rounded-full border border-gray-300"
                  style={{ backgroundColor: c.swatch }}
                />
                <span className="text-xs font-semibold text-gray-600">
                  {c.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
