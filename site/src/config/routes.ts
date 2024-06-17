import { IconNotepadDash, IconReact, IconComponent } from '@/components/icons/';

import {
  Castle as IconOverview,
  Glasses as IconGlasses,
  DatabaseBackup,
  ArrowDown01,
  GitCompare,
  Shell,
  Microscope
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
    path: '/docs/typeGrammar',
    icon: IconOverview,
    collapsed: false,
    items: [
      {
        name: 'Language Type',
        path: '/docs/typeGrammar/languageType'
      },
      {
        name: 'Specification Type',
        path: '/docs/typeGrammar/specificationType'
      }
    ]
  },
  {
    name: 'Abstract Operations',
    path: '/docs/typeGrammar/abstract',
    icon: DatabaseBackup,
    collapsed: false,
    items: [
      {
        name: 'Type Conversion',
        path: '/docs/typeGrammar/typeConversion'
      },
      {
        name: 'Number Conversion',
        path: '/docs/typeGrammar/numberConversion'
      },
      {
        name: 'Comparison Operation',
        path: '/docs/typeGrammar/comparisonOperation'
      }
    ]
  }
];

const asyncPerformance = [
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
