const input = document.querySelector('#inputtext')
const btn = document.querySelector('.btx')
const screendata = document.querySelector('.todolistele')

function addTodo() {
    // console.log(input.value);
    let pEele = document.createElement('p');
    pEele.textContent = input.value;
    console.log(pEele);
    screendata.append(pEele);
    input.value="";
}


btn.addEventListener('click', () => {
    addTodo();
}
)