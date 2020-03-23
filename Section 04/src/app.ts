// Code goes here!
// const userName = 'Owen';
// userName = 'Nartin';

// let age = 30;

// age = 29;

// function add(a: number, b: number) {
//     var result;
//     result = a + b;
//     return result;
// }

// const add = (a: number, b: number) =>  a+b;

// console.log(add(2,5));

const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies);

const person = {
    firstName: 'Owen',
    age: 35
}

const copiedPerson = {...person};

const add = (...numbers: number[]) => {
    return numbers.reduce((curReslut, curValue) => {
        return curReslut + curValue;
    }, 0);
};

const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);

const [hobby1, hobby2, ...remainingHobbies] = hobbies;

console.log(hobbies, hobby1, hobby2, remainingHobbies);

const {firstName: userName, age} = person;

console.log(userName, age);