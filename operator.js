// Ch4. Operator
// 1. String concatenation
// 문자열 더하기
// 'my' + 'cat'

// 2. Numeric operators
// 1+1

// 3. Icrement and decrement operators
let counter = 2;
const preIncrement = ++counter;
const postdecrement = counter--;

//  4. Assignment operators
// let x = 3;
// x+=1

// 5. Comparison operators
// <, > <=

// 6. Logical operators ***
// : ||, &&

const value1 = true;
const value2 = true;

// 👍 : Js는 아래 복수 조건문을 확인할 때, value1이 true이면 뒤의 것을 안 확인한다.
// 그러므로 복잡한 조건(expression, 함수)을 뒤에 위치하는 것이 성능에 좋다.!! 😃
console.log(`or: ${value1 || value2 || check()}`);
console.log(`or: ${value1 && value2 && check()}`);

// often used to compress long if-statement
// nullableObject && nullableObject.somthing

function check() {
    for (let i = 0; i< 10; i++){
        console.log("hi");
    }
    return true;    
}

// ! (not)

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// loose equality, with type conversion 
console.log(stringFive == numberFive);
// strict equality, no type conversion
console.log(stringFive === numberFive);

// 8. Conditional operators: if
// if else

// 9 Ternary operator: ?
// condition ? value : vlaue2;

// 10 Switch statement
// switch (){
//     case 1:
//         break;
//     default:
//         break;
// }

// 11. Loops
// while loop, while the condition is truthy
// body code is executed

// white (){}
// do{} while();


// 12. for loop, for(begin; condition; step)
for (let i= 3; i>0; i--){
    console.log("hi");
}

// nested loops 이중 루프
// for(){for(){}} : O(n^2) // 지양 합시다!!

// + break, continue
// Q1. iterate from 0 to 10 and print only even numbers(짝수)