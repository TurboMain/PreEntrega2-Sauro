// Lista de tareas pendientes

const tareas = [
  {
    Prioridad: 10,
    nombre: "comprar shampoo",
  },
  {
    Prioridad: 8,
    nombre: "farmacia",
  },
  {
    Prioridad: 7,
    nombre: "tender la ropa",
  },
  {
    Prioridad: 1,
    nombre: "cortar el pasto",
  },
  {
    Prioridad: 6,
    nombre: "pagar impuestos",
  },
];

let Prioridad = 0;
let nombre = " ";

// Funciones

const mayorPrioridad = () => {
  tareas.sort((a, b) => b.Prioridad - a.Prioridad);
  mostrarTareas();
};

const menorPrioridad = () => {
  tareas.sort((a, b) => a.Prioridad - b.Prioridad);
  mostrarTareas();
};

const mostrarTareas = () => {
  console.table(tareas);
};

const cantidadDeTareas = () => {
  console.log("La cantidad de tareas es: " + tareas.length);
};

const verLista = () => {
  const ordenMayorPrioridad = confirm(
    "¿Desea ordenar la lista en orden de prioridad?"
  );

  if (ordenMayorPrioridad) {
    mayorPrioridad();
  } else {
    menorPrioridad();
  }
};

const agregarNuevaTarea = () => {
  const nombreTarea = prompt("Ingrese el nombre de la tarea");
  const prioridadDeLaTarea = parseFloat(
    prompt(
      "Ingrese un número del 1 al 10 para designar la prioridad de la tarea."
    )
  );

  if (prioridadDeLaTarea >= 1 && prioridadDeLaTarea <= 10) {
    const nuevaTarea = {
      Prioridad: prioridadDeLaTarea,
      nombre: nombreTarea,
    };

    tareas.push(nuevaTarea);
    alert(
      "Tarea " + nombreTarea + " agregada con prioridad " + prioridadDeLaTarea
    );
  } else {
    alert(
      "La prioridad ingresada no es válida. Debe ser un número entre 1 y 10."
    );
  }
  verLista();
  cantidadDeTareas();
  nuevo2();
};

const nuevo = () => {
  const agregar = confirm(
    "Bienvenido a su administrador de tareas :) \n¿Desea agregar una tarea?"
  );

  if (agregar) {
    agregarNuevaTarea();
  }
};

const nuevo2 = () => {
  const agregar = confirm("¿Desea agregar otra tarea?");

  if (agregar) {
    agregarNuevaTarea();
  } else {
    alert("Completa tus tareas!!!");
  }
};

nuevo();
