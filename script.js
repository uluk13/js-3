

const IncrimentElement = document.querySelector('.increment')
const DecrementElement = document.querySelector('.decrement')
const result = document.querySelector('.result')
let count = 0
IncrimentElement.addEventListener("click", () => {
    count++
    result.innerText = count
    result.style.backgroundColor = "green"
})
DecrementElement.addEventListener("click", () => {
    if (count > 0) {
        count--
        result.innerText = count
        result.style.backgroundColor = "red"
    }
})


const Cursor = document.querySelector('.block-cursor')
Cursor.addEventListener("mousemove", () => {
    console.log("mouse");
    
})


const input = document.querySelector('.colorInput');
input.addEventListener("input", (e) => {
    const value = e.target.value;
    if (value === '') {
      document.body.style.backgroundColor = '';
      return;
    }
    document.body.style.backgroundColor = value;
});

