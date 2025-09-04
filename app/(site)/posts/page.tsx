import Section from '@/components/section';
import PostCard from '@/components/post-card';
import { allPosts } from '.contentlayer/generated';

export const metadata = { title: 'Posts' };

export default function PostsPage() {
  const posts = allPosts
    .filter(p => p.published)
    .sort((a, b) => +new Date(b.date) - +new Date(a.date));
  return (
    <Section title="Posts">
      <div className="grid sm:grid-cols-2 gap-4">
        {posts.map(post => <PostCard key={post.slug} post={post} />)}
      </div>
    </Section>
  );
}
