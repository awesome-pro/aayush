import Cta from "@/components/cta";
import FAQ from "@/components/faq";
import Hero from "@/components/hero";
import Image from "next/image";

export default function Home() {
  return (
   <main className="min-h-screen w-full">
      <Hero />
      <Cta />
      <FAQ />
   </main>
  );
}
