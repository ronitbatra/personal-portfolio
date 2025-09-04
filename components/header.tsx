import NavLink from './nav-link';
import ThemeToggle from './theme-toggle';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-black/40">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="font-medium">Your Name</Link>
        <nav className="flex items-center gap-1">
          <NavLink href="/projects">Projects</NavLink>
          <NavLink href="/experience">Experience</NavLink>
          <NavLink href="/posts">Posts</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </nav>
        <div className="flex items-center">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
