// Keyof Type Operator
type Point = { x: number; y: number };
type P = keyof Point;

// Typeof Type Operator
let s = "hello";
let n: typeof s;


function f() {
  return { x: 10, y: 3 };
}
type Q = ReturnType<typeof f>;
// type Q = {
//   x: number;
//   y: number;
// }

// Indexed Access Types
type Person1 = { age: number; name: string; alive: boolean };
type Age = Person1["age"];

type I1 = Person1["age" | "name"];
// type I1 = string | number
 
type I2 = Person1[keyof Person1];
// type I2 = string | number | boolean
 
type AliveOrName = "alive" | "name";
type I3 = Person1[AliveOrName];
// type I3 = string | boolean

const MyArray = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 23 },
  { name: "Eve", age: 38 },
];
type Person2 = typeof MyArray[number];
// type Person2 = {
//   name: string;
//   age: number;
// }
type Age2 = typeof MyArray[number]["age"]
// type Age2 = number

//* Or
//* type Age2 = Person2["age"]

