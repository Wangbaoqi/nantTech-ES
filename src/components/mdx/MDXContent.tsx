'use client';
import React from 'react';
import { Docs } from 'contentlayer/generated';

import { useMDXComponent } from 'next-contentlayer/hooks';
import { MDXComponents } from '@/components/mdx';

type MdxType = {
  docs: Docs;
};
export default function MDXContent({ docs }: MdxType) {
  const Component = useMDXComponent(docs?.body.code);
  return (
    <article className='prose prose-neutral'>
      <h1 className='text-3xl'>{docs.title}</h1>
      <Component components={MDXComponents as any} />
    </article>
  );
}
