import { Link } from "react-router-dom"

function Anchor (Link, text, msn) {
    return(
        <div>{msn}
            <Link to={link}>{text}</Link>
        </div>
    )
}