class Producto {
    constructor (id, marca, tipo, precio, imagen){
        this.id = id
        this.marca = marca
        this.tipo = tipo
        this.precio = precio
        this.imagen = imagen
    }
    verData(){
        console.log(`el suplemento es ${this.tipo}, de la marca ${this.marca} y su precio es ${this.precio}.`)
    }
}

// ARRAY DE LA TIENDA
let tienda = []
const cargarTienda = async() =>{
    const response = await fetch("productos.json")
    const data = await response.json()
    console.log(data)
    for (let producto of data){
        let productoNuevo = new Producto (producto.id, producto.marca, producto.tipo, producto.precio, producto.imagen)
        tienda.push(productoNuevo)
    }
    localStorage.setItem("tienda", JSON.stringify(tienda) )
    
}

// ARRAY DEL CARRITO
let productosEnCarrito = JSON.parse(localStorage.getItem("productosEnCarrito")) || [] //CON OPERADOR OR


//STORAGE TIENDA CON OPERADOR TERNARIO - REVISA SI EXISTE TIENDA, SINO LO TRAE.
localStorage.getItem("tienda") ? tienda = JSON.parse(localStorage.getItem("tienda")) : cargarTienda()
