import React from "react";

var CLformat = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP'
})

export default function Navbar({toggleCarro, Ptotal}) {

    return <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">
                Carro React
            </a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            </div>
            <div>
                <a onClick={toggleCarro} className="btn btn-outline-success">
                    
                    <i className=" fa-solid fa-cart-shopping">{CLformat.format(Ptotal)}</i></a>
            </div>
        </div>
    </nav>
}