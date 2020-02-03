
class Renderer {

    constructor() {

    }

    render(data) {
        $('.pokemon-container').empty()
        const pokeTemplate = Handlebars.compile($('#poke-template').html());
        $('.pokemon-container').append(pokeTemplate(data.pokemon));

        $('.meat-container').empty()
        const meatTemplate = Handlebars.compile($('#meat-template').html());
        $('.meat-container').append(meatTemplate({ "meatQuote": data.meatQuote }));

        $('.quote-container').empty()
        const quoteTemplate = Handlebars.compile($('#quote-template').html());
        $('.quote-container').append(quoteTemplate({ "kanye": data.kanye }));

        $('.user-container').empty()
        const userTemplate = Handlebars.compile($('#user-template').html());
        $('.user-container').append(userTemplate({ "user": data.users.results[0] }));

        $('.friends-container').empty()
        const friendsTemplate = Handlebars.compile($('#friends-template').html());
        $('.friends-container').append(friendsTemplate({ "friend": data.users.results.slice(1) }));


    }

}