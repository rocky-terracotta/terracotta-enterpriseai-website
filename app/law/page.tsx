import { HeroHeader } from "@/components/header";
// import HeroSection from "@/components/hero-section-one";
import Image from "next/image";
import ContentOne from "@/components/home/content-one";
import FeaturesThree from "@/components/home/features-three";
import FeaturesTwo from "@/components/home/features-two"
import FeaturesFive from "@/components/home/features-five";
import FooterSection from "@/components/footer-one";
import CallToActionOne from "@/components/home/call-to-action-one";
// import LogoCloudOne from "@/components/logo-cloud-one";
import HeroSectionTwo from "@/components/home/hero-section-two";

export default function Home() {
  return (
    <div>
      {/* <HeroHeader /> */}
      <HeroSectionTwo />
      {/* <LogoCloudOne /> */}
      <ContentOne />
      <FeaturesThree />
      <FeaturesFive />
      <FeaturesTwo />
      <CallToActionOne />
      <FooterSection />
    </div>
  );
}
