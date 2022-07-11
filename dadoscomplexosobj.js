// Crie um objeto que receba ao menos três propriedades sobre você.
let sobreMim = {
    nome: "Gabriela",
    idade: 30,
    nacionalidade: "Brasil"
}
/*console.log(sobreMim)
*/
// Adicione uma nova propriedade sem alterar seu objeto inicial.
sobreMim.cidade = "Rio de Janeiro"
/*console.log(sobreMim)
*/
// Remova uma propriedade desse objeto.
delete sobreMim.idade
/*console.log(sobreMim)
*/
//Mostre no console todas as propriedades desse objeto.
console.log(sobreMim)
// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.
let cadastro = [{
    nome: "Mônica",
    idade: 8,
    telefone: 011999091234,
    amigos: ["Magali", "Cascão", "Cebolinha", "Chico Bento"]
},
{
    nome: "Rachel",
    idade: 30,
    telefone: 0155552003,
    amigos: ["Monica", "Ross", "Phoebe", "Chandler", "Joey"]
},
{
    nome: "Sheldon",
    idade: 35,
    telefone: 01443596872,
    amigos: ["Leonard", "Howard", "Raj", "Penny", "Amy", "Bernardette"]
},
{
    nome: "Will",
    idade: 14,
    telefone: 2358601763329,
    amigos: ["Mike", "Dustin", "Lucas", "Eleven", "Max"]
}
]

// Mostre no console o nome de um amigo de cada lista

console.log(cadastro[0].amigos[0])
console.log(cadastro[1].amigos[4])
console.log(cadastro[2].amigos[5])
console.log(cadastro[3].amigos[1])
