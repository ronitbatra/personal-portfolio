import Section from '@/components/section';
import ProjectCard from '@/components/project-card';
import { projects } from '@/data/projects';

export const metadata = { title: 'Projects' };

export default function ProjectsPage() {
  return (
    <Section title="Projects">
      <div className="grid sm:grid-cols-2 gap-4">
        {projects.map(p => <ProjectCard key={p.title} {...p} />)}
      </div>
    </Section>
  );
}
