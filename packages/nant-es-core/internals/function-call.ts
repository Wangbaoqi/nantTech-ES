
import NATIVE_BIND from './function-bind-native';

const callFn = Function.prototype.call;

const call = NATIVE_BIND ? callFn.bind(callFn) : function() {
  const arg = arguments;
  return callFn.apply(callFn, [arg]);
}

export default call;

