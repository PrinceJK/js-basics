//object
let person = {
    name: 'John',
    age: 30
};

person.name = 'Mosh';

let selection = 'name';
person[selection] = 'Mary';
console.log(person.name);