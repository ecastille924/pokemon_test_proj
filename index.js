document.addEventListener("DOMContentLoaded", () =>{
    // fetchType()
    dropdownSelect()
})


function dropdownSelect(){
    let userSelection = document.getElementById("type-select")
    userSelection.addEventListener("change",function(){
        sessionStorage.setItem("selection", userSelection.value),
        location.reload()
    })
    console.log(sessionStorage.selection)
}

function fetchType() {
    let userSelection = document.getElementById("type-select").value
    let output = document.getElementById("type-info")
    fetch("https://pokeapi.co/api/v2/type/1")
    .then(resp => resp.json())
    .then(json => 
        console.log(json.damage_relations.double_damage_from[userSelection].name,
            json.damage_relations.half_damage_to[userSelection].name)
        // output.innerHTML = (json.damage_relations.double_damage_from)
        )
        console.log(userSelection)
}



// if user slection = [x] 
//     fetch url[x]