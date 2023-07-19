// Lista de contactos con datos predefinidos
let listaContactos = [
  "andres sanabria",
  "Jackson diaz",
  "david mahecha",
  "paula cano"
];

// Función para añadir un nuevo contacto a la lista
function agregarContacto(contacto) {
  listaContactos.push(contacto);
}

// Función para borrar un contacto existente de la lista
function borrarContacto(contacto) {
  let index = listaContactos.indexOf(contacto);
  if (index !== -1) {
    listaContactos.splice(index, 1);
  }
}

// Función para imprimir los contactos en la consola
function imprimirContactos(contactos) {
  console.log("Lista de contactos:");
  for (const iterator of contactos) {
    console.log(iterator);
  }
}

// Ejemplo de uso:
imprimirContactos(listaContactos); // Imprime la lista de contactos inicial

agregarContacto("Juan ignacio"); // Añade un nuevo contacto
imprimirContactos(listaContactos); // Imprime la lista de contactos actualizada

borrarContacto("paula cano"); // Borra un contacto existente
imprimirContactos(listaContactos); // Imprime la lista de contactos actualizada
