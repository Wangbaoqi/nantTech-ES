export const COLORS_BY_TAGS = {
  DataType: 'dark:bg-sky-300 bg-sky-600/50',
  AbstractOperations: 'dark:bg-yellow-300 bg-yellow-500/50',
  Reference: 'dark:bg-red-300 bg-red-600/50',
  ObjectPrototype: 'dark:bg-purple-300 bg-purple-600/50',
  ScopeClosure: 'dark:bg-cyan-300 bg-cyan-600/50'
} as const;

export const TITLES_BY_TAG: {
  [key: string]: string;
} = {
  AbstractOperations:
    'bg-clip-text text-transparent select-none bg-gradient-to-r from-yellow-600 to-yellow-500 dark:from-yellow-300 dark:to-yellow-100',
  DataType:
    'bg-clip-text text-transparent select-none bg-gradient-to-r from-sky-400 to-sky-500 dark:from-sky-500 dark:to-sky-200',
  Reference:
    'bg-clip-text text-transparent select-none bg-gradient-to-r from-red-600 to-red-500 dark:from-red-300 dark:to-red-100',
  ObjectPrototype:
    'bg-clip-text text-transparent select-none bg-gradient-to-r from-purple-600 to-purple-500 dark:from-purple-400 dark:to-purple-100',
  ScopeClosure:
    'bg-clip-text text-transparent select-none bg-gradient-to-r from-cyan-600 to-cyan-500 dark:from-cyan-400 dark:to-cyan-100'
} as const;

export const BUTTON_BY_TAGS = {
  DataType:
    'bg-sky-500/10 text-sky-700 hover:text-sky-700 dark:text-sky-300 dark:bg-sky-300/10 hover:bg-sky-500/20 dark:hover:bg-sky-300/20',
  AbstractOperations:
    'bg-yellow-500/10 text-yellow-700 hover:text-yellow-700 dark:text-yellow-300 dark:bg-yellow-300/10 hover:bg-yellow-500/20 dark:hover:bg-yellow-300/20',
  Reference:
    'bg-red-500/10 text-red-700 hover:text-red-700 dark:text-red-300 dark:bg-red-300/10 hover:bg-red-500/20 dark:hover:bg-red-300/20',
  ScopeClosure:
    'bg-cyan-500/10 text-cyan-700 hover:text-cyan-700 dark:text-cyan-300 dark:bg-cyan-300/10 hover:bg-cyan-500/20 dark:hover:bg-cyan-300/20',
  ObjectPrototype:
    'bg-purple-500/10 text-purple-700 hover:text-purple-700 dark:text-purple-300 dark:bg-purple-300/10 hover:bg-purple-500/20 dark:hover:bg-purple-300/20'
} as const;

export const BORDERS_BY_DIFFICULTY: {
  [key: string]: string;
} = {
  DataType:
    'dark:hover:border-sky-200 hover:border-sky-500 dark:group-focus:border-sky-200 group-focus:border-sky-500',
  AbstractOperations:
    'dark:hover:border-yellow-200 hover:border-yellow-500 dark:group-focus:border-yellow-200 group-focus:border-yellow-500',
  Reference:
    'dark:hover:border-red-200 hover:border-red-500 dark:group-focus:border-red-200 group-focus:border-red-500',
  ObjectPrototype:
    'dark:hover:border-purple-200 hover:border-purple-500 dark:group-focus:border-purple-200 group-focus:border-purple-500',
  ScopeClosure:
    'dark:hover:border-cyan-200 hover:border-cyan-500 dark:group-focus:border-cyan-200 group-focus:border-cyan-500'
};

export const SHADOWS_BY_DIFFICULTY: {
  [key: string]: string;
} = {
  DataType:
    'hover:shadow-[0_0_16px_-2.4px_#bae6fd]  dark:hover:shadow-[0_0_16px_-2.4px_#bae6fd] dark:group-focus:shadow-[0_0_16px_-2.4px_#bae6fd]',
  AbstractOperations:
    'hover:shadow-[0_0_16px_-2.4px_#FBDBA7]  group-focus:shadow-[0_0_16px_-2.4px_#FBDBA7] dark:hover:shadow-[0_0_16px_-2.4px_#FBDBA7] dark:group-focus:shadow-[0_0_16px_-2.4px_#FBDBA7]',
  Reference:
    'hover:shadow-[0_0_16px_-2.4px_#fecaca] group-focus:shadow-[0_0_16px_-2.4px_#fecaca] dark:hover:shadow-[0_0_16px_-2.4px_#fecaca] dark:group-focus:shadow-[0_0_16px_-2.4px_#fecaca]',
  ObjectPrototype:
    'hover:shadow-[0_0_16px_-2.4px_#e9d5ff] group-focus:shadow-[0_0_16px_-2.4px_#e9d5ff] dark:hover:shadow-[0_0_16px_-2.4px_#e9d5ff] dark:group-focus:shadow-[0_0_16px_-2.4px_#e9d5ff]',
  ScopeClosure:
    'hover:shadow-[0_0_16px_-2.4px_#bae6fd] group-focus:shadow-[0_0_16px_-2.4px_#bae6fd] dark:hover:shadow-[0_0_16px_-2.4px_#bae6fd] dark:group-focus:shadow-[0_0_16px_-2.4px_#bae6fd]'
};

export const COLORS_BY_DIFFICULTY: {
  [key: string]: string;
} = {
  AbstractOperations:
    'dark:bg-yellow-400 bg-yellow-700 text-white dark:text-black ',
  DataType: 'dark:bg-sky-400 bg-sky-700 text-white dark:text-black ',
  Structure: 'dark:bg-green-400 bg-green-700 text-white dark:text-black ',
  Reference: 'dark:bg-red-400 bg-red-700 text-white dark:text-black ',
  ObjectPrototype:
    'dark:bg-purple-400 bg-purple-700 text-white dark:text-black ',
  ScopeClosure: 'dark:bg-cyan-400 bg-cyan-700 text-white dark:text-black '
};

type TypeSiteConfigNavItem = {
  title: string;
  link: string;
  activeLink: string;
  label: keyof typeof COLORS_BY_TAGS;
};

export const siteConfig = {
  title: 'NantTech ES',
  name: 'ECMAScript of Nant Tech',
  postTitle: 'Post of',
  description: 'ECMAScript that everything of Nant Tech blog',
  siteUrl: 'https://es.wangbaoqi.tech',
  author: 'WangBaoQi',
  email: 'wangbaoqi8839@gmail.com',
  github: 'https://github.com/wangbaoqi',
  links: {
    github: 'https://github.com/wangbaoqi',
    twitter: 'https://twitter.com/wangbaoqi',
    discord: 'https://discord.gg/9b6yyZKmH4'
  }
};

export const siteConfigNav: TypeSiteConfigNavItem[] = [
  {
    title: 'Type Grammar',
    activeLink: 'typeGrammar',
    link: '/docs/typeGrammar/dataType/languageType',
    label: 'DataType'
  },
  {
    title: 'Object Prototype',
    activeLink: 'objectPrototype',
    link: '/docs/objectPrototype/iteration',
    label: 'ObjectPrototype'
  },
  {
    title: 'Async Performance',
    activeLink: 'asyncPerformance',
    link: '/docs/asyncPerformance/iteration',
    label: 'AbstractOperations'
  },
  {
    title: 'Scope Closure',
    activeLink: 'scopeClosure',
    link: '/docs/scopeClosure/executeContext/environmentRecord',
    label: 'ScopeClosure'
  },
  {
    title: 'Reference',
    activeLink: 'reference',
    link: '/docs/reference/global/value',
    label: 'Reference'
  }
];
