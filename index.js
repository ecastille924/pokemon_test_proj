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
    fetchType(sessionStorage.selection)
}

function fetchType(index) {
    let baseurl = "https://pokeapi.co/api/v2/type/"
    let output = document.getElementById("type-info")
    fetch(baseurl)
    .then(resp => resp.json())
    .then(json => 
        // console.log(json.results[index]),
        output.innerHTML = (json.results[index].name)
        )
}



// if user slection = [x] 
//     fetch url[x]