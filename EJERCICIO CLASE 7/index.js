const listActivity = [
    "Cocinar",
    "Lavar",
    "Planchar", 
    "doblar", 
    "comer",
];

const container = document.getElementById("container");

const list = document.createElement("ul");

function crearLista(){
    for(let i= 0; i < listActivity.length; i++){
        const item = document.createElement("li");
        item.textContent = listActivity[i];
        list.appendChild(item);
    }
}

crearLista();

container.appendChild(list)

const boton = document.getElementById("boton");
boton.addEventListener("click", clickBoton);

const actividad = document.getElementById("activity");// creando la variable

function  clickBoton(){
    console.log(listActivity);
    const item = document.createElement("li");
    item.textContent = actividad.value;
    list.appendChild(item)
}

container.appendChild(list)



