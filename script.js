class Calculator{
    constructor(previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()    
    }
    clear(){
        this.previousOperand = ''
        this.currentoperand = ''
        this.operation = undefined

    }

    delete(){

    }
    appendNumber(number){
        this.currentoperand = number

    }
    chooseOperation(operation){

    }

    Compute(){

    }
    updateDisplay(){
        this.currentOperandTextElement.innerText = this.currentoperand

    }
}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operations]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        caclucator.appendNUmber(button.innerText)
        caclucator.updateDisplay()

    })
})