// // //Object Destructuring
const { key1, key2 } = {
  key1: "DD",
  key2: "Doe",
};
// // console.log(key1, key2);//DD,Doe

// // //alias name
const { key1: key, key2: hello } = {
  key1: "DD",
  key2: "Doe",
};
// console.log(key, hello);//DD,Doe

// // //Array destructuring
const [a, b] = [0, "Hello"];
console.log(a); //0
console.log(b); //Hello

// // //default value
const [c = 4, d] = [, "Hello"];
console.log(c); //0
console.log(d); //Hello

let obj = [
  {
    name: "daniel",
    age: 28,
  },
  {
    name: "Lee",
    age: 29,
  },
];
//write a function to get output as {name:28 Lee:29}
function foo() {
  let v = {};
  for (let w of obj) {
    v[w.name] = w.age;
  }
  return v;
}
let res = foo();
console.log(res);//{ daniel: 28, Lee: 29 }

//shallow-copy and deep-copy
let obj1={
  name:"Deep",
  age:22
}
let obj2=obj1
let obj3={...obj1}
console.log(obj1===obj3)//false
obj1.name="Ana"
obj2.name="lia"
console.log(obj1)//lia
console.log(obj2)//lia
console.log(obj3)//Deep
console.log({...obj1})//lia
console.log(obj1===obj3)//false
console.log(obj1===obj2)//true
console.log(obj3===obj2)//false




