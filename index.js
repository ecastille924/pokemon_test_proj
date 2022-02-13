document.addEventListener("DOMContentLoaded", () =>{
    dropdownSelect()
    // dropdownSelect2()
    // fetchName()
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

// function fetchName(){
//     let baseurl = "https://pokeapi.co/api/v2/type/1"
//     let userSelectedIndex = parseInt(sessionStorage.selection) + 1
    
//     fetch(baseurl.concat(userSelectedIndex))
//     .then(resp => resp.json())
//     .then(json => {
//         // for(let i = 0; i < json.pokemon.pokemon.name.length; i++)
//         console.log(sessionStorage)
//     })
// }

function fetchType() {
    let baseurl = "https://pokeapi.co/api/v2/type/"
    let userSelectedIndex = parseInt(sessionStorage.selection) + 1
    let dblDmgFrmOutput = document.getElementById("dbl-dmg-frm")
    let dblDmgToOutput = document.getElementById("dbl-dmg-to")
    let hlfDmgFrmOutput = document.getElementById("hlf-dmg-frm")
    let noDmgFrmOutput =  document.getElementById("no-dmg-frm")
    let noDmgToOutput =  document.getElementById("no-dmg-to")

    let typeDisplay = document.getElementById("poke-type")
    let userSelection = document.getElementById("type-select")
    let typeHeader = userSelection.options[userSelectedIndex].innerHTML

    fetch(baseurl.concat(userSelectedIndex))
    .then(resp => resp.json())
    .then(json => 
        { 
        for(let i = 0; i < json.damage_relations.double_damage_from.length; i++){
            let ddf = document.createElement('p')
            ddf.innerHTML += json.damage_relations.double_damage_from[i].name
            dblDmgFrmOutput.appendChild(ddf)
            }
            if (!json.damage_relations.double_damage_from.length){
                let ddf = document.createElement('p')
                ddf.innerHTML = "n/a"
                dblDmgFrmOutput.appendChild(ddf)
            }
            
        for(let i = 0; i < json.damage_relations.double_damage_to.length; i++){
            let ddt = document.createElement('p')
            ddt.innerHTML += json.damage_relations.double_damage_to[i].name
            dblDmgToOutput.appendChild(ddt)
            }
            if (!json.damage_relations.double_damage_to.length){
                let ddt = document.createElement('p')
                ddt.innerHTML = "n/a"
                dblDmgToOutput.appendChild(ddt)
            }
        for(let i = 0; i < json.damage_relations.half_damage_from.length; i++){
            let hdf = document.createElement('p')
            hdf.innerHTML += json.damage_relations.half_damage_from[i].name
            hlfDmgFrmOutput.appendChild(hdf)
            }
            if (!json.damage_relations.half_damage_from.length){
                let hdf = document.createElement('p')
                hdf.innerHTML = "n/a"
                hlfDmgFrmOutput.appendChild(hdf)
            }
        for(let i = 0; i < json.damage_relations.no_damage_from.length; i++){
            let ndf = document.createElement('p')
            ndf.innerHTML += json.damage_relations.no_damage_from[i].name
            noDmgFrmOutput.appendChild(ndf)
            }
            if (!json.damage_relations.no_damage_from.length){
                let ndf = document.createElement('p')
                ndf.innerHTML = "n/a"
                noDmgFrmOutput.appendChild(ndf)
            }
        for(let i = 0; i < json.damage_relations.no_damage_to.length; i++){
            let ndt = document.createElement('p')
            ndt.innerHTML += json.damage_relations.no_damage_to[i].name
            noDmgToOutput.appendChild(ndt)
            }
            if (!json.damage_relations.no_damage_to.length){
                let ndt = document.createElement('p')
                ndt.innerHTML = "n/a"
                noDmgToOutput.appendChild(ndt)
            }
        
        typeDisplay.innerText = typeHeader.charAt(0).toUpperCase() + typeHeader.slice(1)
        }
        
    )
    
}




// if user selection = x 
// fetch base url / x + 1 


