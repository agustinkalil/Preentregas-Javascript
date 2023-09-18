
import { beatsDisponibles } from "./inicio.js"


JSON.parse(sessionStorage.getItem("carrito")) === null && sessionStorage.setItem("carrito", JSON.stringify([]))

let carrito = JSON.parse(sessionStorage.getItem("carrito"))

export const comprarProducto = (idProducto) => { 

    const producto = beatsDisponibles.find((producto) => producto.id === idProducto)

    const { id, nombre, bpm, imagen, precio } = producto

    const productoCarrito = carrito.find((producto) => producto.id === idProducto)

    if(productoCarrito === undefined){
        const nuevoProductoCarrito = {
            id: id,
            nombre: nombre,
            bpm: bpm,
            imagen: imagen,
            precio: precio,
            cantidad: 1
        }

        carrito.push(nuevoProductoCarrito)

        sessionStorage.setItem("carrito", JSON.stringify(carrito))

    }else{
        const indexProductoCarrito = carrito.findIndex((producto) => producto.id === idProducto)

        carrito[indexProductoCarrito].cantidad++
        carrito[indexProductoCarrito].precio = precio * carrito[indexProductoCarrito].cantidad

        sessionStorage.setItem("carrito", JSON.stringify(carrito))
    }

    carrito = JSON.parse(sessionStorage.getItem("carrito"))

    alert(`Has adquirido una licencia de la instrumental ${nombre}`)

    console.log(carrito);
}

