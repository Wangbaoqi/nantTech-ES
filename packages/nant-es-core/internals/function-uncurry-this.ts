
import NATIVE_BIND from './function-bind-native';

const FunctionPrototype = Function.prototype;
const call = FunctionPrototype.call;

const unCurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);

export default unCurryThisWithBind || function unCurryThis(fn: Function) {
  const arg = arguments;
  return function() {
    return call.apply(fn, [arg]);
  }
}