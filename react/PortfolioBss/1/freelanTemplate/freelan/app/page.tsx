import ServicesSectionOne from "@/components/Services/ServicesSectionOne";
import ServicesSectionTwo from "@/components/Services/ServicesSectionTwo";
import Blog from "@/components/Blog";
import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Video from "@/components/Video";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
      <ServicesSectionOne />
      <ServicesSectionTwo />
      <Blog />
    </>
  );
}
