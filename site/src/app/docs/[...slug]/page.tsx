'use client';
import React from 'react';
import { allDocs } from 'contentlayer/generated';
import { getHeadings } from '@/lib/docs/utils';
import { notFound } from 'next/navigation';
import MDXContent from '@/components/mdx/MDXContent';
import { Toc } from '@/components/layout';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import NextLink from 'next/link';

export default function Page({ params }: { params: { slug: string[] } }) {
  const { slug } = params;

  let idx = 0;
  const docs = allDocs.find((doc, id) => {
    if (doc._raw.flattenedPath === `docs/${slug.join('/')}`) {
      idx = id;
      return true;
    }
    return false;
  });

  const [prevDoc, nextDoc] = allDocs.filter(
    (doc, id) => idx == id + 1 || idx == id - 1
  );

  const tocList = getHeadings(docs?.body.raw);

  if (!docs) notFound();

  return (
    <div className='max-w-3xl mx-auto pt-10 xl:max-w-none xl:ml-0 xl:mr-[15.5rem] xl:pr-16'>
      <MDXContent docs={docs} />
      <footer className='flex justify-between my-11'>
        {prevDoc && (
          <NextLink
            href={`/${prevDoc._raw.flattenedPath}`}
            className='p-6 pl-0 hover:bg-zinc-100 hover:dark:bg-zinc-900 bg-opacity-50 rounded-2xl flex items-center justify-start relative gap-3'
          >
            <ChevronLeft />
            <div className='flex flex-col justify-between items-start'>
              <span>PREV</span>
              <span className='text-primary-500'>{prevDoc.title}</span>
            </div>
          </NextLink>
        )}
        {nextDoc && (
          <NextLink
            href={`/${nextDoc._raw.flattenedPath}`}
            className='p-6 pr-0 hover:bg-zinc-100 hover:dark:bg-zinc-900 bg-opacity-50 rounded-2xl flex items-center justify-end relative gap-3'
          >
            <div className='flex flex-col justify-between items-end'>
              <span>NEXT</span>
              <span className='text-primary-500'>{nextDoc.title}</span>
            </div>
            <ChevronRight />
          </NextLink>
        )}
      </footer>
      <section className='fixed z-20 top-[3.8125rem] bottom-0 right-[max(0px,calc(50%-45rem))] w-[19.5rem] py-10 overflow-y-auto hidden xl:block'>
        <Toc headings={tocList} />
      </section>
    </div>
  );
}
