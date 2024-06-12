
// Applicative Functor 是一种高级抽象，比普通的 Functor 更强大。它提供了以下两个主要操作：
// 1. pure 或 of：将一个值放入上下文中。
// 2. ap：将一个带有上下文的函数应用于一个带有上下文的值。

class Applicative {
  static of(value: any) {
    throw new Error('of() method must be implemented')
  }

  ap(other: any) {
    throw new Error('ap() method must be implemented')
  }

}
class Maybe extends Applicative {
  static of(value: any) {
    return new Just(value);
  }

  static nothing() {
    return new Nothing();
  }
}

class Just extends Maybe {
  value: any
  constructor(value: any) {
    super();
    this.value = value;
  }

  map(fn:any) {
    return Maybe.of(fn(this.value));
  }

  ap(maybeFn: any) {
    return maybeFn.isNothing() ? Maybe.nothing() : maybeFn.map((fn:any) => this.value(fn));
  }

  isNothing() {
    return false;
  }

  toString() {
    return `Just(${JSON.stringify(this.value)})`;
  }
}

class Nothing extends Maybe {
  map(fn: any) {
    return this;
  }

  ap(maybeFn: any) {
    return this;
  }

  isNothing() {
    return true;
  }

  toString() {
    return 'Nothing';
  }
}

// * Application scenarios

// 1. 函数组合

const add = (x: number) => (y: number) => x + y;

const maybeAdd = Maybe.of(add);
const maybeValue1 = Maybe.of(5);
const maybeValue2 = Maybe.of(10);
const maybeValue3 = Maybe.nothing();

const step1 = maybeAdd.ap(maybeValue1)
const result = step1.ap(maybeValue2);

console.log(result.toString()); // Just(15)
console.log(maybeAdd.ap(maybeValue1).ap(maybeValue3)); // Just(15)

// 2. 表单验证

const validateName = (name: any) => name.length ? Maybe.of(name) : Maybe.nothing();
const validateAge = (age: any) => age > 0 ? Maybe.of(age) : Maybe.nothing();

const creator = (name: any) => (age: any) => ({name, age});

const mayBeCreator = Maybe.of(creator);
const mayBeName = validateName('John');
const mayBeAge = validateAge(10);
const step2 = mayBeCreator.ap(mayBeName).ap(mayBeAge);
console.log(step2.toString()); // Just({name: 'John', age: 10})

const mayBeAge1 = validateAge(-10);

console.log(mayBeCreator.ap(mayBeName).ap(mayBeAge1).toString()); // Nothing

// 3. 异步操作

const addAsync = (x: number) => (y: number) => (x + y);

const mayBeAddAsync = Promise.resolve(addAsync);
const mayBeValue1 = Promise.resolve(5);
const mayBeValue2 = Promise.resolve(10);

Promise.all([mayBeAddAsync, mayBeValue1, mayBeValue2])
  .then(([addAsync, value1, value2]) => addAsync(value1)(value2))
  .then(result => console.log(result, 'promise result'));



// 4. 解析和组合

const parseJSON = (str: any) => {
  try {
    return Maybe.of(JSON.parse(str))
  } catch (error) {
    return Maybe.nothing()
  }
}

const mayBeJson1 = parseJSON('{"name": "Nate"}');
const mayBeJson2 = parseJSON('{"age": 18}');
const combineJson = (obj1: any) => (obj2: any) => ({...obj1, ...obj2});

const mayBeCombineJson = Maybe.of(combineJson);
console.log(mayBeCombineJson.ap(mayBeJson1).ap(mayBeJson2).toString());
