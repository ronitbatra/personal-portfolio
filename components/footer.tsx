export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 mt-16">
      <div className="container py-10 text-sm text-zinc-500 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Ronit Batra</p>
        <div className="flex gap-4">
          <a href="https://github.com/ronitbatra" className="hover:underline">GitHub</a>
          <a href="https://x.com/_RonitB" className="hover:underline">Twitter</a>
          <a href="mailto:xfb7hj@virginia.edu" className="hover:underline">Email</a>
        </div>
      </div>
    </footer>
  );
}
