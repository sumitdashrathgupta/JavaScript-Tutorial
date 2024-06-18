
function num(x, y, Chock) {
    switch (Chock) {
        case 'add':
            let Adding = x + y;
            console.log(Adding);
            break;
        case 'sub':
            let subc = x - y;
            console.log(subc);
            break;
        case 'mul':
            let muli = x * y;
            console.log(muli);
            break;
        case 'div':
            let Diving = x / y;
            console.log(Diving);
            break;
        default:
            console.log("Number is not proper")
    }
}

let add, sub, mul, div;
let a = prompt("Enter the first number")
let b = prompt("Enter the Second number")
let Chock = prompt("Enter the add,sub,mul,div ")

num(parseInt(a), parseInt(b), Chock);

