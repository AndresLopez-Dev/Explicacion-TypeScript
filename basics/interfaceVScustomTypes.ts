type Person = {
  name: string;
  age: number
}

interface Employee extends Person{
  charge: string;
}

//No se pueden extender interdaces ni tipos en un typo
//Pero se pueden unir con --> &

type User = {
  id: string;
}

type Admin = User & Person

const myAdmin: Admin = {
  name: "HOLA",
  id: "789",
  age: 24
}

//Se puede agregar mas funciones a una interfas sin modificar la original

interface Developer{
  name:string,
  stack: string[]
}

interface Developer{
  phone: string
}

const dev: Developer = {
  name: "Hola",
  stack: ["Java","TypeScript"],
  phone: "123"
}