function mensagem() {
    console.log('Exibir mensagem')
}
mensagem();

function nome(exibeNome) {
    console.log(`O meu nome é ${exibeNome}`)
}
nome('Gabriela');

function infoCompleta(nomeComp, idade, estiloMusica) {
    console.log(`Meu nome é ${nomeComp}, tenho ${idade} anos e meu estilo musical preferido é ${estiloMusica}.`)
}
infoCompleta('Gabi', 30, 'Pop');

function preferencias(filmePref, musicaPref) {
    console.log(`Meu filme preferido é "${filmePref}" e minha música preferida é "${musicaPref}".`)
}
preferencias('Brilho Eterno de Uma Mente Sem Lembranças', 'Vagalumes Cegos');

function triplicar(numBase) {
    console.log(numBase*3);
}
triplicar(9);