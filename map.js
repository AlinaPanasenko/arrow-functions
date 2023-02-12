let nums = [1, 2, 3, 4, 5, 6];
let results = [];
for (let num of nums) {
    results.push(num*2);
}

console.log(results);

//whitn map() method

const multiplyByTwo = function(num) {
    return num*2;
}

const mapResults = nums.map(multiplyByTwo);
console.log(mapResults);

//With map() method but shorter

const mapResults2 = nums.map(function(num) { return num*2 });
console.log(mapResults2);

//With map() method and arrow function

const mapResults3 = nums.map(num => num*2);
console.log(mapResults3);


// With objects:
const students = [
    {
      id: 1,
      name: 'Mark',
      profession: 'Developer',
      skill: 'JavaScript'
    },
    {
      id: 2,
      name: 'Ariel',
      profession: 'Developer',
      skill: 'HTML'
    },
    {
      id: 3,
      name: 'Jason',
      profession: 'Designer',
      skill: 'CSS'
    },
  ];

  const studentsWithIds = students.map(student => [student.id, student.name]);
  console.log(studentsWithIds);

