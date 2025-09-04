import Link from 'next/link';

export type ListItem = { label: string; href: string; external?: boolean };

export default function ListSection({ title, items }: { title: string; items: ListItem[] }) {
  return (
    <section className="space-y-3">
      <h2 className="text-xs font-medium tracking-widest text-zinc-500">{title}</h2>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.label} className="flex items-center justify-between">
            {item.external ? (
              <a href={item.href} className="text-zinc-200 hover:text-accent hover:underline underline-offset-4" target="_blank" rel="noreferrer">
                {item.label}
              </a>
            ) : (
              <Link href={item.href} className="text-zinc-200 hover:text-accent hover:underline underline-offset-4">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
