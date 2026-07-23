import { IMAGES } from "../content";
import { WhatsAppInlineButton } from "./WhatsAppButton";

export default function GuaranteeSection() {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <img
          src={IMAGES.guaranteeBadge}
          alt="Satisfaction guarantee badge"
          className="mx-auto h-24 object-contain mb-6"
        />

        <h2 className="text-2xl md:text-3xl font-black text-brand-navy mb-4">
          Our Simple Promise To You
        </h2>

        <p className="text-gray-700 leading-relaxed mb-4">
          Try ClearView Pro. If you use it and you are not happy with it, send
          us a message within 7 days. We will give your money back. No long
          questions, no wahala.
        </p>

        <div className="bg-gray-50 rounded-xl p-6 my-8">
          <h3 className="font-bold text-brand-navy mb-2">Free Delivery</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            For a short time, delivery is free for new customers. No hidden
            fees. We bring ClearView Pro straight to your door.
          </p>
        </div>

        <WhatsAppInlineButton />
      </div>
    </section>
  );
}
