'use client';
import React, { memo, useEffect, useMemo } from 'react';
import { usePathname } from 'next/navigation';
import NextLink from 'next/link';

import { sourceRoutes, sourceRoutesItemType } from '@/config/routes';
import { ChevronRightLinearIcon } from '@/components/icons';
import clsx from 'clsx';
import { useSourceSidebar } from '@/store/sourceSidebar';

type SidebarProps = {
  slug: string[];
};

export const Sidebar = memo(function Sidebar(props: SidebarProps) {
  const { slug = [] } = props;
  const [root] = slug;

  const { sidebar, setSidebar } = useSourceSidebar();

  const sidebarList = useMemo(() => {
    return sourceRoutes[root];
  }, [root]);

  useEffect(() => {
    setSidebar(sidebarList);
  }, [setSidebar, sidebarList]);

  return (
    <nav className='flex flex-col shrink-0 w-full box-border'>
      {sidebarList?.map((item, idx) => {
        return (
          <SidebarDetail key={idx} item={item} breadcrumbs={sidebarList} />
        );
      })}
    </nav>
  );
});

function CollapseWrapper({
  isExpanded,
  duration,
  children
}: {
  isExpanded: boolean;
  duration: number;
  children: any;
}) {
  return (
    <div
      className={clsx(
        'grid transition-[grid-template-rows] duration-200 ease-in-out',
        isExpanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
      )}
    >
      <div
        className={clsx('overflow-hidden border-l-1 border-default-200 ml-5')}
      >
        {children}
      </div>
    </div>
  );
}

function SidebarDetail(props: {
  item: sourceRoutesItemType;
  breadcrumbs: sourceRoutesItemType[];
}) {
  const { item, breadcrumbs = [] } = props;
  const pathname = usePathname();
  const isActive = pathname === item.path;

  console.log(pathname, 'pathname');
  console.log(item.path, 'item path');

  const isCollapsed = isActive || !!item.collapsed;

  return (
    <div className='p-0 m-0 bg-transparent border-none rounded-none'>
      <SidebarItem item={item} isActive={isActive} isCollapsed={isCollapsed} />
      <CollapseWrapper duration={100} isExpanded={isCollapsed}>
        {item?.items?.map((item: sourceRoutesItemType, idx: number) => {
          return (
            <SidebarDetail key={idx} item={item} breadcrumbs={breadcrumbs} />
          );
        })}
      </CollapseWrapper>
    </div>
  );
}

const SidebarWrapper = ({
  as: Component = 'div',
  children = '',
  className = '',
  ...props
}: {
  as: React.ElementType | string;
  children: React.ReactNode;
  onClick: () => void;
  className: string;
}) => {
  return (
    <Component className={className} {...props}>
      {children}
    </Component>
  );
};

const SidebarItem = memo(function SidebarItem(props: {
  item: sourceRoutesItemType;
  isActive: boolean;
  isCollapsed: boolean;
}) {
  const { item, isActive, isCollapsed } = props;
  const Icon = item.icon;
  const { setSidebarExpanded } = useSourceSidebar();
  const isChild = item?.items?.length;
  const cls = clsx(
    'flex justify-between px-3 gap-[0.5rem] hover:no-underline cursor-pointer py-3 -outline-offset-1 lg:rounded-[8px] bg-transparent no-underline',
    {
      'dark:bg-zinc-900 bg-zinc-100': isActive && !isChild,
      'hover:bg-zinc-100 hover:dark:bg-zinc-900': !isChild
    }
  );
  const arrowClsx = clsx(
    'transition duration-300 ease-in-out',
    isCollapsed ? 'rotate-90' : 'rotate-0'
  );

  return (
    <SidebarWrapper
      as={isChild ? 'div' : NextLink}
      {...(!item.path ? {} : { href: item.path })}
      className={cls}
      onClick={() => setSidebarExpanded(item.path)}
    >
      <span className='flex items-center gap-2 min-w-0 shrink'>
        <span className='flex shrink-0 items-center justify-center h-xl w-xl'>
          {Icon && <Icon size={18} />}
        </span>
        <span className='flex flex-col justify-center min-w-0 shrink '>
          <span className='text-[14px]'>
            <p className='truncate'>{item.name}</p>
          </span>
        </span>
      </span>
      {item.items ? (
        <span className='flex items-center shrink-0'>
          <ChevronRightLinearIcon className={arrowClsx} size={18} />
        </span>
      ) : null}
    </SidebarWrapper>
  );
});
