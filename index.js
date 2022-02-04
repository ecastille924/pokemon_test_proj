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
    let dblDmgFrmOutput = document.getElementById("dbl-dmg-frm")
    let dblDmgToOutput = document.getElementById("dbl-dmg-to")
    let pDDF = document.createElement('p')
    let pDDT = document.createElement('p')
    let typeDisplay = document.getElementById("poke-type")
    let userSelection = document.getElementById("type-select")
   

    fetch(baseurl.concat(userSelectedIndex))
    .then(resp => resp.json())
    .then(json => 
        { 
        for(let i = 0; i < json.damage_relations.double_damage_from.length; i++){
            pDDF.innerHTML += json.damage_relations.double_damage_from[i].name + "  "
            dblDmgFrmOutput.appendChild(pDDF)
            }
        for(let i = 0; i < json.damage_relations.double_damage_to.length; i++){
            pDDT.innerHTML += json.damage_relations.double_damage_to[i].name + "  "
            dblDmgToOutput.appendChild(pDDT)
            }
        // typeDisplay.innerText = userSelection
        typeDisplay.innerText = (userSelection.options[userSelectedIndex].innerHTML)
        }
        
    )
    
}




// if user selection = x 
// fetch base url / x + 1 


