interface SkillsCard {
    id: string;
    name: string;
    title: string;
    text: string;
};

const myCards: SkillsCard[] = [
    {id: "1", name: "⚙️", title: "Backend", text: "FastApi, Python"},
    {id: "2", name: "💻", title: "Frontend", text: "HTML, CSS, JS"},
    {id: "3", name: "🎨", title: "UI/UX Design", text: "Figma"},
    {id: "4", name: "🗄️", title: "База данных", text: "Sqlite3, PostgreSQL"},
    {id: "5", name: "☁️", title: "Облако", text: "AWS, Azure"},
];

export default function Skills({textSkills}: {textSkills: string}) {
    return(
        <section className="py-72">
            <h1 className="text-6xl text-center font-mono font-black text-white mb-16 self-start max-w-7xl mx-auto w-full">{textSkills}</h1>
            <div className="grid grid-cols-5 max-w-7xl mx-auto gap-4">
                {myCards.map((skil) => (
                    <div key={skil.id}>
                        <div className="bg-neutral-900 border border-neutral-700 rounded-3xl hover:border-blue-600 shadow-2xl hover:shadow-cyan-500 duration-300 transition-all">
                            <h1 className="text-6xl py-12 text-center hover:scale-[1.2] transition duration-300">{skil.name}</h1>
                            <h1 className="text-neutral-300 font-semibold font-mono text-2xl leading-tight text-center">{skil.title}</h1>
                            <p className="text-neutral-500 font-mono font-bold text-center py-6">{skil.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
