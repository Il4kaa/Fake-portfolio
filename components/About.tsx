interface AboutCard {
  id: string;
  time: string;
  title: string;
  linkText: string;
  anchor: string;
}

const myCards: AboutCard[] = [
  { id: "1", time: "50", title: "Проектов", linkText: "Посмотреть проекты ->", anchor: "#projects" },
  { id: "2", time: "3+", title: "Года опыта", linkText: "Мои навыки ->", anchor: "#skills" },
  { id: "3", time: "150+", title: "Довольных клиентов", linkText: "Отзывы ->", anchor: "#testimonials" },
  { id: "4", time: "100%", title: "Заказов в сроки", linkText: "Связаться ->", anchor: "#contact" },
];

export default function About({ aboutText }: { aboutText: string }) {
  return (
    <section className="flex flex-col items-center py-20 px-8 bg-neutral-950 min-h-screen">
      <h1 className="text-6xl text-center font-mono font-black text-white mb-16 self-start max-w-7xl mx-auto w-full">{aboutText}</h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        <div className="relative w-full h-full">
          <img 
            src="./37d95b589714c152ae7fd1a088dd0c63.jpg" className="w-full h-full object-cover rounded-3xl border border-neutral-800 shadow-2xl hover:shadow-cyan-500/70" alt="About"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {myCards.map((card) => (
            <div key={card.id} className="bg-neutral-900 border border-neutral-800 p-6 rounded-3xl flex flex-col justify-between hover:border-blue-600 shadow-2xl hover:shadow-cyan-500/50 transition-all">
              <div>
                <h2 className="text-blue-500 text-6xl font-black mb-1">{card.time}</h2>
                <p className="text-neutral-300 font-bold text-2xl leading-tight">{card.title}</p>
              </div>
              <a href={card.anchor} className="text-blue-700 text-lg font-semibold mt-4 hover:text-blue-500 duration-300 transition">{card.linkText}</a>
            </div>
          ))}
        </div>
      </div>
      <h1 className="text-neutral-400 font-mono font-bold text-center max-w-7xl py-12 text-lg">Я увлеченный разработчик с опытом создания современных веб-приложений. Я специализируюсь на разработке полнофункциональных решений от концепции до реализации. У меня есть опыт работы с различными технологиями, и я всегда стремлюсь осваивать новые инструменты для создания качественных продуктов.</h1>
    </section>
  );

}
