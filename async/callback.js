'use strict';

// JavaScript is synchronous.
// Excute the code block in order after hoisting.
// hoisting: var, function declaration

// 서브루틴, 람다표현식, 함수 포인터 등으로 callback을 표현할 수 있다.

console.log('1');
setTimeout(() => {
    console.log('2');
}, 1000)
console.log('3');

// Synchronous callback
function printImmediately(print) {
    print();    
}

printImmediately(() => console.log("hello"));

// Asynchronous callback
function printWithDelay(print, delay) {
    setTimeout(()=>{
        print();
    }, delay)
}

printWithDelay(() => console.log("async hello"), 2000);


// ---------------------------------------------------------------------------------
// Callback Hell example
class UserStorage {
    loginUser(id, pw, onSuccess, onError) {
        setTimeout(() => {
            if(
                (id === 'ellie' && pw === 'dream') ||
                (id === 'coder' && pw === 'academy')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        },2000)
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'ellie') {
                onSuccess({ name: 'ellie', role: 'admin'});
            } else {
                onError(new Error('no acess'));
            }
        })
    }
}

// const userStorage = new UserStorage();
// let userId = null;

// const onLoginSuccess = (newId) => {
//     userId = newId;
// }
// const onLoginError = (error) => {
//     error();
// }
// userStorage.loginUser('ellie', 'dream', onLoginSuccess, onLoginError);
// userStorage.getRoles(userId, (msg)=> console.log(msg), onLoginError);


const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id,
    password,
    user => { 
        userStorage.getRoles(
            user,
            userWithRole => {
                alert(`Hello ${userWithRole.name}, ${userWithRole.role}`);
            },
            error => {
                console.log(error);
            }
        );
    },
    error => {
        console.log(error);
    }
);