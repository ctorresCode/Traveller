function moverIzquierda(id) {
    let contenedor = document.getElementById(id);
    if (contenedor) {
        contenedor.scrollBy({ left: -350, behavior: 'smooth' });
    } else {
        console.error("No se encontró el contenedor con ID:", id);
    }
}

function moverDerecha(id) {
    let contenedor = document.getElementById(id);
    if (contenedor) {
        contenedor.scrollBy({ left: 350, behavior: 'smooth' });
    } else {
        console.error("No se encontró el contenedor con ID:", id);
    }
}