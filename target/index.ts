export function test() {
  return new Promise(resolve => {
    let a = {
      a: 1,
      b: 2
    }

    resolve({
      c: 3,
      ...a
    })
  })
}
