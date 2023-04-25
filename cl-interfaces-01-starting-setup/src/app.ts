//* interface only in TS

// type AddFn = (a: number, b: number) => number
// function interface
interface AddFn {
    (a: number, b: number): number
}

let add: AddFn

add = (n1: number, n2: number) => {
    return n1 + n2
}

interface Named {
    readonly name?: string
    //* ? means optional
    outputName?: string
}

// * can use readonly in interface
//* can extend/inherit from multiple interfaces
interface Greetable extends Named {
    greet(phrase: string): void
}

//* you can implement multiple interfaces, separated by ,
class Person implements Greetable {
    name?: string
    age = 30

    constructor(n?: string) {
        if (n) {
            this.name = n
        }
    }

    greet(phrase: string) {
        if (this.name) {
            console.log(phrase + ' ' + this.name)
        }
    }
}

let user1: Greetable

user1 = new Person('Max')

console.log('Hi there - I am ');
console.log(user1);

