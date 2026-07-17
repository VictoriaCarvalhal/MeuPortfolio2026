import { Link } from "react-router-dom";

function Menu() {
    return (
        <>
            <div>
                <h1>Prazer, Victória Carvalhal</h1>
                <h2>Tecnica de Informatica</h2>
            </div>
            <div>
                <Link to="/">Me contate</Link>
            </div>
        </>
    )
}

export default Menu