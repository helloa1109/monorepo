import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, ScrollReveal } from "@mono/ui";

export function FAQSection() {
  return (
    <section id="faq" className="py-24 px-6 max-w-5xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl md:text-6xl font-bold mb-20 text-center">자주 묻는 질문</h2>
        </ScrollReveal>

        <Accordion type="single" collapsible className="space-y-5">
          {[
            { q: '무엇인가요?', a: 'IT 동아리입니다.' },
            { q: '어떻게 진행되나요?', a: '온라인으로 진행됩니다.' },
            { q: '실력이 어느 정도 되어야 하나요?', a: '열정만 있으면 됩니다.' },
            { q: '가입 조건이 있나요?', a: '특별한 조건 없이 누구나 환영합니다.' }, 
            { q: '활동 기간은 어떻게 되나요?', a: '기본적으로 학기 단위로 운영됩니다.' }, 
            { q: '회비가 있나요?', a: '별도의 회비는 없으며, 필요시 N/1로 진행합니다.' }, 
            { q: '주요 활동 내용은 무엇인가요?', a: '스터디, 프로젝트, 코드 리뷰 등을 진행합니다.' }, 
          ].map((item, index) => (
            <ScrollReveal key={index} delay={0.05 * index}>
              <AccordionItem
                value={`item-${index}`}
                className="bg-secondary rounded-xl px-7 py-1 transition-colors duration-300 data-[state=open]:bg-primary/10">
        
                <AccordionTrigger className="hover:no-underline text-left py-6 text-base md:text-lg group"> 
                  
                  <span className="text-muted-foreground group-data-[state=open]:text-primary mr-3 font-bold">Q</span> 
                  {item.q}
                </AccordionTrigger>
              
                <AccordionContent className="text-muted-foreground pb-6 pl-7 text-base">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            </ScrollReveal>
          ))}
        </Accordion>
      </section>
  );
}