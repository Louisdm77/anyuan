import { IMAGES } from "../content";

export default function ProblemSection() {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-black text-brand-navy mb-4 text-center">
          It's Not Your Driving. It's The Rain On Your Side Mirror.
        </h2>

        <p className="text-gray-700 leading-relaxed mb-4 text-base md:text-lg">
          You check your mirror well. You signal. You look twice before you
          change lanes. But the moment{" "}
          <strong className="text-brand-navy">rain</strong> covers your{" "}
          <strong className="text-brand-navy">side mirror</strong>, you are
          only seeing a blur. <strong>You think you checked, but you did not
          really see anything.</strong>
        </p>

        <p className="text-gray-700 leading-relaxed mb-6 text-base md:text-lg">
          <strong>Here is the truth:</strong> your side mirror cannot clean
          itself. When it rains hard, your mirror gets dirty in minutes. This
          can happen before you even leave your house.
        </p>

        <div className="grid grid-cols-2 gap-4 mb-2">
          <div>
            <img
              src={IMAGES.problemBefore}
              alt="Side mirror covered in water droplets after rain"
              className="rounded-xl w-full aspect-square object-cover shadow-md"
            />
            <p className="text-center text-sm font-bold text-gray-500 mt-2">
              BEFORE — mirror is blurry
            </p>
          </div>
          <div>
            <img
              src={IMAGES.problemAfter}
              alt="Clear side mirror after using ClearView Pro"
              className="rounded-xl w-full aspect-square object-cover shadow-md ring-2 ring-brand-gold"
            />
            <p className="text-center text-sm font-bold text-brand-navy mt-2">
              AFTER — one wipe, clear view
            </p>
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed mt-6 mb-4 text-base md:text-lg">
          This is not a small problem.{" "}
          <strong className="text-brand-red">
            A dirty side mirror can cause accidents.
          </strong>{" "}
          Your mirror is there to protect you. But if you cannot see through
          it, it cannot help you.
        </p>

        <p className="text-gray-700 leading-relaxed text-base md:text-lg">
          <strong>
            That is why every car owner needs{" "}
            <span className="text-brand-navy font-black">ClearView Pro</span>{" "}
            in their car.
          </strong>
        </p>
      </div>
    </section>
  );
}
