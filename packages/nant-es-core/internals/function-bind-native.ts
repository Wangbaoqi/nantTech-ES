
export default function functionBindNative() {
  const test = (function() { /* empty */ }).bind(null);
  const testIsCallable = typeof test != 'function' || test.hasOwnProperty('prototype');
  return !testIsCallable
}