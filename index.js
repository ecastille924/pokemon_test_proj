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
    let hlfDmgFrmOutput = document.getElementById("hlf-dmg-frm")
    let noDmgFrmOutput =  document.getElementById("no-dmg-frm")
    let noDmgToOutput =  document.getElementById("no-dmg-to")
    
    let pDDF = document.createElement('p')
    let pDDT = document.createElement('p')
    let pHDF = document.createElement('p')
    let pNDF = document.createElement('p')
    let pNDT = document.createElement('p')

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
        for(let i = 0; i < json.damage_relations.half_damage_from.length; i++){
            pHDF.innerHTML += json.damage_relations.half_damage_from[i].name + "  "
            hlfDmgFrmOutput.appendChild(pHDF)
            }
        for(let i = 0; i < json.damage_relations.no_damage_from.length; i++){
            pNDF.innerHTML += json.damage_relations.no_damage_from[i].name + "  "
            noDmgFrmOutput.appendChild(pNDF)
            }
        for(let i = 0; i < json.damage_relations.no_damage_to.length; i++){
            pNDT.innerHTML += json.damage_relations.no_damage_to[i].name + "  "
            noDmgToOutput.appendChild(pNDT)
            }
        typeDisplay.innerText = (userSelection.options[userSelectedIndex].innerHTML)
        }
        
    )
    
}




// if user selection = x 
// fetch base url / x + 1 


