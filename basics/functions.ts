const sayHi = (name)=>{
  console.log("Hola "+name)
}
sayHi("Andres");

function sayGoodbye(name){
  console.log("Adios "+name)
}
sayGoodbye("David");

interface ResponseServiceCD{
  id: number,
  name:string,
  charge:string,
  number:number
}

const response: ResponseServiceCD = {
  id: 1,
  name: "Andres",
  charge: "Developer",
  number: 4
};

function show({ name, ...other}:ResponseServiceCD): number{
  console.log(name)
  console.log(other)
  return 1;
}

show(response)