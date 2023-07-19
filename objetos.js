// Definir un objeto Contacto con propiedades de id, nombres, apellidos, teléfono y ubicaciones
function Contacto(id, nombres, apellidos, telefono, ciudad, direccion) {
  this.id = id;
  this.nombres = nombres;
  this.apellidos = apellidos;
  this.telefono = telefono;
  this.ubicaciones = {
    ciudad: ciudad,
    direccion: direccion,
  };
}

// Crear una lista de contactos utilizando objetos Contacto
let listaContactos = [
  new Contacto(1,"Andres","Sanabria","3105689541","Bogota","carrera 7 #34-15"),
  new Contacto(2, "Jackson", "Diaz", "3143259874", "Cali", "calle 34D #125-37"),
  new Contacto(3,"David","Mahecha","3202528964","Barranquilla","trasversal 114 #143B-18"),
  new Contacto(4,"Paula","Cano","3157516923","Medellin","carrera 10 #38-47"),
];

// Función para generar un nuevo ID para un contacto
function generarId() {
  return listaContactos.length + 1;
}

// Función para agregar un nuevo contacto a la lista
function agregarContacto(nombres, apellidos, telefono, ciudad, direccion) {
  let id = generarId();
  let nuevoContacto = new Contacto(
    id,
    nombres,
    apellidos,
    telefono,
    ciudad,
    direccion
  );
  listaContactos.push(nuevoContacto);
}

// Función para eliminar un contacto existente de la lista por su ID
function borrarContacto(id) {
  let index = listaContactos.findIndex((contacto) => contacto.id === id);
  if (index !== -1) {
    listaContactos.splice(index, 1);
  }
}

// Función para imprimir los contactos en la consola
function imprimirContactos() {
  console.log("Lista de contactos:");
  listaContactos.forEach((contacto, index) => {
    console.log("ID: " + contacto.id);
    console.log("Nombres: " + contacto.nombres);
    console.log("Apellidos: " + contacto.apellidos);
    console.log("Teléfono: " + contacto.telefono);
    console.log("Ciudad: " + contacto.ubicaciones.ciudad);
    console.log("Dirección: " + contacto.ubicaciones.direccion);
    console.log("---------------------");
  });
}

// Ejemplo de uso:
imprimirContactos(listaContactos); // Imprime la lista de contactos inicial

agregarContacto("Juan","Ignacio","3234658123","Yopal","condominio nueva zelanda"); // Añade un nuevo contacto
imprimirContactos(listaContactos); // Imprime la lista de contactos actualizada

borrarContacto(2); // Borra un contacto existente por su ID
imprimirContactos(); // Imprime la lista de contactos actualizada
