let idade = 19;
let humano = true;
let mesAniversario = "Dezembro";
let nome = "Gabi";
let sobrenome = "Rezende";

if (idade > 18) {
    console.log('Maior de 18 anos')
} else {
    console.log('Pessoa com idade menor ou igual a 18 anos')
}

if (idade > 18 && humano === true) {
    console.log('Pessoa humana e maior de 18 anos')
} else {
    console.log('Erro')
}

if (mesAniversario === "Janeiro" || "Dezembro") {
    console.log('Seu aniversário é em Janeiro ou Dezembro')
} else {
    console.log('Seu aniversário não é em Dezembro ou Janeiro')
}

if (nome.substring(0,1) === "R") {
    console.log('Seu nome começa com a letra R')
} else {
    console.log('Seu nome não começa com a letra R')
}

if (sobrenome.length > 6 || nome.substring(0,1) === "E") {
    console.log('Seu sobrenome tem mais de 6 letras ou seu nome começa com a letra E')
} else {
    console.log('Seu sobrenome não tem mais de 6 letras e seu nome não começa com a letra E')
}

