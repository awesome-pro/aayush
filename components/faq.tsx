import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import Image from "next/image"
  
  export default function FAQ() {
    return (

      <div className="mt-4 p-2">
        <h1 className="text-4xl font-bold text-primary">Frequently Asked Questions</h1>
        <div className="flex flex-col md:flex-row gap-4 justify-center px-8 py-4 items-center">
        <Image
        src={"/images/faq.png"}
        alt="FAQ"
        width={420}
        height={320}
        className="rounded-l-xl z-20 shadow-xl"
        />
          <Accordion type="single" collapsible className="w-full lg:max-w-[650px]">
            <AccordionItem value="item-1">
              <AccordionTrigger>Why choose our medical for your family?</AccordionTrigger>
              <AccordionContent>
              Choose our medical services for your family for quality care by experienced professionals, 
              comprehensive services, and convenient access to state-of-the-art facilities, 
              ensuring personalized attention and continuity of care for your loved ones health and wellness needs.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Why we are different from others?</AccordionTrigger>
              <AccordionContent>
              We stand out from others due to our commitment to patient-centric care, innovative treatment approaches, 
              and a compassionate team dedicated to empowering individuals on their healthcare journey.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Trusted & experience senior care & love</AccordionTrigger>
              <AccordionContent>
              Our focus on trusted and experienced senior care is driven by 
              a deep sense of love and compassion for our elderly community members. We provide personalized support and companionship to ensure their well-being and happiness.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>How to get appointment for emergency cases?</AccordionTrigger>
              <AccordionContent>
              For emergency cases, appointments can be swiftly secured by 
              contacting our dedicated emergency hotline or visiting our 
              medical facility directly. We prioritize urgent cases and ensure prompt medical attention to address critical situations effectively.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
      </div>
      </div>
      
    )
  }
  