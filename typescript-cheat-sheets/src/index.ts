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
const obj: (string | string[]) = []

// Narrowing union types
if (Array.isArray(obj)) {
  console.log("obj is an array")
} else {
  console.log(obj)
}

// use "?" for optional or maybe null, use "!" for non-null assertion




// Generics
// Need to dig deepter

