import {useContext} from 'react'
import {ThemeContext} from './ThemeContext'
import { Link, Outlet } from "react-router-dom";


function Project(){
    const [theme, toggleTheme] = useContext(ThemeContext)
    return(
        <div>
            <h3>The current theme is {theme}</h3>
            <button onClick={toggleTheme}>Change Theme</button>
            <h1>My Projects</h1>
            <ol>
                <li>
                    <Link to='/africanCountries'>
                        African Countries
                    </Link>
                </li>
                <li>
                    <Link to='/stopWatch'>StopWatch</Link>
                </li>
            </ol>
            <Outlet/>
        </div>
    )
}

export default Project