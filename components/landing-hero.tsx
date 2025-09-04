import Link from 'next/link';
import { Silkscreen, JetBrains_Mono } from 'next/font/google';

const silkscreen = Silkscreen({ subsets: ['latin'], weight: '700' });
const jbmono = JetBrains_Mono({ subsets: ['latin'], weight: '400' });

export default function LandingHero({ name }: { name: string }) {
  return (
    <section className="min-h-[100svh] w-full bg-black text-white flex flex-col items-center justify-center text-center px-4 pb-[env(safe-area-inset-bottom)] pt-[calc(env(safe-area-inset-top)+1rem)]">
      <h1 className={`${silkscreen.className} leading-none break-words`} style={{ fontSize: '10vw' }}>
        {name}
      </h1>
      <nav className={`${jbmono.className} mt-6 text-base sm:text-lg`}>
        <span className="inline-flex flex-wrap items-center gap-3 sm:gap-4 justify-center">
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
