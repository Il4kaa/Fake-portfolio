export default function Header({logoText}: {logoText: string} ) {
    return(
        <header className="fixed top-0 w-full z-50 bg-neutral-950/10 backdrop-blur-xl border-b border-white/10">
          <div className="mx-auto px-20 flex justify-between items-center py-10">
            <a href="/" className="text-2xl font-mono font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-cyan-700 hover:scale-105 duration-300 transition">{logoText}</a>
            <div className="max-w-1/2 flex items-center gap-24">
              <a href="#about" className="text-neutral-300 font-mono shadow-2xl hover:text-blue-500 duration-300 transition">Обо мне</a>
              <a href="#skills" className="text-neutral-300 font-mono shadow-2xl hover:text-blue-500 duration-300 transition">Навыки</a>
              <a href="#testimonials" className="text-neutral-300 font-mono shadow-2xl hover:text-blue-500 duration-300 transition">Отзывы</a>
              <a href="#projects" className="text-neutral-300 font-mono shadow-2xl hover:text-blue-500 duration-300 transition">Проекты</a>
              <a href="#contact" className="text-neutral-300 font-mono shadow-2xl hover:text-blue-500 duration-300 transition">Контакты</a>
            </div>
          </div>
        </header>
    );
}
