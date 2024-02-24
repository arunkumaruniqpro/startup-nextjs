import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "A SaaS based Zero Trust Network Access",
  description: "Zero trust, first coined by academia in the 1990s, is increasingly viewed as a mainstay of modern security strategies, taking over from traditional '“castle-and-moat"' network security models in which no one outside the network can access data on the inside, but everyone inside the network can. Commercial enterprises across the globe are fast moving toward zero trust, but public sector agencies are also being pushed to adopt zero trust cybersecurity principles and adjust their network architectures in a bid to  improve national cybersecurity.",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      <Pricing />
      <Blog />
      <Contact />
    </>
  );
}
