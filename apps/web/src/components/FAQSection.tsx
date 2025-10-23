import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, ScrollReveal } from "@mono/ui";

export function FAQSection() {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl md:text-6xl font-bold mb-20">자주 묻는 질문</h2>
        </ScrollReveal>

        <Accordion type="single" collapsible className="space-y-5">
          {[
            { q: '무엇인가요?', a: 'IT 동아리입니다.' },
            { q: '어떻게 진행되나요?', a: '온라인으로 진행됩니다.' },
            { q: '실력이 어느 정도 되어야 하나요?', a: '열정만 있으면 됩니다.' },
            { q: '어떻게 진행되나요?', a: '첫 주에 진행됩니다.' },
            { q: '어떻게 진행되나요?', a: '열정만 있으면 됩니다.' },
            { q: '어떻게 진행되나요?', a: '열정만 있으면 됩니다.' },
            { q: '어떻게 진행되나요?', a: '열정만 있으면 됩니다.' },
          ].map((item, index) => (
            <ScrollReveal key={index} delay={0.05 * index}>
              <AccordionItem
                value={`item-${index}`}
                className="bg-#9E9E9E border-zinc-800 rounded-xl px-7 py-1 data-[state=open]:border-cyan-400/60 transition-all duration-300"
              >
                <AccordionTrigger className="hover:no-underline text-left py-6 text-base md:text-lg">
                  <span className="text-cyan-400 mr-3 font-bold">Q</span>
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pb-6 pl-7 text-base">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            </ScrollReveal>
          ))}
        </Accordion>
      </section>
  );
}