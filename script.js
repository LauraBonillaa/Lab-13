const url = 'https://valorant-api.com/v1/agents';

async function obtenerPersonajes() {
  const response = await fetch(url);
  const data = await response.json();
  const personajes = data.data;

  const personajesDiv = document.getElementById('personajes');
  personajesDiv.classList.add("personajes");
  personajes.forEach(personaje => {
    const card = `
      <div class="card">
        <img src="${personaje.displayIcon}" alt="${personaje.displayName}">
        <h3>${personaje.displayName}</h3>
        <p>${personaje.description}</p>
        <button class="eliminar">Eliminar</button>
        <a href="detalle.html?id=${personaje.uuid}" class="btn">Ver información detallada</a>
      </div>
    `;
    personajesDiv.innerHTML += card;
  });

  
  const botonesEliminar = document.getElementsByClassName('eliminar');
  Array.from(botonesEliminar).forEach((boton, index) => {
    boton.addEventListener('click', () => {
      eliminarPersonaje(index);
    });
  });
}

function filtrarPersonajes() {
  const filtro = document.getElementById('busqueda').value.toUpperCase();
  const personajes = document.getElementsByClassName('card');

  for (let i = 0; i < personajes.length; i++) {
    const nombre = personajes[i].getElementsByTagName('h3')[0].innerText.toUpperCase();
    if (nombre.indexOf(filtro) > -1) {
      personajes[i].style.display = "";
    } else {
      personajes[i].style.display = "none";
    }
  }
}

function eliminarPersonaje(index) {
  const personajes = document.getElementsByClassName('card');
  personajes[index].remove();
}

document.getElementById('busqueda').addEventListener('input', filtrarPersonajes);

obtenerPersonajes();
