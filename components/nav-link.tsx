'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

type Props = { href: string; children: React.ReactNode };
export default function NavLink({ href, children }: Props) {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Link
      href={href}
      className={cn(
        'px-3 py-2 text-sm rounded-xl transition',
        active ? 'bg-zinc-100 dark:bg-zinc-800' : 'hover:bg-zinc-100 dark:hover:bg-zinc-800'
      )}
    >
      {children}
    </Link>
  );
}
