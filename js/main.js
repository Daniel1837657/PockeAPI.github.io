const pokemon_list = document.querySelector("#pokemon_list");
const btnHeader = document.querySelectorAll(".btn__header");
let URL = "https://pokeapi.co/api/v2/pokemon/";

for (let i = 1; i <= 151; i++) {
    fetch(URL + i)
        .then((response) => response.json())
        .then(data => showPokemon(data));
}

function showPokemon (poke) {
    let types_pokemon = poke.types.map(type => `
        <p class="${type.type.name} type">${type.type.name}</p>
        `);
        types_pokemon = types_pokemon.join('');

        let poke_id = poke.id.toString();
        if (poke_id.length === 1) {
            poke_id = "00" + poke_id;
        } else if (poke_id.length === 2) {
            poke_id = "0" + poke_id;
        }

    const div = document.createElement("div");
    div.classList.add("pokemon");
    div.innerHTML = `
        <p class="pokemon__id__back">#${poke_id}</p>
            <div class="pokemon-imagen">
                <img src="${poke.sprites.other["official-artwork"].front_default}" alt="${poke.name}">
            </div>

            <div class="pokemon-info">
                <div class="nombre-container">
                    <p class="pokemon-id">#${poke_id}</p>
                    <h2 class="pokemon-name">${poke.name}</h2>
                </div>

                <div class="pokemon-type">
                    ${types_pokemon}
                </div>

                <div class="pokemon-stats">
                    <p class="stat">${poke.height}cm</p>
                    <p class="stat">${poke.weight}kg</p>
                </div>
            </div>
    `;
    pokemon_list.append(div);
}

btnHeader.forEach(btn => btn.addEventListener("click", (event) => {
    const btn_id = event.currentTarget.id;

    pokemon_list.innerHTML = '';

    for (let i = 1; i <= 151; i++) {
    fetch(URL + i)
        .then((response) => response.json())
        .then(data => {
            if (btn_id === "ver__todos") {
                showPokemon(data);
                return;
            }

            const types = data.types.map(type => type.type.name);
            if (types.some(type => type.includes(btn_id))) {
                showPokemon(data);
            }
        });
    }
}));

loadMorePokemon();