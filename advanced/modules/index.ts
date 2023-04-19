import * as utils from "./utils.module";
import { PI, generateId } from "./utils.module";
import {User as Person} from"./utils.module";

const myNumber = 10 * PI;

const myUser: Person = {
  id: generateId().toString(),
  name: "Andres"
}

console.log(myNumber);