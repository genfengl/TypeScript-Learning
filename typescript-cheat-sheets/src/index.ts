// Common typescript uses

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
  name: string
  id: number

  constructor(name: string, id: number) {
    this.name = name
    this.id = id
  }
}

//? Is this the same as class UserAccount implements User?
const newUser: User = new UserAccount("Gerald", 1)

// Unions
type MyBool = true | false

// Literals
type WindowStates = "open" | "closed" | "minimised"
type OddNumberUnderTen = 1|3|5|7|9