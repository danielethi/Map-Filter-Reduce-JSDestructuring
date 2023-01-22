// //speical array method arguments
function fun(){
  console.log(arguments)
}
fun([1,2,3,4])//array

function fun(...args){
  console.log(args)
}
fun([1,2,3,4])//array

function fun(a,b,c,...args){
  console.log(args)
}
fun([1,2,3,4])//array

function fun(){
  for(let i=0;i<arguments.length;i++)
  console.log(arguments)
}
fun([1,2,3,4])//array

function fun(arguments){//obj
  console.log(arguments)
}
fun([1,2,3,4])

// //rest parameter
const arr = [1,2,3]
arr[1]=56
let arr2=[...arr]
console.log(arr)
console.log(arr2)

//looping thourhg objects
const obj={
  name:"daniel",
  age:26
}
console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))

const obj4=[{
  name:"daniel",
  age:26
},
{
  name:"Doe",
  age:29
},
{
  name:"Eldana",
  age:35
},
]

for(let w of obj4){
  console.log(w)
}




