import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <>
            <div>
                <Link to="/">Logo</Link>
            </div>
            <div>
                <Link to="/sobre">Sobre</Link>
                <Link to="/projetos">Projetos</Link>
                <Link to="/">Blog</Link>
            </div>
            <div>
                <span>Redes Sociais</span>
                <Link to="/">Linkedin</Link>
                <Link to="/">Github</Link>
            </div>
        </>
    )
}

export default Sidebar