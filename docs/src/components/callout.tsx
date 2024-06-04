
import { useRef } from 'react';
import { cn } from '@/utils/cn';
import { CircleAlert, NotepadText, Info, Ban } from 'lucide-react';

type CalloutVariants = 'deprecated' | 'pitfall' | 'note' | 'wip';

interface ExpandableCalloutProps {
  children: React.ReactNode;
  type: CalloutVariants;
}

const variantMap = {
  deprecated: {
    title: 'Deprecated',
    Icon: CircleAlert,
    containerClasses: 'bg-red-50 dark:bg-red-600 dark:bg-opacity-20',
    textColor: 'text-red-500 dark:text-red-40',
    overlayGradient: 'linear-gradient(rgba(249, 247, 243, 0), rgba(249, 247, 243, 1)',
  },
  note: {
    title: 'Note',
    Icon: Info,
    containerClasses: 'bg-green-50 dark:bg-green-600 dark:bg-opacity-20 text-primary dark:text-primary-dark',
    textColor: 'text-green-600 dark:text-green-400',
    overlayGradient: 'linear-gradient(rgba(245, 249, 248, 0), rgba(245, 249, 248, 1)',
  },
  pitfall: {
    title: 'Pitfall',
    Icon: NotepadText,
    containerClasses: 'bg-yellow-50 dark:bg-yellow-600 dark:bg-opacity-20',
    textColor: 'text-yellow-500 dark:text-yellow-40',
    overlayGradient: 'linear-gradient(rgba(249, 247, 243, 0), rgba(249, 247, 243, 1)',
  },
  wip: {
    title: 'Under Construction',
    Icon: Ban,
    containerClasses: 'bg-yellow-50 dark:bg-yellow-600 dark:bg-opacity-20',
    textColor: 'text-yellow-500 dark:text-yellow-40',
    overlayGradient: 'linear-gradient(rgba(249, 247, 243, 0), rgba(249, 247, 243, 1)',
  },
};

function ExpandableCallout({ children, type = 'note' }: ExpandableCalloutProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const variant = variantMap[type];

  return (
    <div
      className={cn(
        'pt-8 pb-4 px-5 sm:px-8 my-8 relative rounded-none shadow-inner-border -mx-5 sm:mx-auto sm:rounded-2xl',
        variant.containerClasses,
      )}
    >
      <h3 className={cn('text-xl font-display font-bold', variant.textColor)}>
        <variant.Icon className={cn('inline mr-3 mb-1', variant.textColor)} />
        {variant.title}
      </h3>
      <div className="relative">
        <div ref={contentRef} className="py-2">
          {children}
        </div>
      </div>
    </div>
  );
}

export default ExpandableCallout;

export const Note = ({ children }: { children: React.ReactNode }) => (
  <ExpandableCallout type="note">{children}</ExpandableCallout>
);
export const Wip = ({ children }: { children: React.ReactNode }) => (
  <ExpandableCallout type="wip">{children}</ExpandableCallout>
);
export const Pitfall = ({ children }: { children: React.ReactNode }) => (
  <ExpandableCallout type="pitfall">{children}</ExpandableCallout>
);
export const Deprecated = ({ children }: { children: React.ReactNode }) => (
  <ExpandableCallout type="deprecated">{children}</ExpandableCallout>
);