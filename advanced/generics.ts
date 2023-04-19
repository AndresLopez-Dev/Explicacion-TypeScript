//Dato generico <T>
interface MyInterface<T>{
  field:T
}

const myValue: MyInterface<number> = {
  field: 5
} 

//Ejemplo

interface UserResponse{
  id: number
  name: string
}

class HttpResponse<T>{
  data:T;
  status: number;
  code: number;

  constructor(data:T, status: number, code: number){
    this.data = data;
    this.status = status;
    this.code = code;
  }
}

const fetchUser = ():UserResponse =>  {
  return {id: 1, name: "Andres"}
}

const myUser = fetchUser();

const res = new HttpResponse(myUser,200,1);
console.log(res);

/* ------------------------------------------- */

class CRUD <T>{
  private items: T[];
  constructor(items: T[]){
    this.items = items;
  }

  addItem(item: T) {
    this.items.push(item);
  }

  addLastItem() {
    this.items.pop();
  }

  printItems(): T[] {
    return this.items;
  }
}

const users: UserResponse[] = [
  {id: 1, name: "Andres"},
  {id: 2, name: "David"},
  {id: 3, name: "Oscar"},
]

const userCRUD: CRUD<UserResponse> = new CRUD(users);
userCRUD.addItem({id: 4, name:"TypeScript"});
console.log(userCRUD.printItems());