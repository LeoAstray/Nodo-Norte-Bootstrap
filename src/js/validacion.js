// Validación de formularios con Bootstrap (.needs-validation)
// Se usa en todos los formularios de la web.
document.querySelectorAll('.needs-validation').forEach((form) => {
    form.addEventListener('submit', (event) => {
        // Siempre se evita el envío: la web es estática y no hay servidor
        event.preventDefault();

        // Muestra los errores de Bootstrap si hay campos inválidos
        form.classList.add('was-validated');

        if (form.checkValidity()) {
            alert('¡Enviado correctamente!');
            form.reset();
            form.classList.remove('was-validated');
        }
    });
});
