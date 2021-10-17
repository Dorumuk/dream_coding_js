'use strict';

// Array 🎉

// 1. Declaration
const arr1 = new Array();
const arr2 = [1,2];

// 2. index position
const fruitBundle = ['apple', 'banana'];
console.log(fruitBundle[0]);

// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruitBundle.length; i++){
    console.log(fruitBundle[i]);
}

// b. for of
for (let fruit of fruitBundle) {
    console.log(fruit);
}

// c. forEach
fruitBundle.forEach(function (fruit, index, arr) {
    console.log(fruit, index, arr);
})
fruitBundle.forEach((fruit) => console.log(fruit));

// 4. Addition, deletion, copy
// push: add an item to the  end
fruitBundle.push('🎉');
// pop: remove an item from the end
fruitBundle.pop();

// unshift: add an item to the benigging (api)
fruitBundle.unshift('😡');
// shift: remove an item from the benigging(가장 앞의 요소로 인해, 다른 요소들이 shift 됨)
fruitBundle.shift();

// note!! shift, unshift are slower than pop, push

// splice: remove an item by index position // 꼬아서 잇다
console.clear();
fruitBundle.push('berry', 'pech', 'lemon');
console.log(fruitBundle);
fruitBundle.splice(1, 1)
console.log(fruitBundle);
fruitBundle.splice(1, 1, 'apple', 'mellon'); // 추가 삽입도 가능하다
console.log(fruitBundle);

// combine two arrays
const fruits2 = ['pear', 'coconut'];
console.log(fruitBundle.concat(fruits2));


// 5. Searching
// find the index
console.log(fruitBundle);
console.log(fruitBundle.indexOf('apple'));
console.log(fruitBundle.indexOf('mellon'));
console.log(fruitBundle.indexOf('ddong')); // return -1

// includes
console.log(fruitBundle.includes('mellon'));

// lastIndexOf
fruitBundle.push('apple');
console.log(fruitBundle.indexOf('apple')); // 중복의 경우 첫번째로 걸리는 요소의 index
console.log(fruitBundle.lastIndexOf('apple')); // 중복의 경우 마지막에 걸리는 요소의 index
