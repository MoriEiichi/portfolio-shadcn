import { useEffect, useState } from "react";
import { Github, Mail } from "lucide-react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-slate-950/80 backdrop-blur-xl border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        <span className="font-display text-sm font-semibold tracking-tight text-white">
          Eiichi Mori
        </span>
        <div className="flex items-center gap-4">
          <a
            href="mailto:mori@morieiichi.com"
            className="text-sm text-slate-400 hover:text-white transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/MoriEiichi/my-playwright-test"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-400 hover:text-white transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
        </div>
      </div>
    </nav>
  );
}
