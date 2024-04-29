
import sharedStore from './shared-store';

export default function shared(key: string, value: any) {
  return sharedStore[key] || (sharedStore[key] = value);
}