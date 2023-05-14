// use --watch for watch mode
//  use tsc --init, and then tsc to compile the whole project dir, just like node
//  can be combined with --watch to enter watch mode for the whole project
//  use outdir and rootdir to specify dist for js and src for ts, for better file structure

//  use ! to assert that a variable is not null or undefined
const button = document.querySelector('button')

function add(n1: number, n2: number) {
    if (n1 + n2 > 0) {
        return n1 + n2
    }
    return 
}

if (button) {
    button.addEventListener('click', () => {
        console.log('Clicked!')
    })
}
