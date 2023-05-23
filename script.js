console.log("===== task 1 ======")

for (let i = 0; i <= 10; i += 2) {
  console.log(i)
}
console.log("===== task 2 ======")

for (let i = 55; i > 19; i --) {
  console.log(i)
}

console.log("===== task 3 ======")

const numbers = [3,5,11,2,8,1,6];
console.log(numbers);
const numbers_squared = [];
for (let i = 0; i < numbers.length; i++) {
  numbers_squared.push(numbers[i]**2);
}
console.log(numbers_squared);

console.log("===== task 4 ======")

const last_elem = numbers_squared[numbers_squared.length-1];
console.log("last_elem = ", last_elem);

console.log("===== task 5 ======")

const user = {
  first_name: "Ivan",
  last_name: "Ivanov",
  age: 20,
  salary: 500
}

const stringObj = `User's name is ${user.first_name} ${user.last_name}. He is ${user.age} years old`;
console.log(stringObj);
