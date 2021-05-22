import '../App.css';
import styled from 'styled-components'

function ThemeToggle({theme, rangeRef, onChange, value}) {
    const Range = styled.input`
        max-width: 7.1rem;
        height: 2.4rem;
        appearance: none;
        border-radius: 1.3rem;
        background-color: ${theme.backgroundToggle};
        margin-top: .5rem;
        &::-webkit-slider-thumb {
            appearance: none;
            height: 1.4rem;
            width: 1.4rem;
            border-radius: 50%;
            background-color: ${theme.toggle};
            cursor: pointer;
        }
        &::-webkit-slider-thumb:hover {
            background-color: ${theme.toggleHover};
        }
    `
    
    return (
        <div className="toggle">
            <p className="toggle__title" style={{color: theme.textThemeToggle}}>theme</p>
            <div className="toggle-slider-wrapper">
                <div className="toggle__numbers" style={{color: theme.textThemeToggle}}>
                    <div className="number">1</div>
                    <div className="number">2</div>
                    <div className="number">3</div>
                </div>
                <Range onChange={onChange} type="range" min="1" max="3" value={value} ref={rangeRef} />
            </div>
        </div>
    )
}

export default ThemeToggle
