// Obtener los elementos del formulario
const form = document.getElementById("formulario");
const rut = document.getElementById("rut");
const apPat = document.getElementById("apellido-paterno");
const apMat = document.getElementById("apellido-materno");
const nombre = document.getElementById("nombre");
const fechaNacimiento = document.getElementById("fecha-nacimiento");
const edad = document.getElementById("edad");
const genero = document.getElementById("genero");
const email = document.getElementById("email");
const celular = document.getElementById("celular");
const profesion = document.getElementById("profesion");
const motivacion = document.getElementById("motivacion");

// Obtener el elemento del botón "Crear Carta"
const btnCrearCarta = document.getElementById("btn-crear-carta");

// Agregar el evento click al botón "Crear Carta"
btnCrearCarta.addEventListener("click", () => {
  // Validar el formulario antes de generar la carta
  if (validarFormulario()) {
    // Obtener los valores de los campos del formulario
    const rutValor = rut.value;
    const apPatValor = apPat.value;
    const apMatValor = apMat.value;
    const nombreValor = nombre.value;
    const fechaNacimientoValor = fechaNacimiento.value;
    const edadValor = edad.value;
    const generoValor = genero.value;
    const emailValor = email.value;
    const celularValor = celular.value;
    const profesionValor = profesion.value;
    const motivacionValor = motivacion.value;

    // Generar la carta de presentación
    const carta = `Estimados miembros de la Fundación Chile Limpio:

    Me dirijo a ustedes con el objetivo de expresar mi más sincera intención de postular al trabajo de apoyo ambiental en la isla de Chiloé, para colaborar en la recolección y descontaminación en la zona.

    Los siguientes son mis datos personales:

    - Rut: ${rutValor}
    - Apellido Paterno: ${apPatValor}
    - Apellido Materno: ${apMatValor}
    - Nombre: ${nombreValor}
    - Fecha de Nacimiento: ${fechaNacimientoValor}
    - Edad: ${edadValor}
    - Género: ${generoValor}
    - Email: ${emailValor}
    - Celular: ${celularValor}
    - Profesión: ${profesionValor}

    Además, quiero destacar mi motivación para postular al trabajo, la cual es la siguiente:

    ${motivacionValor}

    Agradezco de antemano la oportunidad que me brindan de participar en este proyecto y contribuir con el cuidado del medio ambiente en la isla de Chiloé.

    Atentamente,
    ${nombreValor}
    `;

    // Asignar la carta generada al campo textarea correspondiente
    const cartaTextArea = document.getElementById("carta");
    cartaTextArea.value = carta;
  }
});

// Función para validar el formulario
function validarFormulario() {
  // Obtener los valores de los campos del formulario
  const rutValor = rut.value;
  const apPatValor = apPat.value;
  const apMatValor = apMat.value;
  const nombreValor = nombre.value;
  const fechaNacimientoValor = fechaNacimiento.value;
  const edadValor = edad.value;
  const generoValor = genero.value;
  const emailValor = email.value;
  const celularValor = celular.value;
}
