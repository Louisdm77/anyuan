import Hero from "./components/Hero";
import UrgencyBanner from "./components/UrgencyBanner";
import BenefitsSection from "./components/BenefitsSection";
import ProblemSection from "./components/ProblemSection";
import Mechanism from "./components/Mechanism";
import MultiUse from "./components/MultiUse";
import WindscreenSection from "./components/WindscreenSection";
import Testimonials from "./components/Testimonials";
import ComparisonSection from "./components/ComparisonSection";
import WhoItsFor from "./components/WhoItsFor";
import FeaturesAndColors from "./components/FeaturesAndColors";
import VideoSection from "./components/VideoSection";
import SocialProof from "./components/SocialProof";
import { VisionSection, FaqSection } from "./components/VisionAndFaq";
import GuaranteeSection from "./components/GuaranteeSection";
import PricingSection from "./components/PricingSection";
import OrderForm from "./components/OrderForm";
import Footer from "./components/Footer";
import { WhatsAppFloatingButton } from "./components/WhatsAppButton";
import { OrderModalProvider } from "./context/OrderModalContext";
import OrderModal from "./components/OrderModal";

export default function App() {
  return (
    <OrderModalProvider>
      <div className="font-sans text-gray-900">
        <Hero />
        <UrgencyBanner />
        <BenefitsSection />
        <ProblemSection />
        <Mechanism />
        <MultiUse />
        <WindscreenSection />
        <Testimonials />
        <ComparisonSection />
        <WhoItsFor />
        <FeaturesAndColors />
        <VideoSection />
        {/* <SocialProof /> */}
        <VisionSection />
        <FaqSection />
        <GuaranteeSection />
        <PricingSection />
        <OrderForm />
        <Footer />
        <WhatsAppFloatingButton />
        <OrderModal />
      </div>
    </OrderModalProvider>
  );
}
