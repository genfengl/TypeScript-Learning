// Common typescript uses

// config: strictness
// noImplicity and strickNullChecks?

// Object
const user: User = {
  name: "Gerald",
  id: 0,
};

interface User {
  name: string;
  id: number;
}

class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

//? Is this the same as class UserAccount implements User?
const newUser: User = new UserAccount("Gerald", 1);

// Unions
type MyBool = true | false;

// Literals
type WindowStates = "open" | "closed" | "minimised";
type OddNumberUnderTen = 1 | 3 | 5 | 7 | 9;

// Can be string or an array of strings
const obj: string | string[] = [];

// Narrowing union types
if (Array.isArray(obj)) {
  console.log("obj is an array");
} else {
  console.log(obj);
}

// use "?" for optional or maybe null, use "!" for non-null assertion

// "typeof" for narrowing
function padLeft(padding: number | string, input: string) {
  if (typeof padding === "number") {
    return " ".repeat(padding) + input;
  }
  return padding + input;
}

// "in" operator for narrowing
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function move(animal: Fish | Bird) {
  // if the key "swim" is in the object animal (returns true), then return animal.swim()
  if ("swim" in animal) {
    return animal.swim();
  }
  //  else return animal.fly()
  return animal.fly();
}

// "instanceof"
function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}

// casting with "as"
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

// Generics
// Need to dig deepter
