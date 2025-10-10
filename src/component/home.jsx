import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import img from "../assets/images/img.jpeg";
import img1 from "../assets/images/img1.jpeg";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    whatsapp: "",
    email: "",
    address: "",
    state: "",
    package: "",
    gender: "",
    deliveryTime: "",
    info: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const templateParams = {
      name: formData.name,
      phone: formData.phone,
      whatsapp: formData.whatsapp,
      email: formData.email,
      address: formData.address,
      state: formData.state,
      package: formData.package,
      gender: formData.gender,
      delivery_time: formData.deliveryTime,
      message: formData.info,
    };

    emailjs
      .send(
        "service_mqb2izk", // from EmailJS
        "template_yaf3o3o", // from EmailJS
        templateParams,
        "R6lYSIjXyCK5mRIPQ" // from EmailJS
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("✅ Order sent successfully, you will be contacted soon!");
          setFormData({
            name: "",
            phone: "",
            whatsapp: "",
            email: "",
            address: "",
            state: "",
            package: "",
            gender: "",
            deliveryTime: "",
            info: "",
          });
        },
        (error) => {
          console.error("FAILED...", error);
          setStatus("❌ Failed to send order. Please try again.");
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <div className="bg-[#fffaf3] text-gray-900 p-8">
      <img
        src={img1}
        alt="tea image"
        className="rounded-xl shadow-lg object-cover w-full"
      />
      {/* Hero Section */}
      <section className="text-center py-16 px-6 w-full lg:max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-amber-700">
          FINALLY REVEALED:
        </h1>
        <p className="text-lg md:text-xl font-medium leading-relaxed">
          A Breakthrough That Combines Centuries Of Tradition With A Rare
          Ayurvedic Herb That Naturally Relieves <strong>Constipation</strong>,
          Bloating, and Digestive Discomfort Better Than Every Supplement In The
          Market.
        </p>
      </section>

      <section className="bg-amber-50 py-12 px-6 text-start text-xl font-bold text-green-800 line-height: 1.6;">
        <div>
          🌿 Tired of feeling bloated, sluggish, and uncomfortable due to
          constipation? Say goodbye to digestive discomfort with Anyuan Colon
          Clean Tea the natural remedy trusted by thousands of Nigerians 🇳🇬 over
          30! ✨ This ancient Ayurvedic formula works gently to restore your
          body’s natural rhythm, giving you lasting relief from constipation,
          bloating, and indigestion all without harsh chemicals or side effects.{" "}
          <br />
          💧 Experience the soothing power of nature and reclaim your digestive
          health with Anyuan Colon Clean Tea your gut will thank you! 🌼
        </div>
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
          src={img}
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
            activate your body’s digestive rhythm providing deep, lasting relief
            from constipation, bloating, and indigestion.
          </p>
          <p className="text-gray-700">
            Unlike harsh laxatives or chemical supplements, Anyuan Colon Clean
            Tea works gently to restore gut balance and promote smooth, regular
            bowel movements without cramping or dependency.
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
            {
              img: "https://i.pinimg.com/1200x/5e/dc/02/5edc02085476bd0d617eaabbfc4bfeaf.jpg",
              uses: "Restores natural bowel movement rhythm",
            },
            {
              img: "https://i.pinimg.com/736x/0c/3b/f9/0c3bf98fdc0cb84ca653db6bf321a565.jpg",
              uses: "Eliminates bloating and gas gently",
            },
            {
              img: "https://i.pinimg.com/1200x/c8/e5/10/c8e51091f063062953bb14df2475d487.jpg",
              uses: "Soothes digestive discomfort and cramps",
            },
            {
              img: "https://i.pinimg.com/1200x/d5/9c/7c/d59c7c6d67865e822938dd4c43ede46f.jpg",
              uses: "Supports healthy bowel movements",
            },
            // "Repairs digestive lining and gut flora",
            // "Improves nutrient absorption and energy",
            // "Supports liver detox and toxin removal",
            // "Made with 100% pure Ayurvedic herbs",
            // "Zero chemicals, no side effects",
          ].map((benefit, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
            >
              <img
                src={benefit.img}
                alt={benefit.uses}
                className="rounded-xl mb-4 flex justify-center mx-auto object-cover"
              />
              <h3 className="font-semibold text-lg mb-2">{benefit.uses}</h3>
              <p className="text-gray-600 text-sm">
                Experience lasting comfort and natural relief without harsh
                laxatives or dependency.
              </p>
            </div>
          ))}
        </div>
      </section>

      <div>
        {" "}
        <video
          src="https://v1.pinimg.com/videos/mc/expMp4/5e/07/8e/5e078eebe4f22445efb54e1eb660e713_t1.mp4"
          controls
          className="w-full h-full object-cover"
        />
      </div>

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
              text: "No more bloating or discomfort. I wake up feeling clean and refreshed  this formula truly works!",
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
              <a href="#order">
                <button className="bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-amber-700 transition">
                  ORDER NOW
                </button>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-16 px-6 text-center max-w-4xl mx-auto">
        <img
          src={img1}
          alt="Guarantee"
          className="mx-auto rounded-lg shadow-lg mb-6"
        />
        <h2 className="text-3xl font-bold text-amber-700 mb-4">
          90-Days Money-Back Guarantee
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Try Anyuan Colon Clean Tea risk-free for 90 days. If you’re not
          satisfied with your results, return it no questions asked. We’re
          confident you’ll love the relief and energy that comes with a
          naturally balanced digestive system.
        </p>
      </section>

      <section className="bg-amber-50 py-16 px-6 text-start" id="order">
        <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-center text-amber-700 mb-8">
            Order Form for{" "}
            <span className="italic">Anyuan Colon Clean Tea</span>
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block font-medium mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="Enter your full name"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block font-medium mb-2">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="Enter your phone number"
              />
            </div>

            {/* WhatsApp Number */}
            <div>
              <label className="block font-medium mb-2">WhatsApp Number</label>
              <input
                type="tel"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="Enter your WhatsApp number"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block font-medium mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="Enter your email (optional)"
              />
            </div>

            {/* Address */}
            <div>
              <label className="block font-medium mb-2">Full Address</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                rows="3"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="Enter your delivery address"
              ></textarea>
            </div>

            {/* State */}
            <div>
              <label className="block font-medium mb-2">Delivery State</label>
              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <option value="">Select your state</option>
                {[
                  "Lagos",
                  "Abuja (FCT)",
                  "Rivers",
                  "Oyo",
                  "Anambra",
                  "Kano",
                  "Edo",
                  "Delta",
                  "Kaduna",
                  "Enugu",
                  "Osun",
                  "Others",
                ].map((s, i) => (
                  <option key={i} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            {/* Package */}
            <div>
              <label className="block font-medium mb-2">Select Package</label>
              <select
                name="package"
                value={formData.package}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <option value="">Select your package</option>
                <option value="1 Pack - ₦60,000">1 Pack - ₦60,000</option>
                <option value="3 Pack - ₦120,000">
                  3 Pack - (Big Discount) - ₦120,000
                </option>
                <option value="6 Pack - ₦240,000">
                  6 Pack - (Buy 4 Get 2 FREE) - ₦240,000
                </option>
                <option value="12 Pack - ₦375,000">
                  12 Pack - (Buy 8 Get 4 FREE) - ₦375,000
                </option>
              </select>
            </div>

            {/* Gender */}
            <div>
              <label className="block font-medium mb-2">Gender</label>
              <div className="flex gap-6">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={formData.gender === "Male"}
                    onChange={handleChange}
                    required
                  />
                  Male
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={formData.gender === "Female"}
                    onChange={handleChange}
                    required
                  />
                  Female
                </label>
              </div>
            </div>

            {/* Delivery Time */}
            <div>
              <label className="block font-medium mb-2">
                When do you want to receive your order?
              </label>
              <select
                name="deliveryTime"
                value={formData.deliveryTime}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <option value="">Select delivery time</option>
                <option value="Today">Today</option>
                <option value="Tomorrow">Tomorrow</option>
                <option value="3 Days From Now">3 Days From Now</option>
              </select>
            </div>

            {/* Additional Info */}
            <div>
              <label className="block font-medium mb-2">
                Any Additional Information?
              </label>
              <textarea
                name="info"
                value={formData.info}
                onChange={handleChange}
                rows="3"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="Provide extra details about delivery or notes for our team"
              ></textarea>
            </div>

            {/* Submit */}
            <div className="text-center pt-4">
              <button
                type="submit"
                disabled={loading}
                className={`${
                  loading ? "bg-gray-400" : "bg-amber-600 hover:bg-amber-700"
                } text-white px-8 py-3 rounded-lg font-semibold shadow transition`}
              >
                {loading ? "Sending..." : "Submit Order"}
              </button>

              {status && (
                <p className="mt-4 text-center font-medium text-gray-700">
                  {status}
                </p>
              )}
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 text-sm py-10 text-center px-6">
        <p>
          © 2025 Anyuan Colon Clean Tea | Terms • Conditions • Privacy • Contact
        </p>
      </footer>
    </div>
  );
};

export default Home;
