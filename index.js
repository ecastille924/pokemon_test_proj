document.addEventListener("DOMContentLoaded", () =>{
    dropdownSelect()
    // dropdownSelect2()
    fetchName()
    dispImg()

})

function dispImg(){
    let userSelection = parseInt(sessionStorage.selection) + 1
    let imgTag = document.getElementById("pokemon-img")
    let imgBaseUrl = "images/"

    imgTag.src = imgBaseUrl.concat(userSelection) + ".png"
    
}


function dropdownSelect(){
    let userSelection = document.getElementById("type-select")

    userSelection.addEventListener("change",function(){
        sessionStorage.setItem("selection", userSelection.value),
        location.reload()
    })
    // console.log(sessionStorage.selection)
    fetchType(sessionStorage.selection)
}

// function dropdownSelect2(){
//     let userSelection = document.getElementById("type-select2")

//     userSelection.addEventListener("change",function(){
//         sessionStorage.setItem("selection2", userSelection.value),
//         location.reload()
//     })
//     console.log(sessionStorage)
    
// }

function capFirstLetter(text){
    text.charAt(0).toUpperCase() + text.slice(1)
}

function fetchName(){
    let baseurl = "https://pokeapi.co/api/v2/type/1"
    let userSelectedIndex = parseInt(sessionStorage.selection) + 1
    
    fetch(baseurl.concat(userSelectedIndex))
    .then(resp => resp.json())
    .then(json => {
        // for(let i = 0; i < json.pokemon.pokemon.name.length; i++)
        console.log(sessionStorage)
    })
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
    let typeHeader = userSelection.options[userSelectedIndex].innerHTML

    fetch(baseurl.concat(userSelectedIndex))
    .then(resp => resp.json())
    .then(json => 
        { 
        for(let i = 0; i < json.damage_relations.double_damage_from.length; i++){
            pDDF.innerHTML += json.damage_relations.double_damage_from[i].name + "  "
            dblDmgFrmOutput.appendChild(pDDF)
            }
            if (!json.damage_relations.double_damage_from.length){
                pDDF.innerHTML = "n/a"
                dblDmgFrmOutput.appendChild(pDDF)
            }
            
        for(let i = 0; i < json.damage_relations.double_damage_to.length; i++){
            pDDT.innerHTML += json.damage_relations.double_damage_to[i].name + "  "
            dblDmgToOutput.appendChild(pDDT)
            }
            if (!json.damage_relations.double_damage_to.length){
                pDDT.innerHTML = "n/a"
                dblDmgToOutput.appendChild(pDDT)
            }
        for(let i = 0; i < json.damage_relations.half_damage_from.length; i++){
            pHDF.innerHTML += json.damage_relations.half_damage_from[i].name + "  "
            hlfDmgFrmOutput.appendChild(pHDF)
            }
            if (!json.damage_relations.half_damage_from.length){
                pHDF.innerHTML = "n/a"
                hlfDmgFrmOutput.appendChild(pHDF)
            }
        for(let i = 0; i < json.damage_relations.no_damage_from.length; i++){
            pNDF.innerHTML += json.damage_relations.no_damage_from[i].name + "  "
            noDmgFrmOutput.appendChild(pNDF)
            }
            if (!json.damage_relations.no_damage_from.length){
                pNDF.innerHTML = "n/a"
                noDmgFrmOutput.appendChild(pNDF)
            }
        for(let i = 0; i < json.damage_relations.no_damage_to.length; i++){
            pNDT.innerHTML += json.damage_relations.no_damage_to[i].name + "  "
            noDmgToOutput.appendChild(pNDT)
            }
            if (!json.damage_relations.no_damage_to.length){
                pNDT.innerHTML = "n/a"
                noDmgToOutput.appendChild(pNDT)
            }
        
        typeDisplay.innerText = typeHeader.charAt(0).toUpperCase() + typeHeader.slice(1)
        }
        
    )
    
}




// if user selection = x 
// fetch base url / x + 1 


