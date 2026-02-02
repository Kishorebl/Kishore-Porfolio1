import { Menu } from 'lucide-react';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/30 bg-white/60 backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/60">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        <a href="#hero" className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-900 dark:text-white">
          KBL
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-200 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-slate-900 dark:hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle navigation menu"
            className="rounded-full border border-white/40 bg-white/60 p-2 text-slate-900 shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl dark:border-white/10 dark:bg-white/10 dark:text-white md:hidden"
            onClick={() => setOpen((prev) => !prev)}
          >
            <Menu size={18} />
          </button>
        </div>
      </div>
      {open ? (
        <div className="border-t border-white/30 bg-white/70 px-5 py-4 backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/70 md:hidden">
          <nav className="flex flex-col gap-3 text-sm font-medium text-slate-700 dark:text-slate-200">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 transition hover:bg-white/70 dark:hover:bg-white/10"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
};

export default Navbar;
