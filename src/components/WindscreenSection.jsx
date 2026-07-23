import { IMAGES } from "../content";

export default function WindscreenSection() {
  return (
    <section className="bg-sky-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-black text-brand-navy mb-4 text-center">
          Foggy Windscreen? One Wipe Fixes That Too.
        </h2>

        <p className="text-gray-700 leading-relaxed mb-4 text-base md:text-lg">
          When rain starts, the inside of your windscreen fogs up fast. You
          can barely see the road ahead.{" "}
          <strong className="text-brand-navy">
            Most people grab a cloth, a rag, or their own sleeve to wipe it.
          </strong>{" "}
          It's uncomfortable, it smears the glass, your hand gets wet, and a
          few minutes later it's foggy again.
        </p>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <img
              src={IMAGES.windscreenBefore}
              alt="Foggy windscreen from inside the car"
              className="rounded-xl w-full aspect-square object-cover shadow-md"
            />
            <p className="text-center text-sm font-bold text-gray-500 mt-2">
              BEFORE — foggy, hard to see
            </p>
          </div>
          <div>
            <img
              src={IMAGES.windscreenAfter}
              alt="Clear windscreen after wiping with ClearView Pro"
              className="rounded-xl w-full aspect-square object-cover shadow-md ring-2 ring-brand-gold"
            />
            <p className="text-center text-sm font-bold text-brand-navy mt-2">
              AFTER — clear in one wipe
            </p>
          </div>
        </div>

        <img
          src={IMAGES.windscreenUse}
          alt="Wiping the inside of a windscreen with ClearView Pro"
          className="rounded-2xl w-full max-h-[380px] object-cover shadow-lg mb-6"
        />

        <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-2">
          <strong className="text-brand-navy">
            With ClearView Pro, you don't need a cloth.
          </strong>{" "}
          Pull it out, wipe the inside of your windscreen once, and see
          clearly again. No wet sleeve, no smearing, no stopping every few
          minutes to wipe it again.
        </p>

        <p className="text-sm text-gray-500 italic">
          For your safety, only wipe your windscreen while your car is parked
          or fully stopped, not while driving.
        </p>
      </div>
    </section>
  );
}
