import CodeBlock from './CodeBlock';
import * as Components from '@nextui-org/react';
import { Language } from 'prism-react-renderer';
import clsx from 'clsx';
import ExpandableCallout from './ExpandableCallout';
import Link from './Link';

import { VirtualAnchor, virtualAnchorEncode } from '@/components';
// import { Image as NextImage } from '@nextui-org/react';

export interface LinkedHeadingProps {
  as: keyof JSX.IntrinsicElements;
  id?: string;
  linked?: boolean;
  children?: React.ReactNode;
  className?: string;
}

const linkedLevels: Record<string, number> = {
  h1: 0,
  h2: 1,
  h3: 2,
  h4: 3
};

const LinkedHeading: React.FC<LinkedHeadingProps> = ({
  as,
  linked = true,
  id: idProp,
  className,
  ...props
}) => {
  const Component = as;

  const level = linkedLevels[as] || 1;

  let id = idProp || virtualAnchorEncode(props.children as string);

  return (
    <Component
      className={clsx({ 'linked-heading': linked }, linked ? {} : className)}
      data-id={id}
      data-level={level}
      data-name={props.children}
      id={id}
      {...props}
    >
      {linked ? (
        <VirtualAnchor id={id}>{props.children}</VirtualAnchor>
      ) : (
        <>{props.children}</>
      )}
    </Component>
  );
};
const H1 = (p: JSX.IntrinsicElements['h1']) => (
  <LinkedHeading as='h1' className='leading-tight' {...p} />
);

const H2 = (p: JSX.IntrinsicElements['h2']) => (
  <LinkedHeading as='h2' className='leading-tight' {...p} />
);

const H3 = (p: JSX.IntrinsicElements['h3']) => (
  <LinkedHeading as='h3' className='leading-tight' {...p} />
);

const H4 = (p: JSX.IntrinsicElements['h4']) => (
  <LinkedHeading as='h4' className='leading-tight' {...p} />
);

const Strong = (p: JSX.IntrinsicElements['strong']) => (
  <strong className='font-bold text-inherit' {...p} />
);

const ErrorStrong = (p: JSX.IntrinsicElements['strong']) => (
  <strong className='font-bold text-inherit text-red-400' {...p} />
);

const WarningStrong = (p: JSX.IntrinsicElements['strong']) => (
  <strong className='font-bold text-inherit text-yellow-400' {...p} />
);

const NoteStrong = (p: JSX.IntrinsicElements['strong']) => (
  <strong className='font-bold text-inherit text-blue-400' {...p} />
);

const Pre = (p: JSX.IntrinsicElements['pre']) => (
  <pre className='-mx-6 my-4' {...p} />
);

const Table: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <div className='overflow-x-auto overflow-y-hidden'>
      <table className='border-collapse border-spacing-0 w-full'>
        {children}
      </table>
    </div>
  );
};

const Thead: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <thead
      className={clsx(
        '[&>tr]:h-12 [&>tr]:border-t',
        '[&>tr>th]:py-0 ',
        '[&>tr>th]:border-1 [&>tr>th]:border-neutral-300 dark:[&>tr>th]:border-neutral-700',
        '[&>tr>th]:align-middle',
        '[&>tr>th]:bg-default-200/20',
        'dark:[&>tr>th]:bg-default-600/10',
        '[&>tr>th]:text-default-600 [&>tr>th]:text-md',
        '[&>tr>th]:text-left [&>tr>th]:pl-2',
      )}
    >
      {children}
    </thead>
  );
};


const Tbody: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <tbody
      className={clsx(
        '[&>tr]:border-t [&>tr]:border-b-1 [&>tr]:border-t-neutral-200 [&>tr]:dark:border-t-neutral-200)',
        '[&>tr>td]:p-2',
        '[&>tr>td]:align-middle',
      )}
    >
      {children}
    </tbody>
  );
};


const Trow: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return <tr>{children}</tr>;
};

const Tcol: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <td className='text-sm border border-neutral-300 dark:border-neutral-700 p-2 max-w-[200px] overflow-auto whitespace-normal break-normal'>
      {children}
    </td>
  );
};

const List: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <ul className='list-disc flex flex-col gap-2 ml-4 mt-2 [&>li]:pl-0.5 [&>li>strong]:text-fuchsia-500 dark:[&>li>strong]:text-purple-300'>
      {children}
    </ul>
  );
};

const Blockquote = (
  props: Omit<React.HTMLAttributes<HTMLElement>, 'color'>
) => {
  return (
    <blockquote
      className='py-4 px-8 my-8 bg-zinc-200 dark:bg-zinc-800 bg-opacity-50 rounded-2xl leading-6 flex relative'
      {...props}
    >
      <span className='block relative'>{props.children}</span>
    </blockquote>
  );
};

const Note = ({ children }: { children: React.ReactNode }) => (
  <ExpandableCallout type='note'>{children}</ExpandableCallout>
);
const Wip = ({ children }: { children: React.ReactNode }) => (
  <ExpandableCallout type='wip'>{children}</ExpandableCallout>
);
const Pitfall = ({ children }: { children: React.ReactNode }) => (
  <ExpandableCallout type='pitfall'>{children}</ExpandableCallout>
);
const Deprecated = ({ children }: { children: React.ReactNode }) => (
  <ExpandableCallout type='deprecated'>{children}</ExpandableCallout>
);

const InlineCode = ({ children }: { children?: React.ReactNode }) => {
  return (
    <Components.Code className='font-normal bg-transparent px-0 py-0 text-warning-600'>
      {children}
    </Components.Code>
  );
};

const Code = ({
  className,
  children,
  meta
}: {
  children?: React.ReactNode;
  className?: string;
  meta?: string;
}) => {
  const isMultiLine = (children as string)?.split?.('\n')?.length > 2;
  const language = (className?.replace(/language-/, '') ?? 'jsx') as Language;
  const codeString = String(children).trim();

  if (!className) {
    return <InlineCode>{children}</InlineCode>;
  }

  return (
    <Components.Snippet
      disableTooltip
      fullWidth
      hideSymbol
      classNames={{
        base: clsx(
          'px-0 py-4 bg-default-900 dark:bg-default-500/10 text-default-900 dark:text-default-500 rounded',
          {
            'items-start': isMultiLine
          },
          className
        ),
        pre: 'font-light w-full text-sm font-wotfard',
        copyButton: 'text-lg text-zinc-500 mr-2'
      }}
      codeString={codeString}
      onCopy={() => {}}
    >
      <CodeBlock
        codeString={codeString}
        language={language}
        metaString={meta}
      />
    </Components.Snippet>
  );
};

function Image(props: any) {
  return (
    <img
      className='rounded  my-6 max-w-[calc(min(700px,100%))]'
      alt='an image'
      {...props}
    />
  );
}

function CodeStep({ children, step }: { children: any; step: number }) {
  return (
    <span
      data-step={step}
      className={clsx(
        'code-step bg-opacity-20 dark:bg-opacity-20 relative rounded px-[6px] mr-1 py-[1.5px] border-b-[2px] border-opacity-60',
        {
          'bg-blue-600 border-blue-500 text-blue-700 dark:text-blue-300':
            step === 1,
          'bg-yellow-600 border-yellow-500 text-yellow-700 dark:text-yellow-300':
            step === 2,
          'bg-purple-600 border-purple-500 text-purple-700 dark:text-purple-300':
            step === 3,
          'bg-green-600 border-green-500 text-green-700 dark:text-green-300':
            step === 4
        }
      )}
    >
      {children}
    </span>
  );
}

export const MDXComponents = {
  // NextUI
  ...Components,
  blockquote: Blockquote,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  strong: Strong,
  pre: Pre,
  code: Code,
  table: Table,
  thead: Thead,
  tbody: Tbody,
  tr: Trow,
  td: Tcol,
  ul: List,
  img: Image,
  a: Link,
  Strong,
  NoteStrong,
  ErrorStrong,
  WarningStrong,
  Note,
  Wip,
  Pitfall,
  Deprecated,
  CodeStep,
  Blockquote
  // Sandpack
};
