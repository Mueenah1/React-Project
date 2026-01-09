
import {useContext} from 'react'
import {ThemeContext} from './ThemeContext'
function Contact(){
    const [theme, toggleTheme] = useContext(ThemeContext)
    return(
        <div>
            <h3>The current theme is {theme}</h3>
            <button onClick={toggleTheme}>Change Theme</button>
            <div className="gitHub">
                <a href="http://">
                    <img src="" alt="GitHub Icon" />
                    <i class="fa-brands fa-github"></i>
                </a>
            </div>
            <div className="linkedIn">
                <a href="http://">
                    <img src="" alt="LinkedIn Icon" />
                    <i class="fa-brands fa-linkedin"></i>
                </a>
            </div>
            <div className="twitter">
                <a href="http://">
                    <img src="" alt="Twitter Icon" />
                    <i class="fa-brands fa-twitter"></i>
                </a>
            </div>
            <div className="instagram">
                <a href="http://">
                    <img src="" alt="Instagram Icon" />
                    <i class="fa-brands fa-instagram"></i>
                </a>
            </div>
        </div>
    )
}

export default Contact