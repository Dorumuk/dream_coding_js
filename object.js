//Object
// Nearly all Object in Js are instance of Object
// Object = { key : value }
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

// 인자로 전달해야하는 것이 많을 경우 사용할 수 있음
// Listerals and properties
const obj1 = {}; // 'Object literal' syntax
const obj2 = new Object(); // 'Object constructor' syntax

function printf(person) {
    console.log(person.name);
    console.log(person.age);
}

const ryan = { name: 'ryan', age: 4 };
printf(ryan)

// JS는 dynamically typed language : 동적으로 Runtime에서 타입이 결정되는 언어
// ❓❗(주의) can add properties later 
// ryan.hasJob = true;
// ryan['hasJob'] = true;
// console.log(ryan.hasJob);

// delete ryan.hasJob;

// 2. Computed properties
console.log(ryan.name);
console.log(ryan['name']); // key should be always string
// ----------------------------------------------------------------------------------------------

// .(dot)을 써서 property에 접근
// ✨ 사용 시점 : 코딩하는 시점에서 키에 해당하는 값을 받고 싶을 때 😀

// [] comptued Properties 방법으로 접근
// ✨ 사용 시점 : 어떤 키를 사용해야 값을 받을 수 있는 지 모를 때 (Runtime 중에 key가 결정 될 때) 😀
// 동적으로 key의 value를 받아와야 할 때 사용할 수 있음. (아래 참고)
function pirntValue(obj, key) {
    // console.log(obj.key); // ❗ error : string 타입의 키를 받아서 properties에 접근할 수 없음 😀
    console.log(obj[key]);
}
pirntValue(ryan, 'name');

// ----------------------------------------------------------------------------------------------

// 3. Property value shorthand
const person1 = {name: 'bob', age: 3};
const person2 = {name: 'steve', age: 3};
const person3 = {name: 'dave', age: 3};

// 1) 함수로 obj 만들기
function makePerson(name, age) {
    return { name, age } // shorthand
}

// 2) class로 만들기
class SubPerson {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

// 4. Constructor Function
// ✨❗3) Constructor Function 으로 만들기 (이전 방식)
function Person(name, age) {
    // this = {}
    this.name = name
    this.age = age;
    return this; // 생략 가능
}

const person4 = makePerson('dong', 22);
const person5 = new SubPerson('lee', 20);
const person6 = new Person('yun', 21);

console.log(person4);
console.log(person5);
console.log(person6);

// 5. in operator: property exixtance check (key in obj)
console.log('name' in ryan); // true

// 6. for..in vs for..of
// for (key in obj)
for (key in ryan) {
    console.log(key);
}
// for (value of iterable)
const arr = [1,2,3,4];
for(val of arr){
    console.log(val);
}

// 7. Fun cloning 😡👀
// Object.assgin(dest, [obj1, obj2, obj3...])
const user = {name: 'dy', age: 20};
const user2 = user;
user2.name = 'coder';
console.log(user.name); // user.name === 'coder'로 변경

// old way
const user3 = {};
for (key in user) {
    user3[key] = user[key];
}
console.log(user3);

// Object.assgin
// 1)
// const user4 = {};
// Object.assign(user4, user);
// 2)
const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = {color: 'red'};
const fruit2 = {color: 'yello', size: 'small'};
const mixed = Object.assign({},fruit1, fruit2); // 뒤에 있는 객체의 요소가 앞의 요소를 덮어 쓴다(잡아먹는다)
console.log(mixed); // {color: 'yello', size: 'small'};