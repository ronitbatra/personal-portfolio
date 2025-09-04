import './globals.css';
import { Inter } from 'next/font/google';
import Footer from '@/components/footer';
import { site } from '@/lib/seo';
import type { Metadata } from 'next';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover'
};

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: site.title,
    template: `%s · ${site.title}`
  },
  description: site.description,
  metadataBase: new URL(site.url),
  openGraph: {
    title: site.title,
    description: site.description,
    url: site.url,
    siteName: site.title,
    // Remove OG image to avoid any default image
    images: [],
    locale: 'en_US',
    type: 'website'
  },
  twitter: { card: 'summary_large_image', creator: site.twitter }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.className} antialiased bg-black text-zinc-100 overflow-x-hidden`}>
        <main className="min-h-[70vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
