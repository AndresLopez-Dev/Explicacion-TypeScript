class Animal{
  name: "Generic Animal"
  //Private solo nos da acceso en la misma clase
  private age: 10

  constructor(){

  }

  sayHi(){
    console.log("Grrr")
  }
}

const animal: Animal = new Animal();

class Dog extends Animal{
  //Protected solo nos da acceso en las clases que heredan
  protected type:"Pastor Aleman"

  constructor(){
    super();
  }
}

const dog: Dog = new Dog();