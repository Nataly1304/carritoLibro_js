const cantidadProducto = {};

function incremento(idLibro) {
    if (!cantidadProducto[idLibro]) {
        cantidadProducto[idLibro] = 0;
    }
    cantidadProducto[idLibro]++;
    actualizarCantidad(idLibro);
}

function decremento(idLibro) {
    if (cantidadProducto[idLibro] && cantidadProducto[idLibro] > 0) {
        cantidadProducto[idLibro]--;
        actualizarCantidad(idLibro);
    }
}

function actualizarCantidad(idLibro) {
    const productoCantidad = document.getElementById(`count${idLibro}`);
    if (productoCantidad) {
        productoCantidad.textContent = cantidadProducto[idLibro];
    }
}

function mostrarCarrito() {
    const carrito = document.getElementById("cart");
    carrito.innerHTML = "<h2>Carrito de Compras</h2>";

    let precioTotal = 0;

    for (const idLibro in cantidadProducto) {
        const cantidad = cantidadProducto[idLibro];
        const productoLibro = document.querySelector(`.book[data-id="${idLibro}"]`);
        const nombreLibro = productoLibro ? productoLibro.dataset.name : "Libro Desconocido";
        const precioLibro = productoLibro ? parseFloat(productoLibro.dataset.price) : 0;

        const subtotal = cantidad * precioLibro;
        precioTotal += subtotal;

        carrito.innerHTML += `<p>${nombreLibro} x ${cantidad} = $${subtotal.toFixed(2)}</p>`;
    }

    carrito.innerHTML += `<p>Total: $${precioTotal.toFixed(2)}</p>`;
}

