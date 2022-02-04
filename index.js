document.addEventListener("DOMContentLoaded", () =>{
    dropdownSelect()
})


function dropdownSelect(){
    let userSelection = document.getElementById("type-select")

    userSelection.addEventListener("change",function(){
        sessionStorage.setItem("selection", userSelection.value),
        location.reload()
    })
    // console.log(sessionStorage.selection)
    fetchType(sessionStorage.selection)
}

function fetchType() {
    
    let baseurl = "https://pokeapi.co/api/v2/type/"
    let userSelectedIndex = parseInt(sessionStorage.selection) + 1
    let output = document.getElementById("dbl-dmg-frm")
    let p = document.createElement('p')
    // let typeDisplay = document.getElementById("poke-type")
    
    fetch(baseurl.concat(userSelectedIndex))
    .then(resp => resp.json())
    .then(json => 
        { 
        for(let i = 0; i < json.damage_relations.double_damage_from.length; i++){
            p.innerHTML += json.damage_relations.double_damage_from[i].name + "  "
            output.appendChild(p)
            }
        }
        )
}




// if user selection = x 
// fetch base url / x + 1 


