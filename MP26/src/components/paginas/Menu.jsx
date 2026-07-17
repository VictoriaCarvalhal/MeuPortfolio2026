import { useState } from 'react'

function Menu() {
    const [contactOpen, setContactOpen] = useState(false)

    return (
        <section className="hero">
            <h1 className="greeting">Prazer,</h1>
            <h2 className="main-name">Victória Carvalhal</h2>
            <div className="pink-line"></div>
            <p className="main-title">Técnica de Informática</p>

            <button
                className="contact-btn"
                onClick={() => setContactOpen(!contactOpen)}
            >
                Me contate
            </button>

            <div className={`contact-info ${contactOpen ? 'open' : ''}`}>
                <span>Email: ######@gmail.com</span>
                <span>Telefone: #####-#####</span>
            </div>
        </section>
    )
}

export default Menu