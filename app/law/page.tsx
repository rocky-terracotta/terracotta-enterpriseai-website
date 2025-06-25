import { HeroHeader } from "@/components/header";
import Image from "next/image";
import ContentOne from "@/components/law/content-one";
import FeaturesThree from "@/components/law/features-three";
import FeaturesTwo from "@/components/law/features-two"
import FeaturesFive from "@/components/law/features-five";
import FooterSection from "@/components/footer-one";
import CallToActionOne from "@/components/law/call-to-action-one";
import HeroSectionTwo from "@/components/law/hero-section-two";
import FAQsThree from "@/components/law/faqs-section-three";
import FeaturesEleven from "@/components/law/features-eleven";

export default function Home() {
  return (
    <div>
      <HeroSectionTwo />
      <ContentOne />
      <FeaturesThree />
      <FeaturesEleven />
      <FeaturesFive />
      {/* <FeaturesTwo /> */}
      {/* <FAQsThree /> */}
      <CallToActionOne />
      <FooterSection />
    </div>
  );
}
