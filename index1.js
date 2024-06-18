//Using Array Literal
// let fruits = ["apple", "banana", "mango", "orange"]
// console.log(fruits)


//Using Array constructor
// let fruit = new Array("apple", "banana", "mango", "orange")
// console.log(fruit)

//Array emmty element
// let arrt=[]


// console.log(fruits.at(-1)) //Last value
// console.log(fruits)

// let fruits = ["apple", "banana", "mango", "orange"]
// for(let sys of  fruits){
//     console.log(sys)
// }


// for (let i=0;i<fruits.length;i++){
//     console.log(fruits[i])
// }


// For Each loops

// fruits.forEach(function (element,index,fruits){
//     console.log(element,index)
// })

// let mysys = fruits.forEach((element, index, fruits) => {
//     return element, index
//     console.log(element,index)
// })
// console.log(mysys)
// map function

// let mysys = fruits.map((element, index, fruits) => {
//     return `My fav fruit is ${element} ${index}`
//     //     console.log(element, index)
// })
// console.log(mysys) 



// const number = [1, 2, 3, 4, 5]
// // perform an action on each element
// number.forEach((Element, index, Array) => {
//     console.log(Element * 2)
// })

// const sys = number.map((Element, index, Array) => {
//     //creates a new array with transformed element
//     return Element * 2
// })
// console.log(sys)
// console.log(number)

let num = [1, 2, 3, 4, 2, 5, 66, 7, 8, 9]
// console.log(num.indexOf(2,3))   search than index 1,2 or number is not in array than -1
// console.log(num.includes(0))  search than true or falue

// Filter  1) Find Method 2) FindIndex Method

const Number = num.filter((Element) => {
    return Element > 4
})

console.log(Number)
