'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header({logoText}: {logoText: string} ) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 w-full z-50 bg-neutral-950/10 backdrop-blur-xl border-b border-white/10">
          <div className="mx-auto px-6 md:px-20 flex justify-between items-center py-6 md:py-10">
            
            <a href="#" className="text-2xl font-mono font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-cyan-700 hover:scale-105 duration-500 transition z-50">{logoText}</a>

            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden z-50 p-2 text-white hover:text-blue-500 duration-500 transition">{isOpen ? <X size={35} /> : <Menu size={35} />}</button>

            <nav className={`fixed md:static inset-0 h-screen md:h-auto w-full md:w-auto bg-neutral-950 md:bg-transparent flex flex-col md:flex-row items-center justify-center md:justify-end gap-10 md:gap-24 duration-500 ease-in-out transition-all ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 md:translate-x-0 md:opacity-100'}`}>
              <a onClick={() => setIsOpen(false)} href="#about" className="text-2xl md:text-base text-neutral-300 font-mono shadow-2xl hover:text-blue-500 duration-300 transition">Обо мне</a>
              <a onClick={() => setIsOpen(false)} href="#skills" className="text-2xl md:text-base text-neutral-300 font-mono shadow-2xl hover:text-blue-500 duration-300 transition">Навыки</a>
              <a onClick={() => setIsOpen(false)} href="#testimonials" className="text-2xl md:text-base text-neutral-300 font-mono shadow-2xl hover:text-blue-500 duration-300 transition">Отзывы</a>
              <a onClick={() => setIsOpen(false)} href="#projects" className="text-2xl md:text-base text-neutral-300 font-mono shadow-2xl hover:text-blue-500 duration-300 transition">Проекты</a>
              <a onClick={() => setIsOpen(false)} href="#contact" className="text-2xl md:text-base text-white font-mono shadow-2xl duration-300 transition bg-blue-700 rounded-[2rem] hover:bg-blue-600 p-4">Контакты</a>
            </nav>

          </div>
        </header>
    );
}



