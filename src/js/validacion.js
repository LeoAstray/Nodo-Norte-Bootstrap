// Validación de formularios con Bootstrap (.needs-validation)
// Se aplica a todos los formularios de la web: newsletter del footer,
// inscripción a eventos, alta de socio y propuesta de charla.
document.querySelectorAll('.needs-validation').forEach((form) => {
    form.addEventListener('submit', (event) => {
        // Si hay algún campo inválido, no se envía y se muestran los errores
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
            form.classList.add('was-validated');
            // Lleva el foco al primer campo con error para quien usa teclado
            form.querySelector(':invalid').focus();
            return;
        }

        form.classList.add('was-validated');

        // Los formularios con data-exito no tienen servidor todavía:
        // se oculta el formulario y se muestra el mensaje de confirmación
        const idExito = form.dataset.exito;
        if (idExito) {
            event.preventDefault();
            const mensaje = document.querySelector(idExito);
            form.hidden = true;
            mensaje.hidden = false;
            mensaje.focus();
        }
    });
});

// Modal de inscripción: rellena el evento elegido y reinicia el formulario
const modalInscripcion = document.getElementById('inscripcion');
if (modalInscripcion) {
    modalInscripcion.addEventListener('show.bs.modal', (event) => {
        const form = modalInscripcion.querySelector('form');
        const mensaje = modalInscripcion.querySelector('#inscripcion-exito');
        form.reset();
        form.classList.remove('was-validated');
        form.hidden = false;
        mensaje.hidden = true;

        // El botón "Asistir" pulsado indica el evento en data-evento
        const evento = event.relatedTarget && event.relatedTarget.dataset.evento;
        if (evento) {
            form.querySelector('#inscripcion-evento').value = evento;
        }
    });
}
