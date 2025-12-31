import Header from "../components/Header";
import About from "../components/About";
import Skills from "../components/Skills";
import Testimonails from "../components/Testimonials";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950">
      <section>
        <Header logoText="Portfolio" />
        <div className="text-center py-72">
          <h1 className="text-blue-600 text-8xl font-black">Привет, я Il4kaa</h1>
          <p className="text-gray-400 font-mono text-2xl pt-16 pb-10">Делаю красивые и функциональные веб приложения</p>
          <a href="#contact" className="text-2xl font-black font-mono bg-blue-600 rounded-full shadow-xl px-8 py-3 hover:shadow-cyan-500/75 duration-300 transition">Contact me</a>
        </div>
      </section>

      <section id="about">
        <About aboutText="Обо мне" />
      </section>

      <section id="skills">
        <Skills textSkills="Мои навыки" />
      </section>

      <section id="testimonials">
        <Testimonails textTestimonials="Отзывы"/>
      </section>

      <section id="projects">
        <Projects textProjects="Проекты"/>
      </section>

      <section id="contact">
        <Contact textContact="Свяжитесь со мной"/>
      </section>
    </main>
  );
}
