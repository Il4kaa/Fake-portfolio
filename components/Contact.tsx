interface ContactLink {
  id: string;
  name: string;
  value: string;
  link: string;
  color: string;
}

const myContacts: ContactLink[] = [
  { id: "1", name: "Telegram", value: "@your_nick", link: "https://t.me/your_nick", color: "hover:shadow-blue-500/40" },
  { id: "2", name: "GitHub", value: "github.com/nick", link: "https://github.com/your_nick", color: "hover:shadow-white/20" },
  { id: "3", name: "Email", value: "work@mail.com", link: "mailto:work@mail.com", color: "hover:shadow-cyan-500/40" },
];

export default function Contact({ textContact }: { textContact: string }) {
  return (
    <section id="contact" className="py-32 px-8 bg-neutral-950">
      <h1 className="text-7xl text-center font-mono font-black text-white mb-24">{textContact}</h1>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {myContacts.map((item) => (
          <a key={item.id} href={item.link} target="_blank" className={`p-8 rounded-3xl bg-neutral-900 border border-neutral-800 flex flex-col items-center justify-center gap-4 transition-all duration-500 hover:-translate-y-2 hover:border-blue-600 shadow-2xl ${item.color}`}>
            <h1 className="text-neutral-500 font-mono font-bold uppercase tracking-widest text-xs">{item.name}</h1>
            <h1 className="text-white font-mono font-bold text-xl">{item.value}</h1>
          </a>
        ))}
      </div>
      <div className="mt-40 text-center">
        <h1 className="text-neutral-600 font-mono text-sm">© 2025 Created with Shrek Power. All rights reserved.</h1>
      </div>
    </section>
  );
}