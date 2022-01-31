document.addEventListener("DOMContentLoaded", () =>{
    fetchType()
})

function fetchType() {
    fetch("https://pokeapi.co/api/v2/type")
    .then(resp => resp.json())
    .then(json => console.log(json.results[0]))
}