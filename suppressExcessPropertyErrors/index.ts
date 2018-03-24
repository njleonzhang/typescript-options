export class A {
  name: string
  age = 10

  constructor(age: number) {
    this.age = age
  }
}

let a: A = {
  name: 'leon',
  age: 30,
  gender: 'male'
}
