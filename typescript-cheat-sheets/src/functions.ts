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
