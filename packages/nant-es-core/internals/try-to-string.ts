
export default function tryToString(arg: any) {
  try {
    return String(arg)
  } catch(e) {
    return 'Object'
  }
}