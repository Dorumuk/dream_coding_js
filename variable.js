// Ch3 Variable

// Whole-script strict mode syntax
// 바닐라 자바스크립트를 사용할 경우
// 너무 유연해서 위험한 자바스크립트의 특성을 잡아준다. (in ecma)
'use strict'; // 1. Use Strict ✨ 😃

console.log("Hello World");


// 2. Variable, rw(read/write)
let b = 6; // Global scope 변수, 프로그램의 시작부터 끝까지 메모리에 할당되어있음. (mutable 데이터 타입)
// Block scope
{
    let name = "dongyun";
}
// var hoisting 란?
// hosting : 끌어올리다.
// 어디에 선언했는지와 상관없이 항상 제일 위로 선언을 끌어 올려주는 것

// 3. Constants, r(read only)
const a = 5; // (immutable data type)

// Note !
// Immutable data types: premitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few reasons
//  *1) security
//  2) tread safety : 여러 쓰레드들이 동시에 접근해서 값을 변경하는 위험을 줄인다.
//  3) reduce human mistakes

// 4. Variable types
// pimtive, single item : number, string, boolean, null, undefined, symbol
// object, box container
// function, 😃 first-class function : 함수를 다른 데이터 타입처럼 선언, 리턴, 인자로 사용 가능 ( 특이점 )
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2; // NaN : Not a number

// string
const dongyun = "dongyun"
const greeting = "hello" + dongyun;
const greetings = `hi ${dongyun}`;

// boolean
// false : 0, null, undefined,  NaN, ''

// null
let nothing = null; // 지향하자
// undefined
let x // 값이 정의되지 않음 

// symbol, create unique identifiers for objects 😃
// map 같은 자료구조에서 고유 식별자가 필요할 떄
// 동시다발적으로 concurrent하게 일어날 수 있는 코드에서 우선순위를 주고 싶을 때
const symbol1 = Symbol('id');
const symbol2 = Symbol('id'); // 각각 다른 식별자
const symbol3 = Symbol.for('id');
const symbol4 = Symbol.for('id'); // 위의 식별자하고만 같음
console.log(symbol1.description); // 사용법

// 5. Dynamic typing: dynamically typed language
let text = 'hello';
text += 4 //  string