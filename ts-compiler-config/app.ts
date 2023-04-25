// use --watch for watch mode
//  use tsc --init, and then tsc to compile the whole project dir, just like node
//  can be combined with --watch to enter watch mode for the whole project

//  use ! to assert that a variable is not null or undefined
const button = document.querySelector('button')!

button.addEventListener('click', () => {
    console.log('Clicked!')
})

