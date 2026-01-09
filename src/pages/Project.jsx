import { Link, Outlet } from "react-router-dom";

function Project(){
    return(
        <div>
            <h1>My Projects</h1>
            <ol>
                <li>
                    <Link to='/africanCountries'>
                        African Countries
                    </Link>
                </li>
                <li></li>
            </ol>
            <Outlet/>
        </div>
    )
}

export default Project