class Department {
    // private id: string
    // private name: string;
    //* private means employees can only be accessed inside the class
    //* so that only the methods in the class can access it
    private employees: string[] = []

    constructor(private readonly id: string, public name: string) {
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

//  can only inherit from one class
//  have to add super when adding constructor in class that are inherited
class ITDepartment extends Department {
     constructor(id: string, public admins: string[]) {
        // call super first before using 'this'
        super(id, 'IT')
        this.admins = admins
     }
}

class AccountingDepartment extends Department {
    constructor(id: string, private reports: string[]) {
        super(id, 'Accounting')
    }

    addReport(text: string) {
        this.reports.push(text)
    }

    printReports() {
        console.log(this.reports);        
    }
}

const it = new ITDepartment('d1', ['Max'])

it.addEmployee('Max')
it.addEmployee('Manu')

// accounting.employees[2] = 'Anna'

it.describe()
it.printEmployeeInformation()

console.log(it);


const accounting = new AccountingDepartment('d2', [])

accounting.addReport('Something went wrong...')
accounting.printReports()


// const accountingCopy = { name: 's', describe: accounting.describe }

// accountingCopy.describe()
