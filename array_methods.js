// non mutating functions 
// to copy the files 
let number=[1,2,3,4,5,6,7,8,4]
let newno=number.slice(1,5)


// concat 
let joined = number.concat(newno)
console.log(joined)


console.log(number.lastIndexOf(4))
// includes
let n = number.includes(8)
console.log(n)

// const numbers = [1, 2, 3, 4, 5];

// let c= number.find((value , index , Array)=>{
//     return value>3
// });

// console.log(c)
// const numbers = [1, 2, 3, 1, 5,6,4]
// let c= numbers.findIndex((value , index , Array)=>{
//     return value>3 && value<5
// });

// console.log(c)

const numbers = [1, 2, 3, 1, 5,6,4]
let b = numbers.forEach((value, index) => {
    console.log("Index" ,index ,'has value' ,value);
});


numbers.find((vl ))