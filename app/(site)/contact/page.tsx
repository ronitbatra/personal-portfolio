import Section from '@/components/section';

export const metadata = { title: 'Contact' };

export default function ContactPage() {
  return (
    <Section title="Contact">
      <div className="space-y-4 text-zinc-600 dark:text-zinc-400">
        <p>Say hi anytime:</p>
        <ul className="space-y-2">
          <li>Email: <a className="underline" href="mailto:xfb7hj@virginia.edu">xfb7hj@virginia.edu</a></li>
          <li>LinkedIn: <a className="underline" href="https://www.linkedin.com/in/ronitbatra/">@ronitbatra</a></li>
          <li>GitHub: <a className="underline" href="https://github.com/ronitbatra">@ronitbatra</a></li>
          <li>Twitter: <a className="underline" href="https://x.com/_RonitB">@_RonitB</a></li>
        </ul>
      </div>
    </Section>
  );
}
