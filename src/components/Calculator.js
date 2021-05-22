import '../App.css';
import Output from './Output'
import ButtonGrid from './ButtonGrid'
import { useState } from 'react'

function Calculator({theme}) {
    const [output, setOutput] = useState('')
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
        if (operator === '' && button === "." && output.includes(".")) return
        if (operator !== '' && button === "." && output.split(operator)[1].includes('.')) return
        setOutput(prev => prev + button)
    }

    function deleteNumber() {
        setOutput(prev => prev.slice(0, -1))
    }

    function reset() {
        setOutput("")
        setOperator('')
    }

    function setOperation(operator) {
        if (operator !== '' && output.includes(operator)) return
        if (output === '') return
        setOperator(operator)
        setOutput(prev => prev + operator)
    }

    function compute() {
        let result
        let current = parseFloat(output.split(operator)[1])
        let previous = parseFloat(output.split(operator)[0])
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
        setOutput(result)
        setOperator('')
    }

    return (
        <div className="calculator">
            <Output operator={operator} convertNumber={convertNumber} output={output} theme={theme}/>
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
