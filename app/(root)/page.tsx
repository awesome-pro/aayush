import Cta from "@/components/cta";
import FAQ from "@/components/faq";
import Hero from "@/components/hero";
import Image from "next/image";

export default function Home() {
  return (
   <main>
      <Hero />
      <Cta />
      <FAQ />
   </main>
  );
}
