// arrays 
// ways to declare array
// 1. array literals 




// const a =[1,2,3,4,5,6,7,8,9,10]
// let i = 10
// for(i=10;i>0;i--){

// console.log(a[i])
// }
// 2.   array constructor 
// const arr = new Array(1,2,3)
// console.log(arr)

// to access from array 


const a =[1,2,3,4,5,6,7,8,9,10]
console.log(a[6])

let b = a.length
console.log(b)

// adding elements to the  end of the array 
const ppp= a.push(12)
const rrr = a.pop()
// console.log(a)
// a.pop
// console.log(a)
// const addedno= a.unshift(69)
//  console.log(a)
//  console.log("the number added is :",addedno)
// const n= a.shift()
// console.log("this number is removed ",n)
// console.log(a)
// console.log(ppp)
// console.log(rrr)
// const sh =a.shift()
// console.log("the number remoced is ",sh)

// console.log(a)

// const bz = a.splice(2,0,100,101,102)
// console.log(a,bz)

const zzz=[101,111,112,113,114,115,115]
const no=zzz.splice(2,1,12,13,14)
console.log(no,"",zzz)
