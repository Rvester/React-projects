import {Link} from "react-router-dom";



export default function Nav(){
    return(
        <div className = 'Nav'>
            <Link to = "/">
                <div>HomePage</div>
            </Link>

            <Link to = "/borough">
                <div>Boroughs</div>
            </Link>
        </div>
    )
}