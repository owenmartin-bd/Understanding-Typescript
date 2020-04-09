function Logger(logString: string) {
    console.log('LOGGER FACTORY')
    return function(constructor: Function){
        console.log(logString);
        console.log(constructor);
    }
}

function WithTemplate(template: string, hookId: string) {
    console.log('TEMPLATE FACTORY')
    return function<T extends {new(...args: any[]): {name: string}}>(originalConstructor: T) {
        return class extends originalConstructor {
            constructor (..._: any[]) {
                super();
                console.log('Rendering Template')
                const hookEl = document.getElementById(hookId);
                if (hookEl) {
                    hookEl.innerHTML = template;
                    hookEl.querySelector('h1')!.textContent = this.name;
                }
            }
        }
    }
}

// @Logger('LOGGING - PERSON')
@Logger('Logging')
@WithTemplate('<h1>My person Object</h1>', 'app')
class Person {
    name = 'Max';
    constructor() {
        console.log('Creating person object...');
    }
}

const pers = new Person();

console.log(pers);

// --

function Log(target: any, propertyName: string | symbol) {
    console.log('Property decorator');
    console.log(target, propertyName);
}

function Log2(
    target: any, 
    name: string, 
    descriptor: PropertyDescriptor) {
    console.log('Accessor decorator');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function Log3(
    target: any, 
    name: string | Symbol, 
    descriptor: PropertyDescriptor) {
    console.log('Method decorator');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function Log4(
    target: any, 
    name: string | Symbol, 
    position: number) {
    console.log('Property decorator');
    console.log(target);
    console.log(name);
    console.log(position);
}

class Product {
    @Log
    title: string;
    private _price: number;

    @Log2
    set price(val: number){
        if(val > 0 )
            this._price = val ;
        else
            throw new Error('Invalid value');
    }

    constructor(t: string, p: number){
        this.title = t;
        this._price = p;
    }

    @Log3
    getPriceWithTax(@Log4 tax: number){
        return this._price * (1 + tax);
    }
}

function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    }
    return adjDescriptor;
}

class Printer {
    message = 'This works!';
    @Autobind
    showMessage() {
        console.log(this.message);
    }
}

const p = new Printer();

const button = document.querySelector('button')!;
// button.addEventListener('click', p.showMessage.bind(p));
button.addEventListener('click', p.showMessage);

class Course {
    title: string;
    price: number;

    constructor(t: string, p: number){
        this.title = t;
        this.price = p;
    }
}
