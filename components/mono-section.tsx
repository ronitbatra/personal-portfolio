import Link from 'next/link';
import { JetBrains_Mono } from 'next/font/google';

const jbmono = JetBrains_Mono({ subsets: ['latin'], weight: '400' });

export default function MonoSection({
  title,
  id,
  children
}: {
  title: string;
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={`${jbmono.className} max-w-6xl mx-auto px-4 [&_a:hover]:text-accent [&_a]:transition-colors`}>
      <h2 className="text-xl font-semibold mb-4 border-b border-zinc-800 pb-2">{title}</h2>
      <div className="space-y-3 text-zinc-200">
        {children}
      </div>
    </section>
  );
}
