const numbers = document.querySelectorAll('.number')
numbers.forEach((number, index, arr) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

const calculatorScreen = document.querySelector('.calculator-screen')
const updateScreen = (number) => {
    calculatorScreen.value = number
}

let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number
    }
    else {
        currentNumber += number
    }
}

const operators = document.querySelectorAll('.operator')
operators.forEach((operator, index, arr) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
    })
})


const inputOperator = (operator) => {
    if (calculationOperator === '') {
        prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = ''
}

const equalSign = document.querySelector('.equal-sign')
equalSign.addEventListener('click', () => {
    calculate()
    updateScreen(currentNumber)
})

const calculate = () => {

    let result = ''
    switch(calculationOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat (currentNumber)
            break
        case "-":
            result = parseFloat(prevNumber) - parseFloat (currentNumber)
            break
        case "*":
            result = parseFloat(prevNumber) * parseFloat (currentNumber)
            break
        case "/":
            result = parseFloat(prevNumber) / parseFloat (currentNumber)
            break
        default:
            break
    }
    prevNumber = currentNumber
    currentNumber = result
    calculationOperator = ''
}

const clearBtn = document.querySelector('.all-clear')
clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNumber)
})

const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}

const previousClearBtn = document.querySelector(".clear")
previousClearBtn.addEventListener('click', () => {
    clearPrevious()
    updateScreen(currentNumber)
})

const clearPrevious = () => {
    if (calculationOperator !== '') {
        calculationOperator = ''
        currentNumber = prevNumber
    }
    else {
        if (currentNumber.length > 1) {
            currentNumber = currentNumber.slice(0, -1)
        }
        else {
            currentNumber = prevNumber
        }
    }
}
 
const decimal = document.querySelector('.decimal')
decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

const inputDecimal = (dot) => {
    if (currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
}
