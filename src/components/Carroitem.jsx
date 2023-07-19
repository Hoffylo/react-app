
var CLformat = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP'
})

export default function CarroItem( {Item, eliminarItemCarro} ) {

    const BtnDelStyles = {
        cursor: 'pointer'
    }


    return <div className="m-2 p-2 justify-content-center">
        <div className="row justify-content-center">
            <div className="card col-md-6 position-relative">
                <div className="row p-2 ">

                    <div className="col-4">
                        <img width="150" height="150"
                            alt="Imagen" src= {Item.Producto.linkImagen} ></img>
                    </div>
                    <div className="col-8 text-center">
                        <p style={{lineHeight : '0.7'} }> <strong>{Item.Producto.Descripcion} </strong> </p>
                        <hr></hr>
                        <p style={{lineHeight : '0.7'} }>Precio Unitario: <strong>{ CLformat.format(Item.Producto.Precio)}</strong> </p>
                        <p style={{lineHeight : '0.7'} }>Stock: <strong> {Item.Producto.Stock} </strong> </p>
                        <p style={{lineHeight : '0.7'} }>Subtotal: <strong> {CLformat.format(Item.SubTotal)} </strong> </p>

                    </div>

                </div>

                <span  onClick={() => eliminarItemCarro(Item.Producto.Id) } className="position-absolute" style={ {right : '10px', top : '10px'} }>
                <span style={ BtnDelStyles }><i className="fa-solid fa-trash"></i></span>
                </span>
            </div>

        </div>


    </div>
}