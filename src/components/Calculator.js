import '../App.css';
import Output from './Output'
import ButtonGrid from './ButtonGrid'
import { useState } from 'react'

function Calculator({theme}) {
    const [firstVal, setFirstVal] = useState('')
    const [secondVal, setSecondVal] = useState('')
    const [operator, setOperator] = useState('')
    function convertNumber(number) {
        const stringNum = number.toString()
        let integerOutput
        let integers = parseFloat(stringNum.split('.')[0])
        let decimalNums = stringNum.split('.')[1]

        if (isNaN(integers)) {
            integerOutput = ''
        } else {
            integerOutput = integers.toLocaleString('en', {maximumFractionDigits: 0})
        }

        if (decimalNums != null) {
            return `${integerOutput}.${decimalNums}`
        } else {
            return integerOutput
        }

    }

    function displayNumber(button) {
        if (operator === '' && button === "." && firstVal.includes(".")) return
        if (operator !== '' && button === "." && secondVal.includes('.')) return
        if (operator !== '') {
            setSecondVal(prev => prev + button)
        } else {
            setFirstVal(prev => prev + button)
        }
    }

    function deleteNumber() {
        if (firstVal !== '' && operator !== '' && secondVal !== '') {
            setSecondVal(prev => prev.slice(0, -1))
        } else if (firstVal !== '' && operator !== '' && secondVal === '') {
            setOperator('')
        } else if (firstVal !== '' && operator === '' && secondVal === '') {
            setFirstVal(prev => prev.slice(0, -1))
        }
    }

    function reset() {
        setOperator('')
        setFirstVal('')
        setSecondVal('')
    }

    function setOperation(operator) {
        if (secondVal !== '' ) return
        if (firstVal === '') return
        setOperator(operator)
    }

    function compute() {
        let result
        
        let current = parseFloat(secondVal)
        let previous = parseFloat(firstVal)
        if (isNaN(current) || isNaN(previous) || operator === '') return
        switch (operator) {
            case "+":
                result = previous + current
                break
            case "-":
                result = previous - current
                break
            case "x":
                result = previous * current
                break
            case "/":
                result = previous / current
                break
            default:
                return
        }
        setFirstVal(result.toFixed())
        setSecondVal('')
        setOperator('')
    }

    return (
        <div className="calculator">
            <Output firstVal={firstVal} secondVal={secondVal} operator={operator} convertNumber={convertNumber} theme={theme}/>
            <ButtonGrid 
                onReset={reset} 
                onOperation={setOperation}
                onPress={displayNumber} 
                onDelete={deleteNumber}
                onCompute={compute} 
                theme={theme} 
            />
        </div>
    )
}

export default Calculator
