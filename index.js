document.getElementById("botão")
.addEventListener("click", function(){
    fetch ('https://pokeapi.co/api/v2/pokemon/pikachu')
    .then(function(response){
        return response.json()
    }).then(function(response){
        console.log(response.sprites.front_default)

        let url = response.sprites.front_default
        document.getElementById("img-card").setAttribute('src',url)

    })

})