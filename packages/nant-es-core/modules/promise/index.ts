import aCallable from "@/internals/a-callable";
import bind from "@/internals/function-bind";
import call from "@/internals/function-call";
import Queue from '@/internals/queue';
import {PromiseState } from './types';
import { set as setInternalState } from "@/internals/internal-state";
import internalStateGetterFor from '@/internals/internal-state-getter-for';
import isObject from "@/internals/is-object";
import { IsCallable } from "@/internals/is-callable";

const PROMISE = 'Promise';
const UNHANDLED_REJECTION = 'unhandledrejection';
const REJECTION_HANDLED = 'rejectionhandled';
const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';
const HANDLED = 1;
const UNHANDLED = 2;

const getInternalPromiseState = internalStateGetterFor(PROMISE);



const isThenable = (value: any): boolean | Function => {
  let then;
  return isObject(value) && IsCallable(then = value.then) ? then : false
}


const notify = (state: PromiseState, isReject: boolean) => {
  if(state.notify) return;
  state.notify = true;

}

class PromiseA  {

  constructor(executor: any) {

    // 1. if NewTarget is undefined, throw a TypeError exception.
    if(typeof new.target === undefined) {
      throw new TypeError('must be constructed via new');
    }

    // 2. If IsCallable(executor) is false, throw a TypeError exception.
    aCallable(executor);

    // 3. Let promise be ? OrdinaryCreateFromConstructor(NewTarget, "%Promise.prototype%", « [[PromiseState]], [[PromiseResult]], [[PromiseFulfillReactions]], [[PromiseRejectReactions]], [[PromiseIsHandled]] »).
    call(this.internal, this);

    var state = getInternalPromiseState(this);

    try {
      executor()
    } catch (error) {

    }

  }

  private internal(this: any) {
    setInternalState(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: new Queue(),
      rejection: false,
      state: PENDING,
      value: undefined
    })
  }
  private reject() {

  }
  private internalResolve(state: PromiseState, value: any, unWrap?: PromiseState) {
    if(state.done) return;

    state.done = true;
    if(unWrap) state = unWrap;

    try {
      if(state?.facade === value) throw new TypeError('A promise cannot be resolved with itself.');

      const then = isThenable(value);
      if(then) {

      }else {
        state.value = value;
        state.state = FULFILLED;
        notify(state, false);
      }

    } catch (error) {

    }
  }
}

