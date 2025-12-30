interface TestimonialsCard {
    id: string;
    icon: string;
    name: string;
    worked: string;
    title: string;
    feedback: string;
};

const myCards : TestimonialsCard[] = [
    {id:"1", icon:"/37d95b589714c152ae7fd1a088dd0c63.jpg", name: "Александр Петренко", worked: "CEO, TechStart", title: "(*****) создал для нас замечательное веб-приложение!", feedback: "⭐⭐⭐⭐⭐"},
    {id: "2", icon: "/37d95b589714c152ae7fd1a088dd0c63.jpg", name: "Мария Коваленко", worked: "Дизайнер, Creative Studio", title: "Отличное сотрудничество!", feedback: "⭐⭐⭐⭐⭐"},
    {id: "3", icon: "/37d95b589714c152ae7fd1a088dd0c63.jpg", name: "Игорь Сидоренко", worked: "CTO, Digital Agency", title: "Рекомендую!", feedback: "⭐⭐⭐⭐⭐"},
];

export default function Testimonials({textTestimonials}: {textTestimonials: string}) {
    return (
        <section id="Testimonials" className="py-32 px-8 bg-neutral-950">
            <h1 className="text-6xl text-center font-mono font-black text-white mb-20">
                {textTestimonials}
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {myCards.map((items) => (
                    <div key={items.id} className="p-8 rounded-3xl bg-neutral-900 border border-neutral-800 hover:border-blue-600 transition-colors">
                        <div className="flex items-center gap-4 mb-6">
                            <img src={items.icon} className="w-16 h-16 rounded-full object-cover border border-neutral-700"/>
                            <div>
                                <h3 className="text-xl text-white font-mono font-bold leading-tight">{items.name}</h3> 
                                <p className="text-blue-500 font-mono text-sm">{items.worked}</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <p className="text-neutral-300 font-mono text-lg leading-snug"> {items.title}</p>
                            <div className="text-2xl pt-4 border-t border-neutral-800">{items.feedback}</div>
                        </div>
                    </div>
                ))}
            </div>
            <h2 className="text-neutral-400 font-mono font-bold text-center py-12 text-lg">Это лишь малая часть :)</h2>
        </section>
    )
}
