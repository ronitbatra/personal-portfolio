import { cn } from '@/lib/utils';

type Project = {
  title: string;
  description: string;
  href?: string;
  tech?: string[];
};

export default function ProjectCard({ title, description, href, tech }: Project) {
  // If the whole card is a link, render title as a span and rely on group hover
  const titleEl = href ? (
    <span className="group-hover:text-accent transition-colors">{title}</span>
  ) : (
    <span className="hover:text-accent transition-colors">{title}</span>
  );

  const Inner = (
    <div className={cn('rounded-2xl border border-zinc-200 dark:border-zinc-800 p-5 h-full')}>
      <h3 className="text-lg font-medium mb-2">{titleEl}</h3>
      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">{description}</p>
      {tech?.length ? (
        <ul className="flex flex-wrap gap-2 text-xs text-zinc-500">{tech.map(t => <li key={t} className="px-2 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800">{t}</li>)}</ul>
      ) : null}
    </div>
  );

  return href ? (
    <a href={href} className="block group hover:-translate-y-0.5 transition-transform">
      {Inner}
    </a>
  ) : (
    <div className="group">{Inner}</div>
  );
}
