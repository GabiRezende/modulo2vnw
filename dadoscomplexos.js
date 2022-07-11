 // Crie um array que receba 5 itens e exiba no console.
let people = ["Ana", "Bernardo", "Caio", "Diana", "Elisa"];
console.log(people)

// Utilize um método para adicionar um nome ao inicio do array.
people.unshift("Telma");
/* console.log(people)
*/

// Utilize um método para remover o último nome do array.
people.pop();
/*console.log(people)
*/

// Utilize um método para adicionar dois nomes ao fim do array.
people.push("Vitor", "Pedro");
/*console.log(people)
*/

// Utilize um método para remover o primeiro nome do array.
people.shift();
/*console.log(people)
*/

// Utilize um método para organizar em ordem crescente o seguinte array:
//let numbers = [7,5,6,3,8,9,2,1,4]
let numbers = [7,5,6,3,8,9,2,1,4]
numbers.sort();
console.log(numbers)