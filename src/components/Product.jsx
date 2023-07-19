import React from "react";

var CLformat = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP'
})


export default function Product({ Producto , cartAdd, toggleCarro }) {
    return <div className="card col-md-3 m-2 p-2 text-center">
        <div className="card-body">        
            <p><strong> {Producto.Descripcion} </strong></p>
            <img src= { Producto.linkImagen }  height="220" width="220" alt="Producto Imagen" />
            <p>Precio: <strong>{ CLformat.format(Producto.Precio)}</strong></p>
            <p>Stock: <strong>{ Producto.Stock }</strong></p> 
            <button onClick={ () => (cartAdd(Producto), toggleCarro()) } 
            className="btn btn-outline-success">Add to cart</button>
        </div>
    </div>

}