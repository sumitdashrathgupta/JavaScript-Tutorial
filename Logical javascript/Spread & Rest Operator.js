
//Reat operat - combani value
const addnumber = (a, b, c, ...other) => {
    console.log(other)
    return a + b + c;
}

const sys = addnumber(6, 3, 6, 2, 4, 65)
console.log(sys)

// ans :[ 2, 4, 65 ]


//Spread opertor - divied value

const arry = ['sumit', 'raj', 'chandani','ajay']

const getname = (name1, name2, name3, name4) => {
    console.log(name1, name2, name3, name4)
}
getname(...arry)


// ans : sumit raj chandani ajay