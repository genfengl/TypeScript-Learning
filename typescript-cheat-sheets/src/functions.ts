// Call Signature
// Define a type `DescribableFunction` which represents a function with an additional `description` property.
type DescribableFunction = {
  description: string; // Property: description is a string
  (someArg: number): boolean; // Function signature: takes a number argument and returns a boolean
};

// Define a function `doSomething` that takes a parameter `fn` of type `DescribableFunction`.
function doSomething(fn: DescribableFunction) {
  console.log(fn.description + " returned " + fn(6)); // Log the description and the result of calling the function with the argument 6
}

// Define a function `myFunc` that takes a number argument and returns true if the argument is greater than 3, false otherwise.
function myFunc(someArg: number) {
  return someArg > 3;
}
myFunc.description = "default description"; // Set the `description` property of `myFunc` to "default description"
doSomething(myFunc); // Call `doSomething` with `myFunc` as an argument

// Construct Signatures
// Define a type SomeObject which represents an object with dynamic key-value pairs
type SomeObject = { [key: string]: any };

// Define a type SomeConstructor which represents a constructor function
// A constructor function takes a string argument and constructs (returns) an object of type SomeObject
type SomeConstructor = {
  new (s: string): SomeObject; // Construct signature: takes a string argument and constructs (returns) an object of type SomeObject
};

// Define a function fn that takes a parameter ctor of type SomeConstructor
// The function creates a new instance of the constructor function by invoking it with the argument "hello"
// The constructed object is then returned by the function
function fn(ctor: SomeConstructor) {
  return new ctor("hello");
}

// Generic function constraints
// Define a function `longest` that takes two parameters `a` and `b`.
// The `Type` generic constraint ensures that `a` and `b` must have a `length` property of type `number`.
function longest<Type extends { length: number }>(a: Type, b: Type) {
  // Compare the lengths of `a` and `b`.
  if (a.length >= b.length) {
    return a; // If `a` has a longer length or equal length, return `a`.
  } else {
    return b; // Otherwise, return `b`.
  }
}

// `longerArray` is inferred to be of type 'number[]'
const longerArray = longest([1, 2], [1, 2, 3]);

// `longerString` is inferred to be of type 'alice' | 'bob'
const longerString = longest("alice", "bob");

// Error! Numbers don't have a 'length' property
//! const notOK = longest(10, 100);
