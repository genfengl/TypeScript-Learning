// const userName = 'Max'

function add(a: number, b: number) {
    let result
    result = a + b
    return result
}

const add2 = (a: number, b: number) => {
    return a + b
}

// set default value for b, default has to be the last argument
const add3 = (a: number, b: number = 1) => a + b

console.log(add(2, 5))

const printOutput = (output: string | number) => {
    console.log(output)
}

const button = document.querySelector('button')

if (button) {
    button.addEventListener('click', event => console.log(event))
}

printOutput(add(5, 2))

const hobbies = ['Sports', 'Cooking']

// this is better
const activeHobbies = ['Hiking', ...hobbies]
activeHobbies.push(...hobbies)

const person = {
    firstName: 'Max',
    age: 30
}

// copying object using spread operator
const copiedPerson = { ...person }

// has to be the same key name as the original object
//  rename the key with originalKey: newName
const { firstName: userName, age } = person

//  array.reduce()
const add4 = (...numbers: number[]) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue
    }, 0)
}

const addedNumbers = add4(5, 10, 2, 3)

//  array destructuring
const [hobby1, hobby2, ...remainingHobbies] = hobbies

console.log(hobbies, hobby1, hobby2)
