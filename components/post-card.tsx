import Link from 'next/link';
import { Post } from '.contentlayer/generated';

export default function PostCard({ post }: { post: Post }) {
  return (
    <Link href={post.url} className="block rounded-2xl border border-zinc-200 dark:border-zinc-800 p-5 hover:-translate-y-0.5 transition-transform hover:text-accent">
      <h3 className="text-lg font-medium mb-1">{post.title}</h3>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">{post.description}</p>
      <p className="text-xs text-zinc-500 mt-3">{new Date(post.date).toLocaleDateString()}</p>
    </Link>
  );
}
