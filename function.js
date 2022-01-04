// Ch5. Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// * on function === one thing
// * 변수는 naun, 함수는 : doSomthing, command, verb
// e.g. createCardAndPoint (x)

// func is Object in JS

// 2. Parameters
// premitive param : passed by value
// object param    : passed by reference

// 3. default parameters (ES6)
function showMessage(message, from = "unknown"){
    console.log(`${message} by ${from}`);
}
showMessage("Hi")

// 4. Rest parameters (ES6) 😃
function printAll(...args){
    args.forEach((arg)=>{
        console.log(arg);
    })
}
printAll('code','your','dream');
// fucntion은 객체이므로 여러 속성 값들을 사용할 수 있다. (직접 사용해보자)

// 5. Local scope
// js 심화 : closer, lescul environment
// 밖에서는 안을 볼 수가 없고, 안에서는 밖을 볼 수 있다. (개념)
let globalMesssage = "global";
function prinMessage() {
    let message = 'hello';
    console.log(globalMesssage);
}

// 6. Return a value
// return undefined는 생략 가능 (default) 😃

// 6. Early return, early exit + 조건문은 간단하게 😃
// 💩
function upgradeUser(user) {
    if (user.point <= 10){
        // long upgrade logic ...
    }    
}
// ✨
function upgradeUser(user) {
    if (user.point <= 10){
        return;
    } // 값이 -1, undefiend, 맞지 않는 경우 빠르게 리턴을 해서 처리
    // long upgrade logic ...
}

// ✨✨✨ First-class function
// functions are treated like any other variable
// can be assigned ass a value to variable
// can be passed as an argument to other function. (파라미터)
// can be returned by another function

// 1) Function expression
// a [fucntion declaration] can be called earlier than it is defined. (hoisted) 😃
// a [fucntion expression] is created when the excution reaches it (아래처럼 사용하는 것) 😃
const print = function() {
    console.log('print'); // anonymous function
}
print();


// 2) Callback : 인자로 받은 값을 조건으로 두고, 실행할 수 있는 '인자로 받은 함수'
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you'){
        printYes();
    }else {
        printNo();
    }
}
// anonymous function
const printYes = function (){
    console.log("yes!");
}
// named function
// 1) better debugging in debugger's stack traces
// 2) recursions (회기) => call stack 주의 ❗
const printNo = function print(){
    console.log("No!");
    print();
}
randomQuiz('love you', printYes, printNo)

// Arrow fuction
// always anonymous
const simplePrint= (a, b)=> a + b;
const simplePrint2= (a, b)=> {
    console.log("hi");
    return a * b;
};

// IIFE: Immediately Invoked(호출, 발동) Function Expression
(function hello() {
    console.log("Invoked function");
})();

// command: add, subtract, divide, multiply, remainder
function calculate(command, a, b) {
    switch (command) {
        case 'add': return a + b;
        case 'subtract': return a - b;
        case 'divide': return a / b;
        case 'multiply': return a * b;
        case 'remainder': return a % b;
        default: throw Error("unknown command");
        // default: console.log("please retry again"); break;
    }
}