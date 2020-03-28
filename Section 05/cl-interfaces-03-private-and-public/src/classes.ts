abstract class Department {
	static fiscalYear = 2020;
	// private id: string;
	// public name: string;
	protected employees: string[] = [];

	constructor(protected readonly id: string, public name: string) {
		// this.name = n;
		// console.log(Department.fiscalYear) have to access this way if the memeber is non static
	}

	static createEmployee(name: string){
		return {name : name}
	}

	// describe(this: Department) {
	// 	console.log(`Department (${this.id}): ${this.name}`);
	// }

	abstract describe(this: Department): void;

	addEmployee(employee: string) {
		// validation etc
		this.employees.push(employee);
	}

	printEmployeeInformation() {
		console.log(this.employees.length);
		console.log(this.employees);
	}
}

class ITDepartment extends Department {
	constructor(id: string, public admins: string[]) {
		super(id, 'IT');
	}

	describe() {
		console.log('IT Department - ID: ' + this.id)
	}
}

class AccountingDepartment extends Department {
	private lastReport: string;
	private static instance: AccountingDepartment;

	get mostRecentReport() {
		if(this.lastReport){
			return this.lastReport;
		} else {
			throw new Error('No report found');
		}
	}

	set mostRecentReport(value: string){
		if(!value){
			throw new Error('Please pass in a valid value!');
		}
		this.addReport(value);
	}

	private constructor(id: string, private reports: string[]) {
		super(id, 'Accounting');
		this.lastReport = reports[0];
	}

	static getInstance() {
		if (this.instance) {
			return this.instance
		}
		this.instance = new AccountingDepartment('d2', []);
		return this.instance;
	}

	describe() {
		console.log('Accounting Department - ID ' + this.id)
	}

	addEmployee(name: string){
		if(name === 'Max'){
			return;
		}
		this.employees.push(name);
	}

	addReport(text: string){
		this.reports.push(text);
		this.lastReport = text;
	}

	printReports() {
		console.log(this.reports);
	}
}

const employee1 = Department.createEmployee('Mickey');
console.log(employee1, Department.fiscalYear);

const it = new ITDepartment('1', ['Owen']);

it.addEmployee('Max');
it.addEmployee('Manu');

// accounting.employees[2] = 'Anna';

it.describe();
it.name = 'NEW NAME';
it.printEmployeeInformation();

console.log(it);
// const accounting = new AccountingDepartment('2', []);
const accounting = AccountingDepartment.getInstance();

accounting.mostRecentReport = 'year end report';

accounting.addReport('Something went wrong ....');

console.log(accounting.mostRecentReport);

accounting.addEmployee('Max');
accounting.addEmployee('Manu')
// accounting.printEmployeeInformation();
// accounting.printReports();
accounting.describe();

// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };

// accountingCopy.describe();