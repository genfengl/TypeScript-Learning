// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
// //* tuple type with fixed type and length
//   role: [number, string]
// } = {
//   name: 'Maximilian',
//   age: 30,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author']
// };

const ADMIN = 0;
const READ_ONLY = 1;
const AUTHOR = 2;

//* enum type: a set of predefined constants
enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

// tuple allows push
// person.role.push("admin");

// any[]: array can contain any type of variable
let favouriteActivities: string[];
favouriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === Role.ADMIN) {
  console.log("is admin");
}
