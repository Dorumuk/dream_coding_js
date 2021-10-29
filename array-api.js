// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  console.log(fruits.join());
}

// Q2. make an array out of a string
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  console.log(fruits.split(', '));
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5],
      result = array.reverse();
  console.log(result);
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5],
        result = array.slice(2); // 배열에서 원하는 부분을 잘라서 리턴
  console.log(result);
  // array.splice(0,2) // 배열 자체를 수정
  // console.log(array);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
  console.log(students.find(v=>v.score === 90));
}

// Q6. make an array of enrolled students
{
  const enrolledStudent = students.filter((stu)=>stu.enrolled);
  console.log(enrolledStudent);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const scoreArr = students.map(v=>v.score); // item 이름을 이해하기 쉽게 정하자❗
  console.log(scoreArr);
}

// Q8. check if there is a student with the score lower than 50
{
  // const scoreArr = students.map(v=>v.score); 
  // console.log(scoreArr.map(v=>v<50? true: false));
  const result = students.some(student => student.score < 50);
  const result2 = !students.every(student => student.score <= 50);
  console.log(result);
}

// Q9. compute students' average score
{
  // 💩
  // const scoreArr = students.map(v=>v.score);
  // let sum = 0;
  // for (const score of scoreArr) {
  //   sum += Number(score);
  // }
  // console.log(sum/ scoreArr.length);
  // ✨
  const sum = students.reduce((prev,curr)=> prev + curr.score, 0);
  console.log(sum/ students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  // const scoreArr = students.map(v=>v.score);
  // console.log(scoreArr.toLocaleString());
  const result = students
    .map(v => v.score)
    .join(); // 이렇게 작성하는 것을 보자 😲
  console.log(result);  
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = students
    .map(v=>v.score)
    .sort();
  console.log(result);
}
