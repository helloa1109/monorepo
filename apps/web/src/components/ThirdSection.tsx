import { Card, CardContent, ScrollReveal } from '@mono/ui';

const squirrelRoutine = [
  { time: '오전 6시', task: '기상 및 스트레칭' },
  { time: '오전 7시', task: '아침 식사'},
  { time: '오전 9시', task: '오전 쳇바퀴 달리기' },
  { time: '오후 12시', task: '점심 식사 및 낮잠' },
  { time: '오후 2시', task: '오후 쳇바퀴 달리기' },
  { time: '오후 5시', task: '간식 시간 (도토리)' },
  { time: '오후 7시', task: '저녁 산책' },
  { time: '오후 10시', task: '취침' },
];

export function ThirdSection() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <ScrollReveal>
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            다람쥐의 하루는 <span className="text-cyan-400">언제나</span> 분주해!
          </h2>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <div className="mb-16">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">오늘도 힘차게 달리는 쳇바퀴</h3>
          <p className="text-gray-400 text-lg">매일매일 성실하게, 하루도 빠짐없이 달리고 있어요</p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {squirrelRoutine.map((item, index) => (
          <ScrollReveal key={index} delay={0.1 * index} direction="up">
            {/* h-full 클래스가 이미 적용되어 있음 */}
            <Card className="bg-gradient-to-br from-yellow-900/40 to-yellow-800/25 border-yellow-700/60 hover:border-amber-400/70 transition-all duration-500 hover:shadow-lg hover:shadow-amber-400/20 hover:scale-105 h-full">
              <CardContent className="p-7">
                <div className="text-amber-400 text-sm font-bold mb-3">
                  {item.time}
                </div>
                {/* CardTitle 컴포넌트를 사용하려면 import하고 아래 h4 대신 사용 */}
                <h4 className="text-xl md:text-2xl font-bold">{item.task}</h4>
              </CardContent>
            </Card>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}