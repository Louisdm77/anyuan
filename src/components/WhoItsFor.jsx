const AUDIENCES = [
  {
    title: "Everyday Drivers",
    text: "Rain does not stop your journey. A clear mirror helps you change lanes and reverse safely, every time you drive.",
  },
  {
    title: "Transport & Commercial Drivers",
    text: "Danfo, taxi, dispatch, ride-hailing, you spend more hours on the road than most people. More hours in the rain means more risk. This keeps you and your passengers safer.",
  },
  {
    title: "Families",
    text: "Your kids, your parents, your spouse, whoever is with you in the car. Clear mirrors mean one less risk for the people you care about.",
  },
];

export default function WhoItsFor() {
  return (
    <section className="bg-brand-navy text-white py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-black text-center mb-8">
          Made For Everyone Who Drives
        </h2>

        <div className="space-y-5">
          {AUDIENCES.map((a) => (
            <div key={a.title} className="bg-white/5 rounded-xl p-5">
              <h3 className="font-bold text-brand-gold mb-2">{a.title}</h3>
              <p className="text-sm text-blue-50 leading-relaxed">{a.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
