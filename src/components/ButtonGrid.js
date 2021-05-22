import '../App.css';
import styled from 'styled-components'
import { useState, useEffect } from 'react'

function ButtonGrid({theme, onPress, onDelete, onReset, onOperation, onCompute}) {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1300)
    function updateScreen() {
        setIsDesktop(window.innerWidth > 1300)
    }

    useEffect(() => {
        window.addEventListener('resize', updateScreen)
        return () => window.removeEventListener('resize', updateScreen)
    })

    const buttonText = ["7", "8", "9", "DEL", "4", "5", "6", "+", "1", "2", "3", "-", ".", "0", "/", "x", "RESET", "="]
    const numberArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."]
    const operatorArr = ["+", "-", "/", "x"]

    const Button = styled.button`
    font-size: ${isDesktop ? "3.2rem" : "2.8rem"};
    padding: .5em 0;
    border-radius: 5px;
    cursor: pointer;
    color: ${theme.textPrimary};
    border: none;
    box-shadow: 0 4px ${theme.backgroundButtonPrimaryShadow};
    background-color: ${theme.backgroundButtonPrimary};
    transition: all .2s ease;
    &:hover {
        background-color: ${theme.backgroundButtonPrimaryHover};
    }
    `
    const ResetDelButton = styled(Button)`
        background-color: ${theme.backgroundButtonDelReset}; 
        color: ${theme.textWhite}; 
        font-size: ${isDesktop ? "2rem" : "1.6rem"};
        box-shadow: 0 4px ${theme.backgroundButtonDelResetShadow} ;
        &:hover {
            background-color: ${theme.backgroundButtonDelResetHover};
        }
    `

    const EqualsButton = styled(Button)`
        background-color: ${theme.backgroundButtonEquals}; 
        color: ${theme.textWhite}; 
        font-size: ${isDesktop ? "2rem" : "1.2rem"};
        padding: ${isDesktop ? "1.9rem 0" : "1.9rem 0"};
        box-shadow: 0 4px ${theme.backgroundButtonEqualsShadow};
        &:hover {
            background-color: ${theme.backgroundButtonEqualsHover};
        }
    `
    const handleClick = (e) => {
        if (numberArr.includes(e.target.innerText)) {
            onPress(e.target.innerText)
        } else if (operatorArr.includes(e.target.innerText)) {
            onOperation(e.target.innerText)
        } else if (e.target.innerText === "DEL") {
            onDelete(e.target.innerText)
        } else if (e.target.innerText === "RESET") {
            onReset() 
        } else if (e.target.innerText === "=") {
            onCompute() 
        }
    }

    return (
        <div className="button-grid" style={{backgroundColor: theme.backgroundKeypad}}>
            {buttonText.map((button, index) => (
                button === "RESET" || button === "DEL" ? <ResetDelButton 
                key={index}
                className={button === "RESET" ? "span-two" : ""}
                onClick={handleClick}
                >{button}</ResetDelButton> : button === "=" ? <EqualsButton 
                key={index}
                onClick={handleClick}
                className="button span-two"
                >{button}</EqualsButton> : <Button 
                key={index} onClick={handleClick}>{button}</Button>
            ))}
        </div>
    )
}

export default ButtonGrid
