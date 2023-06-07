let miImage = document.querySelector('img');
miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/pesas.jpg') {
      miImage.setAttribute('src','images/pesas2.jpg');
    } else {
      miImage.setAttribute('src', 'images/pesas.jpg');
    }
}
let miBoton = document.querySelector('button');
let miTitulo = document.querySelector( 'h1');
function estableceNombreUsuario() {
    let miNombre = prompt('Por favor, ingresa tu nombre.');
    localStorage.setItem('nombre', miNombre);
    miTitulo.textContent = 'Tu puedes con todo,' + miNombre;
}
if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Tu puedes con todo,' + nombreAlmacenado;
}
miBoton.onclick = function() {
    estableceNombreUsuario();
}


