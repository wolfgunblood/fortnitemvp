import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQList = [
  {
    question: "Can I get a refund?",
    answer:
      "Your initial 50% deposit is non-refundable, but if you're not completely thrilled with the final product, we'll cover the remaining 50% and you will still retain all rights to your finished MVP.",
    value: "item-1",
  },
  {
    question: "I have another question",
    answer: [
        <>
          Cool, reach out on{" "}
          <a
            href="https://x.com/jalajdu"
            target="_blank"
            rel="noopener noreferrer"
          >
            twitter
          </a>
          .
        </>,
      ],
    value: "item-2",
  },
 
];

export const FAQ = () => {
  return (
    <section id="faq" className="container max-w-3xl mx-auto py-8 sm:py-4 ">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion type="single" collapsible className="w-full AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

    
    </section>
  );
};
