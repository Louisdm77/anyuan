import React from "react";

const Home = () => {
  return (
    <div className="bg-[#fffaf3] text-gray-900">
      {/* Hero Section */}
      <section className="text-center py-16 px-6 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-amber-700">
          FINALLY REVEALED:
        </h1>
        <p className="text-lg md:text-xl font-medium leading-relaxed">
          A Breakthrough That Combines Centuries Of Tradition With A Rare
          Ayurvedic Herb That Naturally Relieves <strong>Constipation</strong>,
          Bloating, and Digestive Discomfort — Better Than Every Supplement In
          The Market.
        </p>
      </section>

      {/* Testimonial Video */}
      <section className="bg-amber-50 py-12 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Watch A Testimonial From One Of Our Happy Customers
        </h2>
        <p className="text-gray-600 mb-6">
          🔊 Please unmute the video to hear the sound
        </p>
        <div className="max-w-2xl mx-auto aspect-video bg-gray-200 rounded-lg shadow-md overflow-hidden">
          <video
            src=""
            poster="https://placehold.co/800x450?text=Customer+Video+Testimonial"
            controls
            className="w-full h-full object-cover"
          />
        </div>
        <div className="mt-8 text-center">
          <button className="bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-amber-700 transition">
            Claim 40% Discount Now
          </button>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <img
          src="https://placehold.co/600x400?text=Natural+Herbs+and+Tea"
          alt="Herbal Relief"
          className="rounded-xl shadow-lg object-cover w-full"
        />
        <div>
          <h2 className="text-3xl font-bold text-amber-700 mb-4">
            Nature’s Gentle Constipation & Digestion Secret
          </h2>
          <p className="text-lg leading-relaxed mb-4">
            Inspired by a 5,000-year-old Ayurvedic formula,{" "}
            <strong>Anyuan Colon Clean Tea</strong> is designed to naturally
            activate your body’s digestive rhythm — providing deep, lasting
            relief from constipation, bloating, and indigestion.
          </p>
          <p className="text-gray-700">
            Unlike harsh laxatives or chemical supplements, Anyuan Colon Clean
            Tea works gently to restore gut balance and promote smooth, regular
            bowel movements — without cramping or dependency.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-amber-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          7 Reasons Why Nigerians Over 30 Are Switching to Anyuan Colon Clean
          Tea
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            "Restores natural bowel movement rhythm",
            "Eliminates bloating and gas gently",
            "Repairs digestive lining and gut flora",
            "Improves nutrient absorption and energy",
            "Supports liver detox and toxin removal",
            "Made with 100% pure Ayurvedic herbs",
            "Zero chemicals, no side effects",
          ].map((benefit, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
            >
              <img
                src={`https://placehold.co/300x200?text=Benefit+${i + 1}`}
                alt={benefit}
                className="rounded-xl mb-4"
              />
              <h3 className="font-semibold text-lg mb-2">{benefit}</h3>
              <p className="text-gray-600 text-sm">
                Experience lasting comfort and natural relief without harsh
                laxatives or dependency.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          What Nigerians Are Saying About Anyuan Colon Clean Tea
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Chinwe Udo",
              text: "After years of battling constipation, Anyuan Colon Clean Tea restored my digestive balance in just 3 weeks. I feel lighter and more energetic every day!",
            },
            {
              name: "Babatunde Afolabi",
              text: "No more bloating or discomfort. I wake up feeling clean and refreshed — this formula truly works!",
            },
            {
              name: "Ngozi Onuoha",
              text: "I used to rely on harsh teas and tablets, but Anyuan Colon Clean Tea has made my digestion regular again without any side effects.",
            },
          ].map((t, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow">
              <img
                src={`https://placehold.co/150x150?text=User+${i + 1}`}
                alt={t.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-semibold text-lg text-center">{t.name}</h3>
              <p className="text-gray-600 text-center mt-2">{t.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Product Packages */}
      <section className="bg-amber-50 py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8 text-amber-700">
          Choose Your Anyuan Colon Clean Tea Pack
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Starter Pack",
              price: "₦60,000",
              old: "₦90,000",
              features: ["1 Pack", "Free Delivery", "Payment on Delivery"],
            },
            {
              title: "Most Popular",
              price: "₦120,000",
              old: "₦180,000",
              features: [
                "Buy 2 Get 1 Free",
                "3-Month Supply",
                "Priority Dispatch",
              ],
            },
            {
              title: "Best Value",
              price: "₦240,000",
              old: "₦360,000",
              features: [
                "Buy 4 Get 2 Free",
                "6-Month Supply",
                "VIP Support Line",
              ],
            },
          ].map((p, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition flex flex-col items-center"
            >
              <h3 className="text-xl font-bold mb-3">{p.title}</h3>
              <p className="text-gray-600 line-through mb-1">{p.old}</p>
              <p className="text-2xl font-bold text-amber-700 mb-4">
                {p.price}
              </p>
              <ul className="text-gray-700 mb-6 space-y-2">
                {p.features.map((f, i2) => (
                  <li key={i2}>✅ {f}</li>
                ))}
              </ul>
              <button className="bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-amber-700 transition">
                ORDER NOW
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-16 px-6 text-center max-w-4xl mx-auto">
        <img
          src="https://placehold.co/600x300?text=90+Day+Guarantee"
          alt="Guarantee"
          className="mx-auto rounded-lg shadow-lg mb-6"
        />
        <h2 className="text-3xl font-bold text-amber-700 mb-4">
          90-Days Money-Back Guarantee
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Try Anyuan Colon Clean Tea risk-free for 90 days. If you’re not
          satisfied with your results, return it — no questions asked. We’re
          confident you’ll love the relief and energy that comes with a
          naturally balanced digestive system.
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 text-sm py-10 text-center px-6">
        <p>
          © 2025 Anyuan Colon Clean Tea | Terms • Conditions • Privacy •
          Contact
        </p>
      </footer>
    </div>
  );
};

export default Home;
