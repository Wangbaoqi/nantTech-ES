

// exec function
export default function exec(fn: Function) {
  try {
    return !!fn();
  } catch (error) {
    return true
  }
}