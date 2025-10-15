import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import img from "../assets/images/tea.png";
import img1 from "../assets/images/notea.png";
import img2 from "../assets/images/benefit.png";
import img3 from "../assets/images/order.png";
import img4 from "../assets/images/now.png";
import img5 from "../assets/images/ordernow.png";
import img6 from "../assets/images/rid.png";
import img7 from "../assets/images/say.png";
import img8 from "../assets/images/take.png";
import img9 from "../assets/images/free.png";
import img10 from "../assets/images/shot.png";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [val, setVal] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    whatsapp: "",
    // email: "",
    address: "",
    state: "",
    package: "",
    // gender: "",
    // deliveryTime: "",
    info: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedData = { ...formData, [name]: value };
    setFormData(updatedData);

    // the first character of the updated value
    const firstChar = updatedData.package[0];

    if (firstChar === "1") {
      setVal(21000);
    } else if (firstChar === "2") {
      setVal(32000);
    } else {
      setVal(53000);
    }
  };

  useEffect(() => {
    console.log("val", val);
  }, [val]);

  const orderNow = () => {
    window.fbq("track", "InitiateCheckout");
  };


  const placeOrder = async() => {

   const eventId = `purchase_${Date.now()}`


    window.fbq("track", "Purchase", {
      value: val,
      currency: "NGN",
      eventID: eventId, 
    });

    try{ await fetch("https://anyuan.onrender.com/purchase", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ value: val , eventId}), // 👈 send state value
    });

    console.log("✅ Purchase event sent to backend:", val);

  }catch(err){
    console.log('err',err)

  }
    

       
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const templateParams = {
      name: formData.name,
      phone: formData.phone,
      whatsapp: formData.whatsapp,
      // email: formData.email,
      address: formData.address,
      state: formData.state,
      package: formData.package,
      // gender: formData.gender,
      // delivery_time: formData.deliveryTime,
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
            // email: "",
            address: "",
            state: "",
            package: "",
            // gender: "",
            // deliveryTime: "",
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
        src={img}
        alt="tea image"
        className="rounded-xl shadow-lg object-cover w-[1/4] h-[1/4] md:max-w-4xl mx-auto"
      />
      {/* Hero Section */}
      <section className="text-center   w-full lg:max-w-5xl mx-auto">
        <p className="text-3xl mt-10">🚨🚨🚨🚨🚨</p>
        <h1 className="text-2xl md:text-5xl font-bold mb-2 text-amber-700 w-full ">
          ARE YOU TIRED OF CONSTIPATION, BLOATING, BELLY FAT & STOMACH
          DISCOMFORT STEALING YOUR PEACE AND CONFIDENCE?
        </h1>
        <p className="text-3xl">🚨🚨🚨🚨🚨</p>

        <p className="text-xl md:text-xl font-medium leading-relaxed">
          You’re Not Alone! Thousands of Nigerians Are Suffering in Silence, But
          It Doesn’t Have to Be You! 💪 <br /> <br /> 🍃 Discover How our
          Natural Constipation Tea has helped thousands of Nigerians Flush Out
          Toxins, Relieve Constipation, Belly Fat and Restore a Healthy
          Digestive System Naturally! <br /> <br />
          💧 Feel Lighter. Healthier. Happier All Within Days of Use!{" "}
        </p>

        <div className="w-full flex justify-center">
          <img
            src={img6}
            alt="tea image"
            className="rounded-xl shadow-lg object-cover w-[1/4] h-[1/4] md:w-[1/8] lg:max-w-4xl mb-4 mt-4 mx-auto"
          />
        </div>
      </section>

      <section class="bg-gradient-to-b from-green-50 to-white  md:px-12 lg:px-24 text-gray-800">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl md:text-4xl font-bold text-green-700 mb-6">
            🛑 GET RID OF CONSTIPATION, UNNEEDED BODY AND BELLY FAT, PILE,
            BLOATING, AND STOMACH DISCOMFORT?
          </h2>
          <p class="text-lg md:text-xl leading-relaxed mb-8">
            Join over 3000 Nigerian become free from all kinds of intestinal
            discomfort and stomach problems today <br />
            <span class="font-semibold text-green-700">
              Life shouldnt be painful for anyone.
            </span>
          </p>

          <div class="bg-green-100 p-6 rounded-2xl shadow-sm mb-8 text-left">
            <h3 class="text-xl font-semibold text-green-800 mb-3">
              You’ve probably tried:
            </h3>
            <ul class="list-decimal list-inside space-y-2 text-gray-700">
              <li>
                💊 Over-the-counter laxatives that give{" "}
                <strong>temporary relief</strong> but make your body dependent
              </li>
              <li>
                🌿 Herbal bitters that <strong>burn your stomach</strong> but
                don’t fix the real problem
              </li>
              <li>
                🍵 “Detox” teas that only make you run to the toilet without
                solving the root cause
              </li>
              <li>
                👨‍⚕️ Doctors telling you it’s “normal” or that you just need to
                drink more water
              </li>
              <li>🏠 Endless home remedies that simply don’t work</li>
            </ul>
          </div>

          <p class="text-lg md:text-xl mb-8">
            We understand you’re frustrated, uncomfortable, and tired of living
            like this. It feels like your body is working against you you eat
            right, drink water, yet your stomach still feels bloated and you
            struggle to have a proper bowel movement.
          </p>

          <p class="text-2xl font-semibold text-green-700 mb-4">
            👉 You Are Not Alone.
          </p>

          <p class="text-lg md:text-xl mb-8">
            Most constipation remedies only target the{" "}
            <span class="font-semibold">symptoms</span>, not the{" "}
            <span class="font-semibold">root cause</span>! That’s why the
            discomfort always returns sometimes even worse than before.
          </p>

          <div class="bg-white border border-green-200 rounded-2xl shadow-lg p-6">
            <h3 class="text-2xl font-bold text-green-800 mb-4">
              🌿 The Natural Solution is this Natural Constipation Tea
            </h3>
            <p class="text-lg leading-relaxed mb-6 text-gray-700">
              This gentle Ayurvedic tea works deep inside your system to{" "}
              <strong>flush out built-up waste</strong>,
              <strong>relieve constipation</strong>, and{" "}
              <strong>restore healthy digestion</strong> without chemicals or
              side effects. Experience the lightness, comfort, and clean energy
              your body deserves. ✨
            </p>
            <a
              href="#order"
              onClick={orderNow}
              class="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold text-lg py-3 px-8 rounded-full shadow-md transition-all duration-300"
            >
              🛒 Order Now <br /> (Payment on Delivery)
            </a>
          </div>
        </div>
      </section>

      {/* Testimonial Video */}
      <section className="bg-amber-50 py-12  text-center">
        <div className="mt-8">
          {" "}
          <img
            src={img1}
            alt="tea image"
            className="rounded-xl shadow-lg object-cover w-[1/4] h-[1/4] md:max-w-4xl mx-auto"
          />
          <p className="text-2xl font-bold text-red-700 mb-4 uppercase">
            Natural Constipation Tea, your final stop to a pain-free life.
          </p>
        </div>

        <section class="bg-white  md:px-12 lg:px-24 text-gray-800">
          <div class="max-w-4xl mx-auto text-center">
            <h2 class="text-3xl md:text-4xl font-bold text-green-700 mb-6">
              🍃 This Natural Constipation Tea is NOT just another detox tea –
              it’s your COMPLETE solution to restoring gut balance and ending
              constipation for good!
            </h2>

            <p class="text-lg md:text-xl text-gray-700 leading-relaxed mb-10">
              Backed by ancient Ayurvedic wisdom and trusted by thousands across
              Nigeria,
              <span class="font-semibold text-green-700">
                This Natural Constipation Tea
              </span>{" "}
              gently cleanses your system, relieves stubborn constipation, and
              helps your digestive organs function like new again. No harsh
              chemicals. No dependency. Just natural relief and lasting
              wellness. 🌿
            </p>

            <h3 class="text-2xl font-semibold text-green-800 mb-6">
              ✨ Why this Natural Constipation Tea is Different:
            </h3>

            <div class="bg-green-50 border border-green-200 rounded-2xl shadow-sm text-left p-6 space-y-4">
              <p class="flex items-start gap-3">
                <span class="text-green-600 text-2xl">✅</span>
                <span>
                  <strong>Targets the Root Cause:</strong> Works deep within
                  your digestive system to remove built-up waste and toxins that
                  cause constipation, bloating, and fatigue.
                </span>
              </p>

              <p class="flex items-start gap-3">
                <span class="text-green-600 text-2xl">✅</span>
                <span>
                  <strong>Restores Natural Digestion:</strong> Helps your colon
                  regain its natural rhythm for smooth, easy, and complete bowel
                  movements every single day.
                </span>
              </p>

              <p class="flex items-start gap-3">
                <span class="text-green-600 text-2xl">✅</span>
                <span>
                  <strong>Fast-Acting & Gentle:</strong> Most users notice
                  relief within days without stomach cramps or harsh laxative
                  effects.
                </span>
              </p>

              <p class="flex items-start gap-3">
                <span class="text-green-600 text-2xl">✅</span>
                <span>
                  <strong>100% Natural Formula:</strong> Made from a blend of
                  Ayurvedic herbs that support gut health, liver detoxification,
                  and internal cleansing.
                </span>
              </p>

              <p class="flex items-start gap-3">
                <span class="text-green-600 text-2xl">✅</span>
                <span>
                  <strong>Zero Side Effects:</strong> Unlike chemical laxatives
                  that weaken your intestines over time, This Natural
                  Constipation Tea is completely safe for daily use.
                </span>
              </p>
            </div>

            <p class="mt-10 text-lg text-gray-700">
              Imagine waking up light, refreshed, and comfortable every morning.
              That’s the power of{" "}
              <span class="font-semibold text-green-700">
                this Natural Constipation Tea
              </span>
              . 🍵
            </p>

            <a
              href="#order"
              onClick={orderNow}
              class="inline-block mt-8 bg-green-600 hover:bg-green-700 text-white font-semibold text-lg py-3 px-8 rounded-full shadow-md transition-all duration-300"
            >
              🛒 Order Now – Start Your Cleanse Today
            </a>
          </div>
          <p className="text-green-600 text-3xl text-center font-bold">
            PAYMENT ON DELIVERY!!!!!
          </p>
        </section>
      </section>

      <section class="bg-green-50  md:px-12 lg:px-24 text-gray-800">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl md:text-4xl font-bold text-green-700 mb-6">
            ⚠️ THE 4 DEADLY STAGES OF CONSTIPATION – AND HOW IT SILENTLY
            DESTROYS YOUR INTESTINES ⚠️
          </h2>

          <p class="text-lg md:text-xl text-gray-700 leading-relaxed mb-10">
            Most Nigerians think constipation is “normal” or “nothing serious.”
            But here’s the truth:
            <span class="font-semibold text-red-600">
              Untreated constipation slowly poisons your body from the inside
              out.
            </span>
            Your intestines become clogged, your blood fills with toxins, and
            your vital organs start to weaken all without you realizing it.
          </p>

          <div class="bg-white rounded-2xl shadow-xl p-8 text-left space-y-6 border border-green-200">
            <div class="flex items-start gap-3">
              <span class="text-red-500 text-2xl">🔴</span>
              <p>
                <strong>
                  Stage 1: Irregular Bowel Movements & Hidden Waste Build-Up
                </strong>
                <br />
                You skip bowel movements, but think it’s harmless. Deep inside,
                waste begins sticking to your intestinal walls like glue
                starting the slow process of blockage and toxin buildup.
              </p>
            </div>

            <div class="flex items-start gap-3">
              <span class="text-red-500 text-2xl">🟠</span>
              <p>
                <strong>
                  Stage 2: Severe Bloating, Gas & Gut Inflammation
                </strong>
                <br />
                The trapped waste begins to rot and ferment, producing toxic
                gases that bloat your belly and stretch your colon. The walls of
                your intestine start getting weak and inflamed this is where{" "}
                <span class="font-semibold">damage begins.</span>
              </p>
            </div>

            <div class="flex items-start gap-3">
              <span class="text-red-500 text-2xl">🟠</span>
              <p>
                <strong>Stage 3: Intestinal Hardening & Nerve Damage</strong>
                <br />
                Chronic constipation causes your intestines to harden and lose
                their natural movement (peristalsis). The nerves that push waste
                out begin to fail, leading to constant heaviness, fatigue, and
                even{" "}
                <span class="font-semibold">toxic overload in your blood.</span>
              </p>
            </div>

            <div class="flex items-start gap-3">
              <span class="text-red-500 text-2xl">🔴</span>
              <p>
                <strong>Stage 4: Complete Colon Collapse & Organ Stress</strong>
                <br />
                When your intestines are no longer able to move waste, toxins
                spread into your bloodstream leading to{" "}
                <span class="font-semibold text-red-600">
                  skin problems, headaches, piles (hemorrhoids), liver strain,
                  and even heart complications.
                </span>
                Doctors call this “auto-intoxication” your body literally starts
                poisoning itself.
              </p>
            </div>
          </div>

          <p class="mt-10 text-lg text-gray-700 leading-relaxed">
            Don’t wait until your intestines scream for help.
            <span class="font-semibold text-green-700">
              This Natural Constipation Tea
            </span>{" "}
            gently flushes out years of built-up waste, restores normal bowel
            movement, and protects your colon before irreversible damage begins.
            🌿
          </p>

          <img
            src={img1}
            alt="tea image"
            className="rounded-xl shadow-lg object-cover w-[1/4] h-[1/4] md:max-w-4xl mx-auto"
          />

          <a
            href="#order"
            class="inline-block mt-8 bg-green-600 hover:bg-green-700 text-white font-semibold text-lg py-3 px-8 rounded-full shadow-md transition-all duration-300"
          >
            🚀 Start Cleansing Now – Protect Your Intestines Before It’s Too
            Late!
          </a>
        </div>
      </section>

      <section class="bg-amber-50 py-16 px-6 md:px-12 lg:px-24 text-gray-800">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl md:text-4xl font-bold text-amber-700 mb-6 uppercase">
            💥 THE Natural Constipation Tea TRANSFORMATION TIMELINE 💥
          </h2>

          <p class="text-lg md:text-xl text-gray-700 leading-relaxed mb-10">
            Watch how your body begins to heal, detoxify, and regain balance
            week by week with the powerful natural cleansing of{" "}
            <span class="font-semibold text-amber-700">
              The Natural Constipation Tea.
            </span>
          </p>


          <section className="bg-gradient-to-r from-green-100 to-green-200 py-16">
  <div className="max-w-3xl mx-auto text-center px-6">
    <h2 className="text-4xl font-extrabold text-green-900 mb-6">How to use this cure</h2>
    <p className="text-lg text-green-800 mb-10">
      Follow these simple steps to make the most of your tea and get the full value.
    </p>

    <div className="grid gap-8 md:grid-cols-2">
  <div className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transform transition duration-300">
    <h3 className="text-2xl font-bold text-green-900 mb-3">Morning Dose</h3>
    <p className="text-green-800">
      Place one tea bag in warm water in the morning and let it soak for 3 to 5 minutes before drinking.
    </p>
  </div>
  <div className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transform transition duration-300">
    <h3 className="text-2xl font-bold text-green-900 mb-3">Evening Dose</h3>
    <p className="text-green-800">
      In the evening, use another tea bag, soak it in warm water for 3 to 5 minutes before drinking.
    </p>
  </div>
</div>


    <p className="mt-10 text-green-900 font-semibold text-lg">
      Drink mindfully, dont abuse and you will see the results.
    </p>
  </div>
</section>


          <div class="bg-white rounded-2xl shadow-xl p-8 text-left space-y-6 border border-amber-200">
            <div class="flex items-start gap-3">
              <span class="text-green-600 text-2xl">✅</span>
              <p>
                <strong>Week 1–2: Gentle Cleansing & Instant Relief 💨</strong>
                <br />
                You’ll notice smoother, easier bowel movements as your
                intestines start to wake up naturally. Bloating, gas, and that
                constant heavy feeling begin to fade replaced with lightness and
                energy.
              </p>
            </div>

            <div class="flex items-start gap-3">
              <span class="text-green-600 text-2xl">✅</span>
              <p>
                <strong>Week 3–4: Deep Detox & Digestive Reset 🌿</strong>
                <br />
                The tea begins flushing out years of toxic buildup from your
                colon. Your stomach feels flatter, your appetite improves, and
                you start feeling “clean” inside with renewed mental clarity and
                focus.
              </p>
            </div>

            <div class="flex items-start gap-3">
              <span class="text-green-600 text-2xl">✅</span>
              <p>
                <strong>
                  Month 2: Total Gut Healing & Regularity Restored 🌞
                </strong>
                <br />
                Your digestive system finds its natural rhythm again no more
                constipation, no more struggle in the toilet. The intestinal
                walls are soothed, repaired, and strengthened for long-term
                balance.
              </p>
            </div>

            <div class="flex items-start gap-3">
              <span class="text-green-600 text-2xl">✅</span>
              <p>
                <strong>
                  Month 3: A Healthier, Energized, Toxin-Free Body 🌺
                </strong>
                <br />
                Your entire system feels lighter, cleaner, and more alive. Skin
                starts to glow, bloating disappears, and you experience a
                renewed sense of vitality. You’ll wonder how you ever lived
                without this daily cleansing ritual!
              </p>
            </div>
          </div>

          <p class="mt-10 text-lg text-gray-700 leading-relaxed font-medium">
            🚨 Don’t ignore your gut constipation can silently destroy your
            health.
            <br />
            <span class="text-amber-700 font-semibold">
              Start your body’s transformation today with This Natural
              Constipation Tea nature’s gentle, proven solution for lasting
              digestive freedom!
            </span>
          </p>

          <a
            href="#order"
            onClick={orderNow}
            class="inline-block mt-8 bg-amber-600 hover:bg-amber-700 text-white font-semibold text-lg py-3 px-8 rounded-full shadow-md transition-all duration-300"
          >
            👉 ORDER NOW – PAYMENT ON DELIVERY!
          </a>
        </div>
      </section>

      {/* Testimonials */}
      <section className="  max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          What Nigerians Are Saying About This Natural Herbal Tea
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Chinwe Udo",
              img: "https://i.pinimg.com/736x/cb/f0/20/cbf0202e3a84362fe4995065edccb7c1.jpg",
              text: "This Natural Tea has been a game changer for me, It totlly cleared my Piles and Constipation. I used to suffer from painful bowel movements and constant discomfort, but after using this tea for just a few weeks, I noticed a significant improvement. My digestion has improved, and I feel lighter and more energetic. I highly recommend this product to anyone struggling with constipation or digestive issues.",
            },
            {
              name: "Akwaji Steve",
              img: "https://scontent.fiba2-1.fna.fbcdn.net/v/t39.30808-6/480442103_1276490976767390_113941965816985220_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeE3OqxKkrb7HM-oMkXH_fG0siM4GwbxSgGyIzgbBvFKAT6f8yA8xv--dxalzWkCnRziwNu1_P1bTnPBlFORssYL&_nc_ohc=-zCkwv02QOYQ7kNvwHbGJas&_nc_oc=AdlOB9lznQiIAzjxtZBEsdXceNv6BG7WpR4Ax9VWk7HnOY7cYsHN6Gb-Ba45OSDvMV4&_nc_zt=23&_nc_ht=scontent.fiba2-1.fna&_nc_gid=P7UT0p5hEXNHFOccnJttkA&oh=00_AfdtTQb2g4dlaapurcC1PnfpMD0P-nIY4Vc4D7vy62Wsqg&oe=68F0809C",
              text: "I have battled constipation for years, trying different drugs with no success until i found this Natural Herbal cure. It has helped me to feel better and my digestion is now more natural. I can now eat without feeling constipated and my appetite is back to normal. I was Scared to try it at first but I am glad I did. I will always recommend this product to anyone struggling with constipation.",
            },
            {
              name: "Ngozi Onuoha",
              img: "https://i.pinimg.com/736x/27/0c/ae/270cae8a1e356d9cb20439dc979114d6.jpg",
              text: "I am Ngozi from Ibadan, I have been battling with too much belly fat for years and I have tried several methods to reduce it but nothing worked until I discovered This Natural Constipation herbal Tea. After using it for just one month, I have lost 5 inches off my waist and my belly fat is visibly reduced. I feel more confident and comfortable in my own skin. If you are going through the same issue, I highly recommend you try this tea.",
            },
          ].map((t, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow">
              <img
                src={t.img}
                alt={t.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-semibold text-lg text-center">{t.name}</h3>
              <p className="text-gray-600 text-center mt-2">{t.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-green-50 py-12">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl font-bold text-green-900 mb-4">Our Guarantee</h2>
    <p className="text-green-800 mb-8">
      We’re confident our Constipation Tea will support healthy digestion and help you feel lighter and more comfortable every day.
    </p>
    <div className="flex flex-col md:flex-row justify-center gap-8">
      <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
        <span className="text-4xl mb-2">🌿</span>
        <h3 className="font-bold text-green-900">All-Natural Ingredients</h3>
        <p className="text-green-800 text-sm text-center">Made from carefully selected herbs known to support digestion.</p>
      </div>
      <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
        <span className="text-4xl mb-2">💪</span>
        <h3 className="font-bold text-green-900">Effective & Gentle</h3>
        <p className="text-green-800 text-sm text-center">Gentle on your stomach while helping relieve constipation naturally.</p>
      </div>
      <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
        <span className="text-4xl mb-2">✅</span>
        <h3 className="font-bold text-green-900">Trusted & Safe</h3>
        <p className="text-green-800 text-sm text-center">Prepared with care for consistent, reliable results every time.</p>
      </div>
    </div>
  </div>
</section>


      {/* Product Packages */}
      <section className="bg-amber-50 py-20  text-center">
        <h2 className="text-3xl font-bold mb-8 text-amber-700">
          Choose Your The Natural Constipation Tea Pack
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Starter Pack",
              price: "₦21,000",
              old: "₦25,000",
              features: ["1 Pack", "Free Delivery", "Payment on Delivery"],
            },
            {
              title: "Most Popular",
              price: "₦32,000",
              old: "₦48,000",
              features: [
                "2 Pack",
                "Free Delivery", "Payment on Delivery"
              ],
            },
            {
              title: "Best Value",
              price: "₦53,000",
              old: "₦68,000",
              features: [
                "Buy 3 Get 1 Free",
                "Free Delivery", "Payment on Delivery"
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
              <a href="#order" onClick={orderNow}>
                <button className="bg-amber-600 text-white  py-3 px-4 rounded-lg font-semibold shadow hover:bg-amber-700 transition">
                  ORDER NOW
                </button>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Guarantee */}
      <section className="  text-center max-w-4xl mx-auto">
        <img
          src={img1}
          alt="Guarantee"
          className="mx-auto rounded-lg shadow-lg mb-6"
        />
        <h2 className="text-3xl font-bold text-amber-700 mb-4">
          90-Days Money-Back Guarantee
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Try The Natural Constipation Tea risk-free for 90 days. If you’re not
          satisfied with your results, return it no questions asked. We’re
          confident you’ll love the relief and energy that comes with a
          naturally balanced digestive system.
        </p>
      </section>

      <section className="bg-amber-50   text-start" id="order">
        <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-center text-amber-700 mb-8">
            Order Form for{" "}
            <span className="italic">The Natural Constipation Tea</span>
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
            {/* <div>
              <label className="block font-medium mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="Enter your email (optional)"
              />
            </div> */}

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
                <option value="1 Pack - ₦21,000">1 Pack - ₦21,000</option>
                <option value="2 Pack - ₦32,000">
                  2 Pack - (Big Discount) - ₦32,000
                </option>
                <option value="6 Pack - ₦53,000">
                  3 Pack - (Buy 3 Get 1 FREE) - ₦53,000
                </option>
              q</select>
            </div>

            {/* Gender */}
            {/* <div>
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
            </div> */}

            {/* Delivery Time */}
            {/* <div>
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
            </div> */}

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
                onClick={placeOrder}
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
      <footer className="bg-gray-900 text-gray-300 text-sm py-10 text-center ">
        <p>
          © 2025 The Natural Constipation Tea | Terms • Conditions • Privacy •
          Contact
        </p>
      </footer>

      <div className="fixed bottom-0 right-0 z-50 bg-red-800 p-4 flex justify-around item-center rounded-tl-lg shadow-lg w-full">
        <p className="font-bold text-white ">
          Free Delivery Nationwide. Payment on delivery
        </p>
        <a
          onClick={orderNow}
          href="#order"
          className="bg-white text-gray-800 font-bold py-2 px-4 rounded-full shadow-lg hover:shadow-xl transition text-center"
        >
          Click To Buy Now
        </a>
      </div>

      <a
        href="#order"
        onClick={orderNow}
        className={`bg-white fixed top-0 right-0 z-50 text-gray-800 font-bold py-2 px-4 rounded-full shadow-lg hover:shadow-xl transition text-center ${setInterval(
          () => {
            const colors = ["amber", "red", "green", "blue", "purple", "pink"];
            const randomColor =
              colors[Math.floor(Math.random() * colors.length)];
            document.body.style.backgroundColor = `${randomColor}-500`;
          },
          10
        )}`}
      >
        Click To Buy Now
      </a>
    </div>
  );
};

export default Home;
