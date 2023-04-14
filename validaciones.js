// Definimos variables para guardar los elementos del formulario
const rut = document.getElementById("rut");
const apellidoPaterno = document.getElementById("apellido-paterno");
const apellidoMaterno = document.getElementById("apellido-materno");
const nombre = document.getElementById("nombre");
const fechaNacimiento = document.getElementById("fecha-nacimiento");
const edad = document.getElementById("edad");
const genero = document.getElementById("genero");
const email = document.getElementById("email");
const celular = document.getElementById("celular");
const profesion = document.getElementById("profesion");
const motivacion = document.getElementById("motivacion");

// Función para validar el RUT
function validarRut() {
  const rutValue = rut.value.trim();
  if (rutValue.length < 9 || rutValue.length > 10) {
    alert("El RUT debe tener entre 9 y 10 caracteres.");
    return false;
  }
  return true;
}

// Función para validar el apellido paterno
function validarApellidoPaterno() {
  const apellidoPaternoValue = apellidoPaterno.value.trim();
  if (apellidoPaternoValue.length < 3 || apellidoPaternoValue.length > 20) {
    alert("El apellido paterno debe tener entre 3 y 20 caracteres.");
    return false;
  }
  return true;
}

// Función para validar el apellido materno
function validarApellidoMaterno() {
  const apellidoMaternoValue = apellidoMaterno.value.trim();
  if (apellidoMaternoValue.length < 3 || apellidoMaternoValue.length > 20) {
    alert("El apellido materno debe tener entre 3 y 20 caracteres.");
    return false;
  }
  return true;
}

// Función para validar el nombre
function validarNombre() {
  const nombreValue = nombre.value.trim();
  if (nombreValue.length < 3 || nombreValue.length > 20) {
    alert("El nombre debe tener entre 3 y 20 caracteres.");
    return false;
  }
  return true;
}

// Función para validar la fecha de nacimiento y la edad
function validarFechaNacimiento() {
  const fechaNacimientoValue = fechaNacimiento.value.trim();
  const fechaNacimientoDate = new Date(fechaNacimientoValue);
  const hoy = new Date();
  const edadValue = hoy.getFullYear() - fechaNacimientoDate.getFullYear();
  if (edadValue < 18 || edadValue > 35) {
    alert("La edad debe estar entre 18 y 35 años.");
    return false;
  }
  edad.value = edadValue;
  return true;
}

// Función para validar el género
function validarGenero() {
  const generoValue = genero.value.trim();
  if (generoValue === "") {
    alert("Debe seleccionar un género.");
    return false;
  }
  return true;
}

// Función para validar el celular
function validarCelular() {
  const celularValue = celular.value.trim();
  if (celularValue.length < 9 || celularValue.length > 12) {
    alert("El número de celular debe tener entre 9 y 12 dígitos.");
    return false;
  }
  return true;
}

function generarCarta() {
  // Obtener los datos ingresados en el formulario
  const rut = document.getElementById("rut").value;
  const apPaterno = document.getElementById("apellido-paterno").value;
  const apMaterno = document.getElementById("apellido-materno").value;
  const nombre = document.getElementById("nombre").value;
  const fechaNacimiento = document.getElementById("fecha-nacimiento").value;
  const edad = document.getElementById("edad").value;
  const genero = document.getElementById("genero").value;
  const email = document.getElementById("email").value;
  const celular = document.getElementById("celular").value;
  const profesion = document.getElementById("profesion").value;
  const motivacion = document.getElementById("motivacion").value;

  // Validar que todos los campos estén completos
  if (
    rut === "" ||
    apPaterno === "" ||
    apMaterno === "" ||
    nombre === "" ||
    fechaNacimiento === "" ||
    edad === "" ||
    genero === "" ||
    email === "" ||
    celular === "" ||
    profesion === "" ||
    motivacion === ""
  ) {
    alert("Por favor complete todos los campos del formulario.");
    return;
  }

  // Concatenar los datos ingresados en la carta de presentación
  const carta = `Estimados,

Mi nombre es ${nombre} ${apPaterno} ${apMaterno}, con RUT ${rut}, de ${edad} años de edad y género ${genero}. 
Me gustaría postular al trabajo de apoyo ambiental para Chiloé.

Mi profesión es ${profesion} y considero que puedo aportar al proyecto de manera significativa.

${motivacion}

Quedo atento/a a sus comentarios.

Saludos cordiales,
${nombre}`;
  
  // Asignar la carta al campo de texto correspondiente
  document.getElementById("carta").value = carta;
}
