import {useContext} from 'react'
import {ThemeContext} from './ThemeContext'

function Home(){
    const [theme, toggleTheme] = useContext(ThemeContext)

    return(
        <div style={{backgroundColor: theme === 'light' ? '#fff' : '#333'}}>
            <h1>Welcome to Mueenah's Portfolio</h1>
            <h3>The current theme is {theme}</h3>
            <button onClick={toggleTheme}>Change Theme</button>
        </div>
    )
}

export default Home