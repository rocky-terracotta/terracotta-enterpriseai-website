import { HeroHeader } from "@/components/header";
import HeroSection from "@/components/hero-section-one";
import Image from "next/image";
import ContentOne from "@/components/content-one";
import FeaturesThree from "@/components/features-three";
import FeaturesTwo from "@/components/features-two"
import FeaturesFive from "@/components/features-five";
import FooterSection from "@/components/footer-one";

export default function Home() {
  return (
    <div>
      {/* <HeroHeader /> */}
      <HeroSection />
      <ContentOne />
      <FeaturesThree />
      <FeaturesFive />
      <FeaturesTwo />
      <FooterSection />
    </div>
  );
}
