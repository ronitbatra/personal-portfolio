export default function Prose({ children }: { children: React.ReactNode }) {
  return <div className="prose prose-zinc dark:prose-invert max-w-none">{children}</div>;
}
