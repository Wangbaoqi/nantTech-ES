
import isPure from "./is-pure";
import globalObject from "./global";

const SHARED = '__nant-es_shared__';
const sharedStore = globalObject[SHARED] || (globalObject[SHARED] = {});

(sharedStore.versions || (sharedStore.versions = [])).push({
  version: '1.0.0',
  mode: isPure ? 'pure' : 'global',
  copyright: 'Copyright (c) 2024, wangbaoqi',
})

export default sharedStore;