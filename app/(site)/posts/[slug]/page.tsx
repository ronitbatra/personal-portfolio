import { allPosts } from '.contentlayer/generated';
import Prose from '@/components/prose';
import type { Metadata } from 'next';
import MDXContent from '@/components/mdx-content';

export function generateStaticParams() {
  return allPosts.map(p => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = allPosts.find(p => p.slug === params.slug);
  if (!post) return {};
  return { title: post.title, description: post.description };
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = allPosts.find(p => p.slug === params.slug);
  if (!post) return null;
  return (
    <article className="container py-12">
      <h1 className="text-3xl font-medium mb-2">{post.title}</h1>
      <p className="text-sm text-zinc-500 mb-8">{new Date(post.date).toLocaleDateString()}</p>
      <Prose>
        <MDXContent code={post.body.code} />
      </Prose>
    </article>
  );
}
