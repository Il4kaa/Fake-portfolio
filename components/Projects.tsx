interface ProjectCard {
  id: string;
  title: string;
  desc: string;
  tags: string[];
  link: string;
}

const myProjects: ProjectCard[] = [
  { id: "1", title: "AI Dashboard", desc: "Система управления данными с интеграцией ИИ.", tags: ["NEXT.JS", "PYTHON"], link: "#" },
  { id: "2", title: "E-commerce App", desc: "Магазин с корзиной и адаптивным дизайном.", tags: ["REACT", "TAILWIND"], link: "#" },
  { id: "3", title: "Social Media", desc: "Платформа для общения и обмена контентом.", tags: ["TYPESCRIPT", "FIREBASE"], link: "#" },
];

export default function Projects({ textProjects }: { textProjects: string }) {
  return (
    <section className="py-72">
      <h1 className="text-7xl text-center font-mono font-black text-white mb-24">{textProjects}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
        {myProjects.map((project) => (
          <div key={project.id} className="group p-8 rounded-[2.5rem] bg-neutral-900/50 border border-neutral-800 shadow-2xl hover:shadow-cyan-500/50 hover:border-blue-600 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-6">
                <h1 className="text-3xl text-white font-mono font-bold leading-tight">{project.title}</h1>
                <div className="flex flex-wrap gap-2 justify-end">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="text-[10px] bg-blue-600/10 text-blue-500 border border-blue-500/20 px-2 py-1 rounded-full font-mono">{tag}</span>
                  ))}
                </div>
              </div>
              <p className="text-neutral-400 font-mono text-lg mb-8 leading-relaxed">{project.desc}</p>
            </div>
            <a href={project.link} className="w-full text-center py-4 rounded-2xl bg-neutral-800 text-white font-mono font-bold hover:bg-blue-600 transition-all duration-300">Посмотреть проект</a>
          </div>
        ))}
      </div>
    </section>
  )
}
