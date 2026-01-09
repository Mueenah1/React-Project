import {useContext} from 'react'
import {ThemeContext} from './ThemeContext'
function AboutME(){
    const [theme, toggleTheme] = useContext(ThemeContext)
    return(
        <div>
            <h3>The current theme is {theme}</h3>
            <button onClick={toggleTheme}>Change Theme</button>
            <h1>About Me</h1>
            <p>Hello! I'm Mueenah, a passionate developer with a love for creating beautiful and functional web applications. With a background in computer science and a keen eye for design, I strive to build user-friendly experiences that make a difference.</p>
        </div>
    )
}
export default AboutME