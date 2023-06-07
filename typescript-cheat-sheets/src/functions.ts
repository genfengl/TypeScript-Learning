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
