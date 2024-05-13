const searchParams = new URLSearchParams(window.location.search);
const idPersonaje = searchParams.get("id")

console.log(idPersonaje)
let personajeEncontrado= ""

async function traerPersonajes() {
    const url = 'https://valorant-api.com/v1/agents';

    const response = await fetch(url);
    const data = await response.json();
    const personajes = data.data;
    console.log(personajes)

    const personajesDiv = document.getElementById('detalle');
    
    personajes.forEach((personaje) => {
        if (personaje.uuid === idPersonaje) {
            console.log(personaje)
            personajeEncontrado = personaje
            console.log(personajeEncontrado)
            const carta = `
            <div class="card">
             
      
              <h3>${personaje.displayName}</h3>
              <p>${personaje.description}</p>
              <h4>Role:</h4>
              <p>${personaje.role.description}</p>
              
            </div>
          `;
          const foto =`<img src="${personaje.displayIcon}" alt="${personaje.displayName}">`;
          personajesDiv.innerHTML += foto;
          personajesDiv.innerHTML += carta;
          
        }
       
    });
}

traerPersonajes()