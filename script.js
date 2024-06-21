const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');
    toggleBtnIcon.classList = isOpen
        ? 'bi bi-x-lg'
        : 'bi bi-list'
}

document.getElementById('mail').addEventListener('click', function (event) {
    event.preventDefault();
    const email = "rocio.sandoval.chavez@cbtis118.edu.mx";
    navigator.clipboard.writeText(email).then(function () {
        alert('Correo electrónico copiado al portapapeles');
    }).catch(function (err) {
        console.error('Error al copiar al portapapeles: ', err);
    });
});

// Script para detectar si soporta el efecto borroso del mini menu 
// Si no lo soporta lo cambia por un fondo semi transparente
document.addEventListener('DOMContentLoaded', function() {
    if (!CSS.supports('backdrop-filter', 'blur(10px)')) {
        document.body.classList.add('no-dropdown_menu');
    }
});