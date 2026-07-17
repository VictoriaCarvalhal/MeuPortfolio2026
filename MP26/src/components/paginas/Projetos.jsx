import CardProjeto from "./projetos/cardProjeto"

function Projetos() {
    return (
        <section className="page-section">
            <h1 className="page-title">Meus Projetos</h1>
            <div className="pink-line"></div>

            <div className="projetos-grid">
                <CardProjeto />
            </div>
        </section>
    )
}

export default Projetos