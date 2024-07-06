"use client"

import CTA from "@/components/CTA";
import { FAQ } from "@/components/FAQ";
import Features from "@/components/Features";
import Footer from "@/components/footer";
import Hero from "@/components/Hero";
import How from "@/components/How";
import Projects from "@/components/Projects";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col gap-12 py-16 px-6 ">
      {" "}
      <Hero />
      <Projects />
      <Features />
      {/* <How /> */}
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}
