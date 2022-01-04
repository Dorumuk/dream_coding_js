"use strict";

// Promise is a Javascript object for asyncronous ooperation.
// Point
// 1) state : 무거운 오퍼레이션 처리중 인지, 처리완료 됐는지
// 2) producer - consumer : 2가지의 차이점

// state :
// pending(promise가 만들어져서 의도한 operation이 수행 중) ->
// fulfilled(완벽하게 완료) or rejected(파일 오류, 네트워크 오류)

// Producer vs Consumer

// 1. Producer
// when new Promise is created, the excutor runs automatically ❗❗
// promise를 선언함과 동시에 아래 callback 함수가 바로 실행된다! 불필요하게 초기에 실행될 수 있다.
const promise = new Promise((resolve, reject) => {
    // doing some  heavy work (network, read files)
    console.log("doing something...");
    setTimeout(() => {
        resolve('ellie');
        // reject(new Error("no network"));
    }, 2000);
});

// 2. Concumers: then, catch, finally
// chainning
promise
    .then((value) => { // 성공적으로 promise 함수가 실행되어 resolve함수를 실행 했을 경우, "eliie"를 value 파라미터를 통해 받을 수 있다.
        console.log(value); // ellie
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("finally");
    }); // 성공하든 실패하든 무조건 실행

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1);
    }, 1000);
});

fetchNumber
    .then((num) => num * 2) // 2
    .then((num) => num * 3) // 6
    .then((num) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(num - 1);
            }, 1000);
        }); // 값 또는 Promise를 리턴 할 수 있다.
    })
    .then((num) => console.log(num));

// 4. Error Handling
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("chicken");
        }, 1000);
    });
const getEgg = (hen) =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve(`${hen} => egg`);
            reject(new Error(`error! ${hen} => egg`));
        }, 1000);
    });
const cook = (egg) =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${egg} => fri`);
        }, 1000);
    });

// getHen()
//     .then(hen => getEgg(hen))
//     .then(egg => cook(egg))
//     .then(meal => console.log(meal))

getHen() //
    .then(getEgg)
    .catch(error => 'bread')
    .then(cook)
    .then(console.log)
    .catch(console.log);
