//Partial<T>
interface Task {
  id: number;
  name: string;
  description: string;
}

function updateTask(id: string, task: Partial <Task>) {
  console.log();
}

const newTask = {name: "Andres"};

updateTask("1",newTask);

//Required
interface ToDo{
  id?: number;
  name?: string;
}

const myToDo: Required<ToDo> = {
  id: 0,
  name: ""
}

//Records<Keys, Types> Para crear un objeto
//{Key: Value}

interface CatInfo {
  age: number;
  name: string;
}

type CatName = "Moi"|"Baris"|"Luffy"

const cats: Record<CatName, CatInfo> = {
  Moi: { age:2, name: "" },
  Baris: { age:2, name: "" },
  Luffy: { age:2, name: "" },
}

//Pick <T,Properties> --> Selecciona las propiedades que le pasemos

interface ToDo2 {
  title: string;
  description: string;
  completed: string;
}
type TodoPreview = Pick<ToDo2,"title" | "completed">;

const otherTodo: TodoPreview = {
  title: "",
  completed: ""
}

//Omit <T, Properties> --> Omite las propiedades que le pasemos
type TodoOmited = Omit<ToDo2,"description">;
const todoOmited: TodoOmited = {
  title: "",
  completed: ""
} 