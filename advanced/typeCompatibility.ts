//CASE 1
/* interface Pet {
  name: string;
}
class Dog {
  name: string;
}
let pet: Pet;
pet = new Dog(); */

//CASE 2
/* interface Pet {
  name: string;
}
let pet: Pet;
let dog = {name:"Lassie", owner: "Rudd"};
pet = dog; */

//CASE 3
/* interface Pet {
  name: string;
}
let dog = {name:"Lassie", owner: "Rudd"};
function greet(pet: Pet){
  console.log("Hello, "+pet.name);
}
greet(dog); */

//CASE 4
/* enum Status {
  Ready,
  Waiting,
}
enum Color {
  Red,
  Blue,
  Green,
}
let stat = Status.Ready;
stat = Color.Red;//Error */

//CASE 5
/* class Animal {
  feet: number;
  constructor(name: string, numFeet: number){}
}
class Size {
  feet: number;
  constructor(numFeet: number){}
}
let a: Animal;
let s: Size;
a = s;
s = a; */

//CASE 6
/* interface Empty<T>{}
let x: Empty<number>;
let y: Empty<string>;
x = y; */

//CASE 6
/* interface NotEmpty<T>{
  data: T;
}
let x: NotEmpty<number>;
let y: NotEmpty<string>;
x = y;  */