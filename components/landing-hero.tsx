import Link from 'next/link';
import { Silkscreen, JetBrains_Mono } from 'next/font/google';

const silkscreen = Silkscreen({ subsets: ['latin'], weight: '700' });
const jbmono = JetBrains_Mono({ subsets: ['latin'], weight: '400' });

export default function LandingHero({ name }: { name: string }) {
  return (
    <section className="min-h-[100svh] w-full bg-black text-white flex flex-col items-center justify-center text-center">
      <h1 className={`${silkscreen.className} leading-none whitespace-nowrap`} style={{ fontSize: '8vw' }}>
        {name}
      </h1>
      <nav className={`${jbmono.className} mt-8 text-lg`}>
        <span className="inline-flex items-center gap-4">
          <a href="#posts" className="hover:opacity-80">posts</a>
          <span>|</span>
          <a href="#projects" className="hover:opacity-80">projects</a>
          <span>|</span>
          <a href="#experience" className="hover:opacity-80">experience</a>
          <span>|</span>
          <a href="#contact" className="text-accent hover:opacity-90">contact</a>
        </span>
      </nav>
    </section>
  );
}
