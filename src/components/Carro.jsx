import React from "react";
import CarroItem from "./Carroitem";

var CLformat = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP'
})

export default function Carro({ Visible, toggleCarro, ItemsCarro, Ptotal, eliminarItemCarro }) {

    const CarroStyles = {
        width: Visible ? '100%' : '0px',
        height: '100%',
        position: 'fixed',
        zIndex: '99',
        backgroundColor: 'white',
        top: '0px',
        right: '0px',
        transition: '0.5s'
    }

    const BtnCloseStyles = {
        fontSize: '2rem',
        position: 'absolute',
        top: '0px',
        right: '20px',
        cursor: 'pointer',
        display: Visible ? 'block' : 'none'
    }


    return <div style={CarroStyles}>

        <span onClick={toggleCarro} style={BtnCloseStyles}><i className="fa-solid fa-xmark"></i></span>

        <div style={{ display: Visible ? 'block' : 'none' }}>
            <div className="text-center"><h1>Carro de compras</h1></div>
            <p>Total: <strong>{CLformat.format(Ptotal)}</strong> </p>




        </div>


        <div style={ {overflow: 'scroll', height: '90vh'} }>
            {ItemsCarro.map(i => <CarroItem key={i.Producto.Id} Item={i} eliminarItemCarro={eliminarItemCarro} />)}
        </div>

    </div>
}