export default function ComparisonSection() {
  const rows = [
    {
      title: "Manual wiping (hand, sleeve, cloth)",
      text: "Means winding down your window in the rain, taking one hand off the wheel, and hoping the road ahead stays predictable for those two seconds. Works for a moment. Fogs right back up.",
    },
    {
      title: "Rain-repellent sprays",
      text: "Coat the glass for a few days, then wash off in the very rain they're supposed to help with. You're re-applying constantly and still driving blind in between.",
    },
    {
      title: "Heated mirror defoggers",
      text: "Only fitted on higher trims of newer cars, draw power, and do nothing for mud, dust, or heavy splashback from the vehicle in front of you.",
    },
  ];

  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-black text-brand-navy text-center mb-8">
          Why Everything You've Tried Hasn't Solved This
        </h2>

        <div className="space-y-6">
          {rows.map((r) => (
            <div key={r.title} className="border-l-4 border-brand-gold pl-4">
              <h3 className="font-bold text-brand-navy mb-1">{r.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{r.text}</p>
            </div>
          ))}
        </div>

        <p className="text-gray-700 leading-relaxed mt-8">
          None of these were built to keep your mirror clear while you're actually
          driving, in real weather, at real speed. That gap is exactly where{" "}
          <strong>ClearView Pro</strong> works.
        </p>
      </div>
    </section>
  );
}
