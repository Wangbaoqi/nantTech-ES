import aCallable from "@/internals/a-callable";


class PromiseA  {

  constructor(executor: any) {

    // 1. if NewTarget is undefined, throw a TypeError exception.
    if(typeof new.target === undefined) {
      throw new TypeError('must be constructed via new');
    }

    // 2. If IsCallable(executor) is false, throw a TypeError exception.
    aCallable(executor);





  }
}

