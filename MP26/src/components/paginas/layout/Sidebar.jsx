import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <aside className="sidebar">
            <div className="logo-section">
                <Link to="/">
                    <div className="logo-v">V</div>
                </Link>
                <p className="sidebar-name">Victória Carvalhal</p>
                <p className="sidebar-title">Técnica de Informática</p>
            </div>

            <nav className="menu">
                <ul>
                    <li><Link to="/">Início</Link></li>
                    <li><Link to="/sobre">Sobre</Link></li>
                    <li><Link to="/projetos">Projetos</Link></li>
                </ul>
            </nav>

            <div className="social-section">
                <p>Redes Sociais</p>
                <div className="social-icons">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                    </a>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar