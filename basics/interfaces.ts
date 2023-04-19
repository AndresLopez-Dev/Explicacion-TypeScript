interface Person {
  name: string,
  code: string | number,
  charge: number,
  description?: string
  sayHello?: () => string;
}

let person: Person ={
  name: "Andres",
  code: "123",
  charge: 1,
  sayHello:() => "Hola"
}

let person2: Person ={
  name: "David",
  code: "456",
  charge: 2,
  description:"Hola mundo"
}

person.description?.toUpperCase();