let num;
let contador = 10; 
let numImpar;
let numPar;

for (num = 1; num <= 10; num++) {
    console.log(num);
}

while (contador > 0) {
    console.log(contador);
    contador = contador - 1;
}

for (numImpar = 1; numImpar <= 100; numImpar++){
    if ((numImpar % 2) === 1) {
        console.log(numImpar);
    }
} 

for (numPar = 1; numPar <= 100; numPar++){
    if ((numPar % 2) === 0) {
        console.log(numPar);
    }
}
