import LandingHero from '@/components/landing-hero';
import MonoSection from '@/components/mono-section';
import { allPosts } from '.contentlayer/generated';
import { experience } from '@/data/experience';
import { projects } from '@/data/projects';

export default function HomePage() {
  const posts = allPosts
    .filter((p) => p.published)
    .sort((a, b) => +new Date(b.date) - +new Date(a.date))
    .slice(0, 5);

  return (
    <>
      <LandingHero name="Ronit Batra" />
      <div className="bg-black text-zinc-100 py-10">
        <MonoSection id="posts" title="Posts">
          {posts.map((p) => (
            <div key={p.slug}>
              <a href={p.url} className="underline-offset-2 hover:underline hover:text-accent">
                {p.title}
              </a>
              <span className="text-zinc-400"> — {p.description}</span>
            </div>
          ))}
        </MonoSection>

        <div className="h-8" />
        <MonoSection id="projects" title="Projects">
          {projects.map((p) => (
            <div key={p.title}>
              <a href={p.href || '#'} className="underline-offset-2 hover:underline hover:text-accent">
                {p.title}
              </a>
              {p.description ? <span className="text-zinc-400"> — {p.description}</span> : null}
            </div>
          ))}
        </MonoSection>

        <div className="h-8" />
        <MonoSection id="experience" title="Experience">
          {experience.map((ex) => (
            <div key={ex.company + ex.role}>
              <div>
                <span className="font-medium">{ex.role}</span>
                <span className="text-zinc-400"> — {ex.company}</span>
              </div>
              <div className="text-sm text-zinc-500">
                {ex.location}
                {ex.location && ex.period ? ' · ' : ' '}
                {ex.period}
              </div>
            </div>
          ))}
        </MonoSection>

        <div className="h-8" />
        <MonoSection id="contact" title="Contact">
          <div><a className="underline-offset-2 hover:underline hover:text-accent" href="mailto:xfb7hj@virginia.edu">Email</a></div>
          <div><a className="underline-offset-2 hover:underline hover:text-accent" href="https://www.linkedin.com/in/ronitbatra/">LinkedIn</a></div>
          <div><a className="underline-offset-2 hover:underline hover:text-accent" href="https://x.com/_RonitB">Twitter</a></div>
          <div><a className="underline-offset-2 hover:underline hover:text-accent" href="https://github.com/ronitbatra">GitHub</a></div>
        </MonoSection>
      </div>
    </>
  );
}
