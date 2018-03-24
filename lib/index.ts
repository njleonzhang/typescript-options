export default function test() {
  let a = 1
  let b = new Promise(resolve => {
    resolve(1)
  })
  return a
}
