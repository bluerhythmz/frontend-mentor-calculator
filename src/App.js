import './App.css';
import { useState, useRef } from 'react'
import {ThemeOne, ThemeTwo, ThemeThree} from './components/Themes'
import Header from './components/Header'
import Calculator from './components/Calculator'

function App() {
  const [theme, setTheme] = useState(ThemeOne)
  const [value, setValue] = useState(1)
  const rangeRef = useRef()

  function themeChanger() {
    if (rangeRef.current.value === "2") {
      setTheme(ThemeTwo)
      setValue(2)
    } else if (rangeRef.current.value === "3") {
      setTheme(ThemeThree)
      setValue(3)
    } else if (rangeRef.current.value === "1") {
      setTheme(ThemeOne)
      setValue(1)
    }
}

  return (
    <div className="App" style={{backgroundColor: theme.backgroundMain}}>
      <Header theme={theme} value={value} rangeRef={rangeRef} onChange={themeChanger}/>
      <Calculator theme={theme} />
    </div>
  );
}

export default App;
