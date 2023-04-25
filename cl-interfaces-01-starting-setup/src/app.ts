class Department {
    // private id: string
    // private name: string;
    //* private means employees can only be accessed inside the class
    //* so that only the methods in the class can access it
    private employees: string[] = []

    constructor(private id: string, public name: string) {
        this.id = id
        this.name = name
    }

    describe(this: Department) {
        console.log(`Deparment (${this.id}): ${this.name}`);
    }

    addEmployee(employee: string) {
        this.employees.push(employee)
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

const accounting = new Department('d1', 'Accounting')

accounting.addEmployee('Max')
accounting.addEmployee('Manu')

// accounting.employees[2] = 'Anna'

accounting.describe()
accounting.printEmployeeInformation()

// const accountingCopy = { name: 's', describe: accounting.describe }

// accountingCopy.describe()
