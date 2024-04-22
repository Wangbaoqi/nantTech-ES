
const arr = [1,2,3];

const iter: Iterator<number> = arr[Symbol.iterator]()

const itObj = iter.next(); // One-time
const itObj1 = iter.next(); // One-time
