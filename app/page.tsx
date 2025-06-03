import { HeroHeader } from "@/components/header";
import HeroSection from "@/components/hero-section-one";
import Image from "next/image";
import Features from "@/components/features-two"

export default function Home() {
  return (
    <div>
      {/* <HeroHeader /> */}
      <HeroSection />
      <Features />
    </div>
  );
}
