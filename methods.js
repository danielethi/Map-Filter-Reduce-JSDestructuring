

//reduce

Array.prototype.myReduce = function (fn, val) {
  let acc = val === undefined ? this[0] : initialValue;
  let start = val === undefined ? 1 : 0;
  for (let i = start; i < this.length; i++) {
    acc = fn(acc, this[i]);
  }
  return acc;
};

const str = 'abc';
const strarr = [...str];

console.log(
  [...str].myReduce((acc, cur) => {
    return acc + cur + cur;
  }, '')
);

console.log(
  [...str].myReduce((acc, cur) => {
    return acc + cur + cur;
  })
);

const arr = [1, 2, 3];
console.log(
  arr.myReduce((acc, cur) => {
    return acc + cur; //1, 3, 6
  }, 0)
);


//forEach
//Map
//Reduce

// let arr = [1,3,4]
// arr.forEach((item,ind,array)=>{
//      console.log("item "+item)
//      console.log("index "+ind)
//      console.log("array "+array)
// })

