//task 1/////////////
let arr = [12, 55, 77, 88, 92, 1, 71, 10, 0, 999];
let sum = 0;
let less = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    sum = sum + arr[i];
  }
  if (i < 5) {
    console.log(i);
    less = less + arr[i];
  }
}
console.log(sum);
let div = document.getElementById("one");
div.innerHTML = sum;

console.log(less);
let d = document.getElementById("two");
d.innerHTML = less;

// task2////////////////////

let person = {
  name: "batool",
  id: 1252,
  age: 25,
  email: "batoolalarmala@gmail.com",
};
for (let x in person) {
  console.log(person[x]);
  document.write(person[x] + " ");
}
