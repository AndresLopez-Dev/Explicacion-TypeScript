type Person = {
  name: string;
  code: string | number;
  description: string;
}

const newPerson: Person = {
  name: "Hola",
  code: "3223",
  description: "Hola mundo"
} 

type serviceRespon = string | null | number | undefined;
type userCharge = "admin" | "normal" | "payed" | "superUser";

let myUser: userCharge = "admin";