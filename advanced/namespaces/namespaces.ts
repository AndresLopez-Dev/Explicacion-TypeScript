namespace DatabaseEntity{
  export class User{
    constructor(public name: string){
    }
  }

  const myUser = new User("Andres");
  console.log(myUser);
}
