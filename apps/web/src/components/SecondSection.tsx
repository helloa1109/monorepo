import { Card, CardContent, ScrollReveal } from '@mono/ui';

const features = [
    {
      "badge": "한국",
      "badgeColor": "bg-cyan-400 text-black",
      "title": "우리나라 만세 푸른 하늘\n은하수 한 조각 구름",
      "description": "동해 물과 백두산이 마르고 닳도록 하느님이 보우하사\n우리나라 만세. 무궁화 삼천리 화려강산 대한 사람 대한으로.",
      "delay": 0.1
    },
    {
      "badge": "만세",
      "badgeColor": "bg-gray-600 text-white",
      "title": "남산 위에 저 소나무 철갑을\n두른 듯 바람서리 불변함은",
      "description": "가을 하늘 공활한데 높고 구름 없이 밝은 달은 우리 가슴\n일편단심일세. 무궁화 삼천리 화려강산 대한 사람 대한으로.",
      "delay": 0.2
    },
    {
      "badge": "테스트",
      "badgeColor": "bg-gray-600 text-white",
      "title": "이 기상과 이 맘으로 충성을\n다하여 괴로우나 즐거우나 나라",
      "description": "사랑하세. 무궁화 삼천리 화려강산 대한 사람 대한으로\n길이 보전하세. 동해 물과 백두산이 마르고 닳도록 하느님.",
      "delay": 0.3
    },
    {
      "badge": "서비스",
      "badgeColor": "bg-gray-600 text-white",
      "title": "보우하사 우리나라 만세\n무궁화 삼천리 화려강산",
      "description": "대한 사람, 대한으로 길이 보전하세. 남산 위에 저 소나무\n철갑을 두른 듯 바람서리 불변함은 우리 기상일세 이 기상과.",
      "delay": 0.4
    }
  ];

export function SecondSection() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <ScrollReveal>
        <h2 className="text-4xl md:text-6xl font-bold mb-20">
          WHY ME?
        </h2>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <ScrollReveal key={index} delay={feature.delay}>
            <Card className="bg-gradient-to-br from-zinc-900 to-zinc-900/80 border-zinc-800 hover:border-cyan-400/60 transition-all duration-500 group hover:shadow-xl hover:shadow-cyan-400/10 hover:scale-[1.02]">
              <CardContent className="p-10">
                <div className={`inline-block ${feature.badgeColor} text-xs font-bold px-4 py-1.5 rounded-full mb-6`}>
                  {feature.badge}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-5 leading-tight whitespace-pre-line">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-base leading-relaxed whitespace-pre-line">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}