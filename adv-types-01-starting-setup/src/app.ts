// interface Admin = {
//     name: string
//     privileges: string[]
// }

// interface Employee = {
//     name: string
//     startDate: Date
// }

// interface ElevatedEmployee extends Employee, Admin {}

type Admin = {
  name: string
  privileges: string[]
}

type Employee = {
  name: string
  startDate: Date
}

//* intersection type using '&'
type ElevatedEmployee = Admin & Employee

const e1: ElevatedEmployee = {
  name: 'Max',
  privileges: ['create-server'],
  startDate: new Date()
}

type Combinable = string | number
type Numeric = number | boolean

type Universal = Combinable & Numeric

// * function overloads: identify different combination of argument types for a function
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: Combinable, b: Combinable) {
  //* this is a type guard using 'typeof'
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString()
  }
  return a + b
}

const result = add('Max', 'Schwarz')
result.split(' ')

const fetchedUserData = {
  id: 'u1',
  name: 'Max',
  job: {title: 'CEO', description: 'My own company'}
}

// * if job exists ...
// console.log(fetchedUserData.job && fetchedUserData.job.title);
console.log(fetchedUserData?.job?.title);

const userInput = null

// * null or undefined ?? 'FALLBACK'
const storedData = userInput ?? 'DEFAULT'



type UnknownEmployee = Employee | Admin

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log('Name: ' + emp.name);
  // * type guard using 'in'
  if ('privileges' in emp) {
    console.log('Privileges: ' + emp.privileges);
  }
  if ('startDate' in emp) {
    console.log('StartDate: ' + emp.startDate);
  }
}

printEmployeeInformation(e1)

class Car {
  drive() {
    console.log('Driving...');

  }
}

class Truck {
  drive() {
    console.log('Driving a truck...');
  }

  loadCargo(amount: number) {
    console.log('Loading cargo ...' + amount);
  }
}

type Vehicle = Car | Truck

const v1 = new Car()
const v2 = new Truck()

function useVehicle(vehicle: Vehicle) {
  vehicle.drive()
  if ('loadCargo' in vehicle) {
    vehicle.loadCargo(1000)
  }
  // * use 'instaceof' to type guard
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(8000)
  }
}

useVehicle(v1)
useVehicle(v2)

interface Bird {
  type: 'bird'
  flyingSpeed: number
}

interface Horse {
  type: 'horse'
  runningSpeed: number
}

type Animal = Bird | Horse

function moveAnimal(animal: Animal) {
  let speed
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed
      break

  }
  console.log('Moving at speed: ' + speed)
}

moveAnimal({ type: 'bird', flyingSpeed: 10 })

// const userInputElement = <HTMLInputElement>document.getElementById('user-input')!
// * use 'as' for type casting
// const userInputElement = document.getElementById('user-input')! as HTMLInputElement
const userInputElement = document.getElementById('user-input')
if (userInputElement) {
  (userInputElement as HTMLInputElement).value = 'Hi there!'
}

interface ErrorContainer { // { email: 'Not a valid email', username: 'Must start with a character' }
  // any number of property names as a string, and the value is also a string
  [prop: string]: string
}

const errorBag: ErrorContainer = {
  email: 'Not a valid email!',
  username: 'Must start with a capital character!'
}

