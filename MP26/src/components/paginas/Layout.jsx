import { Outlet } from "react-router-dom";
import Sidebar from "./layout/Sidebar"

function Layout() {
    return (
        <div className="container">
            <Sidebar />
            <main className="content">
                {/* Elementos decorativos de fundo */}
                <span className="bg-code code-html">&lt;html&gt;</span>
                <span className="bg-code code-body">&lt;body&gt;</span>
                <span className="bg-code code-h1-open">&lt;h1&gt;</span>
                <span className="bg-code code-h1-close">&lt;/h1&gt;</span>
                <span className="bg-code code-p-close">&lt;/p&gt;</span>
                <span className="bg-code code-body-close">&lt;/body&gt;</span>

                <Outlet />
            </main>
        </div>
    )
}

export default Layout