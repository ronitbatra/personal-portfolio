export default function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="container py-12 [&_a:hover]:text-accent [&_a]:transition-colors">
      <h2 className="text-2xl font-medium mb-6">{title}</h2>
      {children}
    </section>
  );
}
