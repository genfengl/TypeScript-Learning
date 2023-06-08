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
type Person2 = (typeof MyArray)[number];
// type Person2 = {
//   name: string;
//   age: number;
// }
type Age2 = (typeof MyArray)[number]["age"];
// type Age2 = number

//* Or
//* type Age2 = Person2["age"]

// Conditional Types
interface Animal {
  live(): void;
}
interface Dog extends Animal {
  woof(): void;
}

type Example1 = Dog extends Animal ? number : string;
// type Example1 = number

type Example2 = RegExp extends Animal ? number : string;
// type Example2 = string

interface IdLabel {
  id: number /* Defines the id property as a number */;
}

interface NameLabel {
  name: string /* Defines the name property as a string */;
}

// The following type declaration defines a conditional type called NameOrId.
// It takes a type parameter T that extends either number or string.
type NameOrId<T extends number | string> = T extends number
  ? IdLabel // If T extends number, the type NameOrId returns IdLabel interface.
  : NameLabel; // If T extends string, the type NameOrId returns NameLabel interface.

// Mapped Types
type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};
type Features = {
  darkMode: () => void;
  newUserProfile: () => void;
};

type FeatureOptions = OptionsFlags<Features>;
// type FeatureOptions = {
//   darkMode: boolean;
//   newUserProfile: boolean;
// }

// Removes 'readonly' attributes from a type's properties
type CreateMutable<Type> = {
  -readonly [Property in keyof Type]: Type[Property];
};

type LockedAccount = {
  readonly id: string;
  readonly name: string;
};

type UnlockedAccount = CreateMutable<LockedAccount>;
// type UnlockedAccount = {
//   id: string;
//   name: string;
// }

// Removes 'optional' attributes from a type's properties
type Concrete<Type> = {
  [Property in keyof Type]-?: Type[Property];
};

type MaybeUser = {
  id: string;
  name?: string;
  age?: number;
};

type User3 = Concrete<MaybeUser>;
// type User3 = {
//   id: string;
//   name: string;
//   age: number;
// }

type Getters<Type> = {
  [Property in keyof Type as `get${Capitalize<
    string & Property
  >}`]: () => Type[Property];
};

interface Person {
  name: string;
  age: number;
  location?: string;
}

type LazyPerson = Getters<Person>;
// type LazyPerson = {
//   getName: () => string;
//   getAge: () => number;
//   getLocation: () => string;
// }
