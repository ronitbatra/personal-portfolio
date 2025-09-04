export type Experience = {
  company: string;
  role: string;
  location?: string;
  period: string; // e.g., May 2025 - Present
  bullets?: string[];
};

export default function ExperienceItem({ company, role, location, period }: Experience) {
  return (
    <article className="py-6 border-b border-zinc-200 dark:border-zinc-800">
      <h3 className="font-semibold text-white">{role} — {company}</h3>
      <p className="text-sm text-zinc-400 mt-1">
        {location}
        {location && period ? ' · ' : ''}
        {period}
      </p>
    </article>
  );
}
