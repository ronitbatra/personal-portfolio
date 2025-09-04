'use client';

import { useMDXComponent } from 'next-contentlayer/hooks';

export default function MDXContent({ code }: { code: string }) {
  const Component = useMDXComponent(code);
  return <Component />;
} 