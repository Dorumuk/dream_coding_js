// async & await
// clear style of using promise :)
// promise를 유지해야 맞는 경우도 있으니, 상황에 따라 사용!
// 동기 : 한줄~한줄, 한줄이 끝나고 다른 한줄이 실행

// 비동기적으로 해야하는 경우:
// 작업이 오래걸려서 다음 함수로 넘어가지 못해
// 화면이 안보이는 일이 생길 경우!!
// 0. Promise
function fetchUser() {
    // do network request in 10 secs ....
    // return 'ellie';
    return new Promise((resovle, reject) => {
        // do network request in 10 secs ....
        resovle('ellie');
    });
}

const user1 = fetchUser();
user1.then(console.log)


// 1. async (synthatic sugar)
// async를 붙이면 promise를 리턴하는 함수로 바뀐다. 👈👈
async function fetchUser() {
    // do network request in 10 secs ....
    // return 'ellie';
    return 'ellie'; // 👈👈 resolve() 역할!!!!
}

const user = fetchUser();
user.then(console.log)

// 2. await ✨
function delay(ms) {
    return new Promise(resovle => setTimeout(resovle, ms));
}

async function getApple() {
    await delay(1500);
    // throw 'error';
    return 'apple';
}
async function getBanana() {
    // return delay(1000) // 이 방식도 가능
    // .then(()=> 'banana')
    await delay(1000);
    return 'banana';
}

// 1)
// function pickFruits() {
//     return getApple().then((apple) => {
//         return getBanana().then((banana) => `${apple} + ${banana}`);
//     });
// }

// 2)
// function pickFruits() {
//     try {
//         const apple = await getApple();
//         const banana = await getBanana();
//     } catch (e) {
//     }
//     return `${apple} + ${banana}`;
// }

// 3) 병렬 처리
// 각각 비동기로 실행시켰는데 먼저 실행한 함수를 1초 기다리게 되는 상황 발생
async function pickFruits() { // 되긴 하는데 너무 지저분하니 ....
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
}
pickFruits().then(console.log);

// 3. useful Promise APIs
async function pickAllFruits() {
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(' + '));
}
pickAllFruits().then(console.log);

async function pickOnlyOne() {
    // 배열안의 promise 중에 가장 먼저 return하는 값만 전달이 된다.
    return Promise.race([getApple(), getBanana()])
}
pickOnlyOne().then(console.log)