//VARIABLES
const resultado = document.querySelector("#resultado");
const year = document.querySelector("#year");

const max = new Date().getFullYear();
const min = max - 10;

//EVENTOS
document.addEventListener("DOMContentLoaded", () => {
  mostrarAutos(); //Muestra los coches a cargar

  //Llena las opciones de carga
  llenarSelect();
});

//FUNCIONES
function mostrarAutos() {
  autos.forEach((auto) => {
    const { marca, modelo, year, puertas, transmision, precio, color } = auto;
    const autoHTML = document.createElement("p");

    autoHTML.textContent = `
            ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmisión ${transmision} - Precio ${precio} - Color ${color}`;
    //Insertar en HTML
    resultado.appendChild(autoHTML);
  });
}

//Genera los años del select
function llenarSelect() {
  for (let i = max; i >= min; i--) {
    const opcion = document.createElement("option");
    opcion.value = i;
    opcion.textContent = i;
    year.appendChild(opcion); //Agrega las opciones de año
  }
}
