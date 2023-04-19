//Interface es un esqueleto y te obliga a implementar todo lo que tiene dentro
interface PersonInterface {
  name: string,
  code: string | number,
  charge: number,
  description?: string
  sayHello?: () => string;
}

class PersonClass {
  sayHello(){
    console.log("Hola")
  }
}