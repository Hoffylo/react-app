import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Productos from "./data.json"
import Product from "./components/Product";
import Carro from "./components/Carro";

function App() {

  const [Visible, setVisible] = React.useState(false)
  const [ProductosEnCarro, setProductosEnCarro] = React.useState([])
  const [Total, setTotal] = React.useState(0)

  //const itemsCarro = []
  let T = 0
  const updateTotal = (Array) => {
    Array.forEach(i =>{
      T += parseInt(i.SubTotal)
    })
    setTotal(T)
  }

  const EliminarDelCarro = (Id) =>{
    const nuevoArray = ProductosEnCarro.filter(x => x.Producto.Id !== Id)
    setProductosEnCarro(nuevoArray)
    updateTotal(nuevoArray)
  } 

  const toggleVisible = () => {
    setVisible(!Visible)
  }

  const addTocart = (P) =>{
    const Producto = ProductosEnCarro.find(x => x.Producto.Id === P.Id)

    if(Producto === undefined){
      var newItem = { Producto : P, Cantidad : 1, SubTotal : P.Precio }
      ProductosEnCarro.push(newItem)
      setProductosEnCarro(ProductosEnCarro)
    }else{
      //Producto ya agregado, sumar propiedades
      Producto.Cantidad += 1
      const SubTotal = parseInt(Producto.Producto.Precio) * parseInt(Producto.Cantidad)
      Producto.SubTotal = SubTotal
      setProductosEnCarro(ProductosEnCarro)
    }
    updateTotal(ProductosEnCarro)
  }



  return (
    <div>
      <Navbar Ptotal = {Total} toggleCarro={toggleVisible}/>
      <Carro Ptotal = {Total} toggleCarro={toggleVisible} Visible = {Visible} ItemsCarro={ProductosEnCarro} eliminarItemCarro={EliminarDelCarro} />
      <div className="row justify-content-center">
        { Productos.map (element =>  < Product key={element.Id }  
        cartAdd = {addTocart} 
        Producto={element}
        toggleCarro={toggleVisible}
        />)}
      </div>
    </div>
  );
}

export default App;
