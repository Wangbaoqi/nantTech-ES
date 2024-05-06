import sharedStore from "./shared-store";

const $TypeError = TypeError;
const create = Object.create;

const store = sharedStore.state || (sharedStore.state = new WeakMap());

store.get = store.get;
store.set = store.set;
store.has = store.has;


export function get(it: string) {
  return store.get(it) || create(null);
}

export function set(it: string, metadata: any = {}) {
  if(store.has(it)) throw new $TypeError('Object already initialized');
  // 假象
  metadata.facade = it;
  store.set(it, metadata);
  return metadata;
}

export function enforce(it: string) {
  return store.has(it) ? get(it): set(it, create(null));
}