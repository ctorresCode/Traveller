async function loadNav() {
  const response = await fetch('/src/nav.html'); // Ruta del archivo nav.html
  const navHTML = await response.text(); // Obtén el contenido como texto
  document.getElementById('nav-container').innerHTML = navHTML; // Inserta el nav en el contenedor
}

async function loadPage(page) {
  const response = await fetch(`/src/${page}.html`);  // Cargar la página específica
  const pageContent = await response.text();  // Obtener el contenido de la página
  document.getElementById('content').innerHTML = pageContent;  // Inyectar el contenido en el contenedor
}

// Cargar el nav cuando se cargue la página
window.onload = function(){
  loadNav();
  loadPage('Index');
}