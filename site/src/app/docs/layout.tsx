'use client';
import { Footer, NavBar } from '@/components/layout';
import { Sidebar } from '@/components/layout';
import React from 'react';
import { usePathname } from 'next/navigation';

interface LayoutProp {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProp) {
  const pathname = usePathname();
  const [, , slug] = pathname?.split('/');

  return (
    <div className='relative flex flex-col'>
      <NavBar />
      <div className='overflow-hidden'>
        <div className='max-w-8xl mx-auto px-4 sm:px-6 md:px-8'>
          <aside className='hidden lg:block fixed z-20 inset-0 top-[5rem] left-[max(0px,calc(50%-45rem))] right-auto w-[19rem] pb-10 pl-8 pr-6 overflow-y-auto'>
            <Sidebar slug={[slug]} />
          </aside>
          <main className='lg:pl-[19.5rem]'>{children}</main>
        </div>
      </div>
    </div>
  );
}
