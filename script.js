// ejemplo llamada a api fetch y promesas

// const url = "https://pokeapi.co/api/v2/pokemon/pikachu/"

// const fetchApi = () => {
//     fetch(url)
//         .then(response => response.json ())
//         .then (pokemon => console.log(pokemon.sprites.front_default))
//         .catch(err=> console.log(err))
// }

// const fetchApi = async() => {

//     const resp = await fetch (url)
//     const jsonResp = await resp.json()
//     console.log(jsonResp.sprites.front_default)

// }
//fetchApi()

// const fetchAxios = async() => {
//     // event.preventDefault();
//     const capturePoke = document.querySelector('input').value;
//     try {
//         const url = `https://pokeapi.co/api/v2/pokemon/${capturePoke}/`;
//         const getData = await axios.get (url);
//         console.log(getData.data);
//         showPokemon(getData.data);

//     } catch (error) {
//         console.log('fallo info api', error)
//     } 
// }
// fetchAxios()
// const showPokemon = (pokemon) => {
//     const img = document.createElement('img');
//     const h3 = document.createElement ('h3')
//     h3.textContent = pokemon.name;
//     img.src = pokemon.sprites.front_default;
//     const pokemonContainer = document.querySelector('.pokemon-container');
//     pokemonContainer.appendChild(img);
//     pokemonContainer.appendChild(h3);
// }


const inputName = async () => {
    try {
        const urlName = "https://pokeapi.co/api/v2/pokemon";
        const respName = await axios.get(urlName);
        const dataName = await respName.data.results;
        const mapName = await dataName.map(data => data.name);
        console.log(mapName.data);

        const pokeNameDom = document.querySelector('.pokemon-name');

        mapName.forEach(name => {
            const ul = document.createElement('ul');
            const li = document.createElement('li');
            li.textContent = name;
            ul.appendChild(li);
            pokeNameDom.appendChild(ul);
        });
    } catch (error) {
        console.log(error);
    }
};

inputName();
    






const fetchApi = async (event) => {
    event.preventDefault();
    const pokemonName = document.querySelector('input').value;
    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
        const response = await axios.get(url);
        
        console.log(response.data);
        showPokemon(response.data); // esto es igual a pokemon
        const ctx = document.getElementById('myChart');

    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: [
              'Experiencia',
              'Movimientos',
              'Peso',
              
            ],
            datasets: [{
                label: 'SUPERPODERES',
                data: [response.data.base_experience, response.data.moves.length,response.data.weight],
                fill: true,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgb(255, 99, 132)',
                pointBackgroundColor: 'rgb(255, 99, 132)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(255, 99, 132)'
              }]
            },
        options: {
            elements: {
                line: {
                    borderWidth: 3
                }
            }

        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    pokemonName = document.querySelector('input').value = "";
    
    
    
    } catch (error) {
        console.log('error al obtene data desde la API: ', error);
    }
}

const showPokemon = (pokemon) => {
    const img = document.createElement('img');
    const h3 = document.createElement('h3');
    img.src = pokemon.sprites.front_default;
    h3.textContent = pokemon.name;
    const pokemonContainer = document.querySelector('.pokemon-container');
    pokemonContainer.textContent = '';
    pokemonContainer.appendChild(img);
    pokemonContainer.appendChild(h3);

    
    
    
}






