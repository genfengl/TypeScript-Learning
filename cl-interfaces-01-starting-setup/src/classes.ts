// * abstract is used to enforce that all classes based on a certain class share some same abstract methods or properties
//* abstract class cannot be instantiated, but only inherited
abstract class Department {
    //* static cannot be accessed using 'this'
    //* has to use Department.fiscalYear instead
    static fiscalYear = 2020

    // private id: string
    // private name: string;
    //* private means employees can only be accessed inside the class
    //* so that only the methods in the class can access it
    //* protected means can be accessed inside the class and any extended/inherited classes
    protected employees: string[] = []

    constructor(protected readonly id: string, public name: string) {
        this.id = id
        this.name = name
    }

    static createEmployee(name: string) {
        return { name: name }
    }

    // defining the type for the argument to be Department class
    abstract describe(this: Department): void

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

    describe(): void {
        console.log('IT Department - ID: ' + this.id);
    }
}

class AccountingDepartment extends Department {
    private lastReport: string
    private static instance: AccountingDepartment

    // * use getter to access private constructor
    static getInstance() {
        // if instance is already created, just return this instance
        if (AccountingDepartment.instance) {
            return this.instance
        }
        // else create a new instance of this class
        this.instance = new AccountingDepartment('d2', [])
        return this.instance
    }

    // setter method
    set mostRecentReport(value: string) {
        if (!value) {
            throw new Error('Please pass in a valid value!')
        }
        this.addReport(value)
    }

    // getter method: has to return sth
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport
        }
        throw new Error('No report found.')
    }

    // use private constructor for singletons, to enforce that a class is only created once
    private constructor(id: string, private reports: string[]) {
        super(id, 'Accounting')
        this.lastReport = reports[0]
    }

    describe() {
        console.log('Accounting Department - ID: ' + this.id)
    }

    addEmployee(name: string) {
        if (name === 'Max') {
            return
        }
        this.employees.push(name)
    }

    addReport(text: string) {
        this.reports.push(text)
        this.lastReport = text
    }

    printReports() {
        console.log(this.reports);
    }
}

const employee1 = Department.createEmployee('Max')
console.log(employee1, Department.fiscalYear);


const it = new ITDepartment('d1', ['Max'])

it.addEmployee('Max')
it.addEmployee('Manu')
it.describe()

// accounting.employees[2] = 'Anna'


it.printEmployeeInformation()

console.log(it);

// const accounting = new AccountingDepartment('d2', [])
const accounting = AccountingDepartment.getInstance()

// accessing the setter method
accounting.mostRecentReport = 'Year End Report'
accounting.addEmployee('Max')
accounting.addReport('Something went wrong...')
accounting.printReports()
console.log(accounting.mostRecentReport);
console.log(accounting);
accounting.describe()


// const accountingCopy = { name: 's', describe: accounting.describe }

// accountingCopy.describe()
