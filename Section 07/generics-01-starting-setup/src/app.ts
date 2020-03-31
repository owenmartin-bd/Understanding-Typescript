// // Code goes here!
// const names: Array<string> = []; // string[]
// // name[0].split(' ');

// const promise: Promise<string> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('This is done!');
//     }, 2000);
// });

// Promise.then(data => {
//     data.split(' ');
// })

function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergeObj = merge({ name: 'Owen', hobbies: ['Sports'] }, { age: 35 });

console.log(mergeObj);

interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'Got no value.';
    if(element.length === 1){
        descriptionText = 'Got 1 element.';
    } else if(element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements.';
    }


    return [element, descriptionText]
}

console.log(countAndDescribe(['Sports', 'Cooking']));

function extractAndDescribe<T extends object, U extends keyof T>(obj: T, key: U) {
    return 'Value ' + obj[key];
}

extractAndDescribe({name: 'Owen'}, 'name');

class DataStorage<T extends string | number |  boolean> {
    private data: T[] = [];

    addItem(item: T){
        this.data.push(item);
    }

    removeItem(item: T){
        if(this.data.indexOf(item) === -1){
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data]
    }
}

// const textStorage = new DataStorage<string>();
// textStorage.addItem('Manu');
// textStorage.addItem('Owen');
// textStorage.removeItem('Manu');
// console.log(textStorage.getItems());

// const numberStorage = new DataStorage<number>();
// const objStorage = new DataStorage<object>();
// const owenObj = {name: 'Owen'}
// objStorage.addItem(owenObj);
// objStorage.addItem({name: 'Martin'})

// objStorage.removeItem(owenObj)
// console.log(objStorage.getItems)

interface CourseGoal{
    title: string;
    description: string;
    completeUntil: Date;
}

// function createCourseGoal(title: string, description: string, date: Date) : CourseGoal {
//     return { title: title, description: description, completeUntil: date}
// }
function createCourseGoal(
    title: string, 
    description: string, 
    date: Date) : CourseGoal {
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ['Shuvo', 'Nabo']; // Can not change array for readonly


