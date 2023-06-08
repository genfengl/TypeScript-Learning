// readonly Properties
// readonly properties can also change via aliasing.
interface Person {
  name: string;
  age: number;
}

interface ReadonlyPerson {
  readonly name: string;
  readonly age: number;
}

let writablePerson: Person = {
  name: "Person McPersonface",
  age: 42,
};

// works
let readonlyPerson: ReadonlyPerson = writablePerson;

console.log(readonlyPerson.age); // prints '42'
writablePerson.age++;
console.log(readonlyPerson.age); // prints '43'

// Extending Types (use "extend")
interface BasicAddress {
  name?: string;
  street: string;
  city: string;
  country: string;
  postalCode: string;
}

interface AddressWithUnit extends BasicAddress {
  unit: string;
}

// Intersection Types (use "&")
interface Colorful {
  color: string;
}
interface Circle {
  radius: number;
}

type ColorfulCircle = Colorful & Circle;

// Generic Object Types
interface Box<Type> {
  contents: Type;
}

interface Apple {
  // ....
}

// Same as '{ contents: Apple }'.
type AppleBox = Box<Apple>;


// Array and ReadonlyArray
const arr1: string[] = ["hello", "world"]
const arr2: Array<string> = ["goodbye", "people"]
const readonlyString: ReadonlyArray<string> = ["readonly"]