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
    let output = document.getElementById("type-info")
    
    fetch(baseurl.concat(userSelectedIndex))
    .then(resp => resp.json())
    .then(json => 
        console.log(json.damage_relations.double_damage_from)
        // console.log(userSelectedIndex)
        // output.innerHTML = (json.results)
        )
        // console.log(baseurl.concat(userSelectedIndex))
}




// if user selection = x 
// fetch base url / x + 1 


