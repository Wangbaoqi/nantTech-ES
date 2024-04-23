
const arr = [1,2,3];

const iter: Iterator<number> = arr[Symbol.iterator]()

const itObj = iter.next(); // One-time
const itObj1 = iter.next(); // One-time


// 可迭代接口 @@iterator - [Symbol.iterator]
// [Symbol.iterator] 返回迭代器接口
// iterator object - { next() {}, return() {}, throw() {} }

class Counter {
  count: number;
  limit: number;
  constructor(num: number) {
    this.count = 1
    this.limit = num
  }

  next() {
    if(this.count <= this.limit) {
      return {
        value: this.count++,
        done: false
      }
    }
    return {
     value: undefined,
     done: true
    }
  }

  return(val?: number ) {
    return {
      value: val,
      done: true
    }
  }

  [Symbol.iterator]() {
    return this
  }
}