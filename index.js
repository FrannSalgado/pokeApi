
const requesPokemon = async (pokemon) => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${pokemon}`

    try {
        const response = await fetch(URL); //devuelve promesa
        const data = await response.json();
        return data;
    } catch (error) {

        info.innerHTML = `<h2 id="nombre">Pokemon No Encontrado, Intente con Otro numero </h2>`

        console.log("Error")
    }
}


const inputNum = document.getElementById("numero");
const submitButton = document.getElementById("search");
const card = document.getElementById("card");
// const prev = document.getElementById("prev");
// const next = document.getElementById("next");
const cardReset = card.innerHTML


const renderCheck = (e) => {
    e.preventDefault();
    if (sprite.childElementCount === 1) {
        reset();
        render()

    }
    else { render() }


}
const render = async () => {
    const info = document.getElementById("info")
    const sprite = document.getElementById("sprite");
    if (inputNum.value === "" || inputNum.value === 0) {
        info.innerHTML = `<h2 id="nombre">Ingrese un numero</h2>`
        return console.log("ERROR");
    }

    const data = await requesPokemon(inputNum.value);
    const image = document.createElement("img");
    image.className = "pokemonSprite";
    if (data.sprites.front_default === null) {
        console.log(22)
        image.src = "https://www.bazardelgastronomico.com/imagenes/falta.png"
    }
    else {
        image.src = data.sprites.front_default;
    }
    info.innerHTML = `
    <h2 id="nombre">Name: ${data.name}</h2>
    <p id="tipo">Type: ${data.types[0].type.name}</p>
    <p id="peso">Weight: ${data.weight / 10}kg</p>
    <p id="altura">Height: ${data.height}m</p>`

    sprite.appendChild(image)
    console.log(data)


}


const reset = () => {
    card.innerHTML = cardReset;
}

// const nextPoke = (e) => {
//     const nex = +inputNum.value;
//     inputNum.value = (nex + 1).toString();
//     renderCheck(e);
// }
// const prevPoke = (e) => {
//     if (inputNum.value === "" || inputNum.value === 1 || inputNum.value === 0) {
//         return inputNum.value = "1"
//     }
//     const prev = +inputNum.value;
//     inputNum.value = (prev - 1).toString();
//     renderCheck(e);
// }


const init = () => {
    // next.addEventListener("click", nextPoke);
    // prev.addEventListener("click", prevPoke);
    submitButton.addEventListener("click", renderCheck);

}
init();