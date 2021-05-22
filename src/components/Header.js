import '../App.css';
import ThemeToggle from './ThemeToggle'

function Header({theme, rangeRef, onChange, value}) {
    return (
        <header className="header">
            <h1 className="title" style={{color: theme.textHeader}}>calc</h1>
            <ThemeToggle value={value} theme={theme} rangeRef={rangeRef} onChange={onChange}/>
        </header>
    )
}

export default Header
