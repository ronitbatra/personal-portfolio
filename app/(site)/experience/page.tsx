import Section from '@/components/section';
import ExperienceItem from '@/components/experience-item';
import { experience } from '@/data/experience';

export const metadata = { title: 'Experience' };

export default function ExperiencePage() {
  return (
    <Section title="Experience">
      <div>
        {experience.map((ex) => <ExperienceItem key={ex.company + ex.role} {...ex} />)}
      </div>
    </Section>
  );
}
