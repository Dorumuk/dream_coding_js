// JSON
// 유용한 사이트
// JSON Diff
// JSON beatifier
// JSON Parser
// JSON Validator // 알맞은 json 포맷인지 확인


//1. Object to JSON
// stringi fy(obj)

let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
    name: 'charm',
    color: 'white',
    size: null,
    birthDate: new Date(),
    symbol: Symbol('id'), // stringify 에서 걸려 json형태로 변환 안됨
    jump: (name) => { // stringify 에서 걸려 json형태로 변환 안됨
        console.log(`${name} can jump!`);
    }
}

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name', 'size']);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
    console.log(key, value);
    return key === 'name' ? 'charm' : 'good';
});
console.log(json);



//2. JSON to Object
// parse(json)
console.clear();
json = JSON.stringify(rabbit); // 함수가 사라짐.
const obj = JSON.parse(json, (key, val)=> { //  세밀하게 다시 조절
    console.log(key, val);
    return key === 'birthDate' ?  new Date() : val ; //  Date 객체를 다시 만들어서 바꿔줌
});
console.log(obj);

rabbit.jump('yamashita');
// obj.jump('error') // eroor 😡 // stringify 과정에서 함수가 사라졌기 때문

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());