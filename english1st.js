//Crie 3 variáveis, cada uma com um array:
//- Comedy
//-Action
//-Fantasy 
//Dentro de cada array, insira 3 (TRÊS) Objetos, contendo:
//-title:
//-director:
//-year: 
let comedy = [{
    title: "Ferris Bueller's Day Off",
    director: "John Hughes",
    year: 1986
},
{
    title: "White Chicks",
    director: "Keenan Ivory Wayans",
    year: 2004
},
{
    title: "The Hangover",
    director: "Todd Phillips",
    year: 2009
}]

let action = [{
    title: "Edge Of Tomorrow",
    director: "Doug Liman",
    year: 2014
},
{
    title: "Mad Max: Fury Road",
    director: "George Miller",
    year: 2015
},
{
    title: "The Dark Knight",
    director: "Christopher Nolan",
    year: 2008
}]

let fantasy = [{
    title: "Avatar",
    director: "James Cameron",
    year: 2009
},
{
    title: "Pan's Labyrinth",
    director: "Guillermo del Toro",
    year: 2006
},
{
    title: "Coraline",
    director: "Henry Selick",
    year: 2009
}]

/*
console.log(fantasy[0])
console.log(fantasy[1])
console.log(fantasy[2])
*/
//Escolha uma variável e insira uma condição para ela, (condição de sua escolha), com a seguinte mensagem ao console: 
//IF: "MY FAVORIT MOVIE IS..."
//ELSE: "NOT EVEN 5 STARS..." 

//não está funcionando corretamente
let favoriteMovie = "Spider-Man: No Way Home"

if (favoriteMovie == (fantasy[0].title||fantasy[1].title||fantasy[2].title)) {
    console.log('MY FAVORIT MOVIE IS...', favoriteMovie)
} else {
    console.log('NOT EVEN 5 STARS...')
}

//|| fantasy[1, 2] || fantasy[2, 2]

/* this.state.comedy.title[2] */
//Dentro do teu if fantasy.some(function(item) { return item.title == fantasynameseila; })
