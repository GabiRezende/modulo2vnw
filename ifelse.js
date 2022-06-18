let idade = 19;
let humano = true;
let mesAniversario = "Dezembro";

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

