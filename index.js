document.addEventListener("DOMContentLoaded", () =>{
    fetchType()
})

function fetchType() {
    let output = document.getElementById("type-info")
    fetch("https://pokeapi.co/api/v2/type/1")
    .then(resp => resp.json())
    .then(json => 
        console.log(json.damage_relations.double_damage_from[0].name,
            json.damage_relations.half_damage_to[0].name)
        // output.innerHTML = (json.damage_relations.double_damage_from)
        )
}

// function renderPokeData(data){
//     let output = document.getElementById("type-info")

// }