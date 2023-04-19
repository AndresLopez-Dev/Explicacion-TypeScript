let age: string = "20";
let agmonths: number = 20;
let isSenior: boolean = true;

let person: Object = {};
let fruits: Object[] = [{name:"Manzana"},{name:"Mango"}];

let response: any = "Hola";
response = 23;
response = true;
response = ["Hola",123];

function saludar(): void{
  console.log("Hola");
}

let response2: unknown;

let response3 = null;
let response4 = undefined;

//Tipos de datos con mas de un tipo de dato
let response5: number | null = 5;
response5?.toString();

//Crear tipos de datos personalizados
type typeResponse = string | undefined;
let responseProducto:typeResponse;
let responseClient:typeResponse;

//type ASSERTION
let message: any = "";
(message as string);
message.toString;
let newMessage = <string>message;