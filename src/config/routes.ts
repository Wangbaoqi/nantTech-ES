import { IconNotepadDash, IconReact, IconComponent } from '@/components/icons/';

import {
  Ratio,
  Proportions,
  PencilRuler,
  PresentationIcon,
  Castle as IconOverview,
  Glasses as IconGlasses,
  DatabaseBackup,
  ArrowDown01,
  GitCompare,
  Shell,
  Microscope,
  TableProperties
} from 'lucide-react';
export type sourceRoutesType = {
  [key: string]: sourceRoutesItemType[];
};

export type sourceRoutesItemType = {
  title?: string;
  name?: string;
  path: string;
  collapsed?: boolean;
  icon?: any;
  items?: sourceRoutesItemType[];
};

const typeGrammar = [
  {
    name: 'Data Type',
    path: '/docs/typeGrammar/dataType',
    icon: Ratio,
    collapsed: false,
    items: [
      {
        name: 'Language Type',
        path: '/docs/typeGrammar/dataType/languageType'
      },
      {
        name: 'Specification Type',
        path: '/docs/typeGrammar/dataType/specificationType'
      },
      {
        name: 'Number Type',
        path: '/docs/typeGrammar/dataType/number'
      }
    ]
  },
  {
    name: 'Abstract Operations',
    path: '/docs/typeGrammar/operations',
    icon: Proportions,
    collapsed: false,
    items: [
      {
        name: 'Type Conversion',
        path: '/docs/typeGrammar/operations/typeConversion'
      },
      {
        name: 'Comparison Operation',
        path: '/docs/typeGrammar/operations/comparisonOperation'
      }
    ]
  },
  {
    name: 'Grammar',
    path: '/docs/typeGrammar/grammar',
    icon: PencilRuler,
    collapsed: false,
    items: [
      {
        name: 'Lexical Grammar',
        path: '/docs/typeGrammar/grammar/lexical'
      },
      {
        name: 'Expressions',
        path: '/docs/typeGrammar/grammar/expressions'
      }
    ]
  },
  {
    name: 'Additional Features',
    path: '/docs/typeGrammar/features',
    icon: TableProperties,
    collapsed: false,
    items: [
      {
        name: 'Web Browser Features',
        path: '/docs/typeGrammar/features/web'
      },
      {
        name: 'Notational Conventions',
        path: '/docs/typeGrammar/features/conventions'
      },
      {
        name: 'Regular Expression',
        path: '/docs/typeGrammar/features/regularExp'
      },
      {
        name: 'Template String',
        path: '/docs/typeGrammar/features/templateString'
      }
    ]
  },
  {
    name: 'Additional Standards',
    path: '/docs/typeGrammar/other',
    icon: PresentationIcon,
    collapsed: false,
    items: [
      {
        name: 'Unicode',
        path: '/docs/typeGrammar/other/unicode'
      },
      {
        name: 'Terminology',
        path: '/docs/typeGrammar/other/terms'
      }
    ]
  }
];

const asyncPerformance = [
  {
    name: 'Executable Code and Contexts',
    path: '/docs/asyncPerformance/executeContext',
    icon: Shell,
    collapsed: false,
    items: [
      {
        name: 'Execution Contexts',
        collapsed: false,
        icon: '',
        path: '/docs/asyncPerformance/executeContext/context'
      }
    ]
  },
  {
    name: 'Iteration',
    path: '/docs/asyncPerformance/iteration',
    icon: Shell
  },
  {
    name: 'Promise',
    path: '/docs/asyncPerformance/promise',
    icon: Microscope,
    collapsed: false,
    items: [
      {
        name: 'Promise Execute',
        collapsed: false,
        icon: '',
        path: '/docs/asyncPerformance/promise/promiseExecute'
      },
      {
        name: 'Promise Abstract Operation',
        collapsed: false,
        icon: '',
        path: '/docs/asyncPerformance/promise/promiseOperations'
      },
      {
        name: 'Promise Constructor',
        collapsed: false,
        icon: '',
        path: '/docs/asyncPerformance/promise/promiseConstructor'
      },
      {
        name: 'Promise Job',
        collapsed: false,
        icon: '',
        path: '/docs/asyncPerformance/promise/promiseJob'
      },
      {
        name: 'Property Promise Constructor',
        collapsed: false,
        icon: '',
        path: '/docs/asyncPerformance/promise/propertyPromiseConstructor'
      },
      {
        name: 'Property Promise Prototype',
        collapsed: false,
        icon: '',
        path: '/docs/asyncPerformance/promise/propertyPromisePrototype'
      }
    ]
  }
];

const objectPrototype = [
  {
    name: 'Iteration',
    path: '/docs/objectPrototype/iteration',
    icon: Shell
  },
  {
    name: 'Prototype',
    path: '/docs/objectPrototype/prototype',
    icon: Microscope
  }
];

const scopeClosure = [];

const reference = [
  {
    name: 'Global Object',
    path: '/docs/reference/global/value',
    icon: IconOverview,
    collapsed: false,
    items: [
      {
        name: 'Global Value',
        path: '/docs/reference/global/value'
      },
      {
        name: 'Global Function',
        path: '/docs/reference/global/function'
      },
      {
        name: 'Global Constructor',
        path: '/docs/reference/global/constructor'
      },
      {
        name: 'Global Other',
        path: '/docs/reference/global/other'
      }
    ]
  },
  {
    name: 'Fundamental Object',
    path: '/docs/reference/fundamental',
    icon: IconOverview,
    collapsed: false,
    items: [
      {
        name: 'Object Objects',
        path: '/docs/reference/fundamental/object'
      },
      {
        name: 'Function Objects',
        path: '/docs/reference/fundamental/function'
      },
      {
        name: 'Boolean Objects',
        path: '/docs/reference/fundamental/boolean'
      },
      {
        name: 'Symbol Objects',
        path: '/docs/reference/fundamental/symbol'
      },
      {
        name: 'Error Objects',
        path: '/docs/reference/fundamental/error'
      }
    ]
  },
  {
    name: 'Numbers Dates',
    path: '/docs/reference/numbers',
    icon: IconOverview,
    collapsed: false,
    items: [
      {
        name: 'Number Objects',
        path: '/docs/reference/numbers/number'
      },
      {
        name: 'Bigint Objects',
        path: '/docs/reference/numbers/bigint'
      },
      {
        name: 'Math Objects',
        path: '/docs/reference/numbers/math'
      },
      {
        name: 'Date Objects',
        path: '/docs/reference/numbers/date'
      }
    ]
  },
  {
    name: 'Text Processing',
    path: '/docs/reference/text',
    icon: IconOverview,
    collapsed: false,
    items: [
      {
        name: 'String Objects',
        path: '/docs/reference/text/string'
      },
      {
        name: 'RegExp Objects',
        path: '/docs/reference/text/regexp'
      }
    ]
  },
  {
    name: 'Indexed Collections',
    path: '/docs/reference/indexed',
    icon: IconOverview,
    collapsed: false,
    items: [
      {
        name: 'Array Objects',
        path: '/docs/reference/indexed/array'
      },
      {
        name: 'TypedArray Objects',
        path: '/docs/reference/indexed/typedArray'
      }
    ]
  },
  {
    name: 'Keyed Collections',
    path: '/docs/reference/keyed',
    icon: IconOverview,
    collapsed: false,
    items: [
      {
        name: 'Map Objects',
        path: '/docs/reference/keyed/map'
      },
      {
        name: 'Set Objects',
        path: '/docs/reference/keyed/set'
      },
      {
        name: 'Weakmap Objects',
        path: '/docs/reference/keyed/weakmap'
      },
      {
        name: 'Weakset Objects',
        path: '/docs/reference/keyed/weakset'
      }
    ]
  },
  {
    name: 'Structured Data',
    path: '/docs/reference/structured',
    icon: IconOverview,
    collapsed: false,
    items: [
      {
        name: 'ArrayBuffer Objects',
        path: '/docs/reference/structured/arrayBuffer'
      },
      {
        name: 'SharedArrayBuffer Objects',
        path: '/docs/reference/structured/sharedArrayBuffer'
      },
      {
        name: 'DataView Objects',
        path: '/docs/reference/structured/dataView'
      },
      {
        name: 'Atomic Objects',
        path: '/docs/reference/structured/atomic'
      },
      {
        name: 'JSON Objects',
        path: '/docs/reference/structured/json'
      }
    ]
  },
  {
    name: 'Control Abstraction Object',
    path: '/docs/reference/control',
    icon: IconOverview,
    collapsed: false,
    items: [
      {
        name: 'Iteration Objects',
        path: '/docs/reference/control/iteration'
      },
      {
        name: 'Promise Objects',
        path: '/docs/reference/control/promise'
      },
      {
        name: 'GeneratorFunction Objects',
        path: '/docs/reference/control/generatorFunction'
      },
      {
        name: 'AsyncGeneratorFunction Objects',
        path: '/docs/reference/control/asyncGeneratorFunction'
      },
      {
        name: 'Generator Object',
        path: '/docs/reference/control/generatorObject'
      },
      {
        name: 'AsyncGenerator Object',
        path: '/docs/reference/control/asyncGeneratorObject'
      },
      {
        name: 'AsyncFunction Object',
        path: '/docs/reference/control/asyncFunction'
      }
    ]
  },
  {
    name: 'Reflection',
    path: '/docs/reference/reflection',
    icon: IconOverview,
    collapsed: false,
    items: [
      {
        name: 'Reflect Objects',
        path: '/docs/reference/reflection/reflect'
      },
      {
        name: 'Proxy Objects',
        path: '/docs/reference/reflection/proxy'
      },
      {
        name: 'Module Namespace Objects',
        path: '/docs/reference/reflection/namespace'
      }
    ]
  }
];

export const sourceRoutes: sourceRoutesType = {
  typeGrammar,
  asyncPerformance,
  reference
};
