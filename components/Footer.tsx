export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#050505] border-t border-white/10 py-8 px-4 sm:px-8 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-zinc-500 text-xs font-mono tracking-widest uppercase text-center md:text-left">
          © {currentYear} SYNTECH AGENCY. All Rights Reserved.
        </div>
        
        <div className="flex items-center gap-6 text-xs font-bold text-white uppercase tracking-widest">
          <a href="#" className="hover:text-zinc-400 transition-colors">Twitter</a>
          <a href="#" className="hover:text-zinc-400 transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-zinc-400 transition-colors">Instagram</a>
        </div>
      </div>
    </footer>
  );
}