let num1 = Number(prompt("Enter the Number 1"))
let num2 = Number(prompt("Enter the Number 2"))

const disNum1 = document.getElementById("num1")
const disNum2 = document.getElementById("num2")
const disNum3 = document.getElementById("num3")
const arithmaticOpe = document.getElementById("container")

if(num1 && num2) {
    disNum1.innerText = num1;
    disNum2.innerText = num2;
}

arithmaticOpe.addEventListener('click', function(operation) {
    
    switch (operation.target.innerText) {
        case "+":
            disNum3.innerText = Number(disNum1.innerText) + Number(disNum2.innerText)
            break;
        case "-":
            disNum3.innerText = Number(disNum1.innerText) - Number(disNum2.innerText)
            break;
        case "x":
            disNum3.innerText = Number(disNum1.innerText) * Number(disNum2.innerText)
            break;
        case "/":
            disNum3.innerText = Number(disNum1.innerText) / Number(disNum2.innerText)
            break;
    
        default:
            break;
    }
})