import React from 'react';
import { IconVercel } from '@/components/icons';

export function Footer() {
  return (
    <footer className='container max-w-8xl mx-auto text-sm font-light py-10 md:px-0 md:py-2 lg:py-8'>
      <div className='flex flex-col lg:flex-row gap-3 items-center justify-between px-10'>
        <span className='flex items-center'>
          Deployed with <IconVercel width={20} className='mx-4' />
        </span>
        <span className='text-default-500 '>
          © {new Date().getFullYear()}-present NateWang. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
