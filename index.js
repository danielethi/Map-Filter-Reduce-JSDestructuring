// //speical array method arguments
// function fun(){
//   console.log(arguments)
// }
// fun([1,2,3,4])//array

// function fun(...args){
//   console.log(args)
// }
// fun([1,2,3,4])//array

// function fun(a,b,c,...args){
//   console.log(args)
// }
// fun([1,2,3,4])//array

// function fun(){
//   for(let i=0;i<arguments.length;i++)
//   console.log(arguments)
// }
// fun([1,2,3,4])//array

// function fun(arguments){//obj
//   console.log(arguments)
// }
// fun([1,2,3,4])

// //rest parameter
// const arr = [1,2,3]
// arr[1]=56
// let arr2=[...arr]
// console.log(arr)
// console.log(arr2)

//looping thourhg objects
const obj={
  name:"daniel",
  age:26
}
for(let elem of obj){
  console.log(elem)
}
for(let elem in obj){
  console.log(elem)
}



