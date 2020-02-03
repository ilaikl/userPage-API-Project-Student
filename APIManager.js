//This is the class that will manage all your APIs

class APIManager {
    constructor() {

        this.data = { "pokemon": { "name": "", "src": "" } }


    }

    compileData() {
        let ref = this.data

        $.ajax({
            url: 'https://randomuser.me/api/?results=7&inc=picture,name,location',
            dataType: 'json',
            success: function (users) {
                ref.users = users
            }
        })


        $.ajax({
            method: "GET",
            url: 'https://api.kanye.rest',
            success: function (kdata) {
                ref.kanye = kdata.quote
            }
        })

        $.ajax({
            method: "GET",
            url: `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 800)}`,
            success: function (pdata) {
                //console.log(pdata)
                ref.pokemon.name = pdata.name
                ref.pokemon.src = pdata.sprites.front_default || pdata.sprites.front_default || ""
            }
        })

        $.getJSON('https://baconipsum.com/api/?callback=?',
            { 'type': 'meat-and-filler', 'start-with-lorem': '1', 'paras': '1' },
            function (baconGoodness) {
                ref.meatQuote = baconGoodness[0]
            })

    }

}



