'use strict';
// Object-oriented programming
// JavaScript classes
// - introcude in ES6
// - syntactical sugar(문법상으로 달달한, 가짜의 편리함 제공) over prototype-based✨ inheritance
// class는 새로 추가된 기능이며(완전히 새롭게 생긴 것은 아님), 기존에는 객체를 만드는 방법이 따로 있었다.

// 1. Class declarations
class Person{
    // 생성자
    constructor(name, age){
        this.name =  this.name;
        this.age = age;
    }

    //methods
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);

// 2. Getter and Setters 😃😲
// ex) 나이 값은 1이상의 값만 들어와야 한다. 그러므로 setter를 만들고 조건을 추가해야한다.
class User {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        console.log(this);
    }
    // getter를 선언하는 순간! this.age 는 getter age를 호출한다.
    get age() {
        return this._age; // 다르게 이름을 정해야 한다!
    }
    // setter를 정의하는 순간! '= age;'는 바로 값을 할당하지 않고, setter age를 호출한다.
    set age(val) {
        this._age = val < 0? 0 : val;
    }
}

const user1 = new User("dongyun", "lee", -1);
console.log(user1.age);


// 3. Fieds (public, private)
class Experiment {
    publicFied = 2;
    #privateField = 0; // private (너무 최신이므로 지원하는 os가 적음)
}

// 4 Static properties and methods
// obj에 상관없이, class에 들어오는 데이터와 상관없이 공통적으로 사용하는 fied나 메소드를 static으로
// --> 메모리의 사용을 줄여줄 수 있음.
// Too Soon!
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
// console.log(article1.publisher); // error
console.log(Article.publisher);
Article.printPublisher();

// 5. Inheritance (상속)
// a way for one class to extend another class.

class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    // override
    draw() {
        super.draw(); // 부모의 함수를 들고 온다.
        console.log('😀');
    }
    // override
    getArea() {
        return (this.width * this.height) / 2;
    }
}

const rectangle = new Rectangle(30,30,'blue');
rectangle.draw(); 
const triangle = new Triangle(30,30,'blue');
triangle.draw();
triangle.getArea();

// 6. Class checking  : InstanceOf
// typeOf 와 비슷
console.log(rectangle instanceof Rectangle); // t
console.log(rectangle instanceof Shape); // t
// 자바스크립트에서 만든 모든 오브젝트 클래스는
// JavaScript의 Object를 상속한 것이다.
console.log(rectangle instanceof Object);
console.log(rectangle.toString());

// 아래 JS Ref를 참고하자
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference