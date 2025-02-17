let numeroSorteado = parseInt(Math.random()*100)
let numeroSorteado2 = parseInt(Math.random()*100)
console.log(`numeroSorteado = ${numeroSorteado}`);

if (numeroSorteado %2 === 0) {
    console.log('O número é par');
    }else {
        console.log('O número é impar');
        }
    
        // exibir o proximo e o numero anterior
        let proxNum = numeroSorteado + 1;
        let antNum = numeroSorteado - 1;
        console.log(`Proximo Número = ${proxNum}`);
        console.log(`Número Anterior = ${antNum}`);
        
numeroSorteado++;
console.log(`Novo Número = ${numeroSorteado}`);

numeroSorteado--;
console.log(`Novo Número = ${numeroSorteado}`);

numeroSorteado+=10;
console.log(`Novo Número = ${numeroSorteado}`);
numeroSorteado-=10;
console.log(`Novo Número = ${numeroSorteado}`);
numeroSorteado/=10;
console.log(`Novo Número = ${numeroSorteado}`);
numeroSorteado*=10;
console.log(`Novo Número = ${numeroSorteado}`);


// Sortear dois numeros e exibir o maior deles

console.log(numeroSorteado, numeroSorteado2);

if (numeroSorteado > numeroSorteado2) {
    console.log(`O maior número = ${numeroSorteado}`);
    
} else if(numeroSorteado2 > numeroSorteado) {
    console.log(`O maior número = ${numeroSorteado2}`);
} else {
    console.log(`Os Número são Iguais`);
}







let numSort = parseInt(Math.random()*10001);
let rendimento = 0;
let total = 0;
console.log(`Número Sorteado = ${numSort}`);
if (numSort <= 2000) {
   rendimento = numSort * 0.05;
   total = numSort + rendimento}
   else if (numSort <=4000) {
    rendimento = numSort * 0.1;
    total = numSort + rendimento}
    else if (numSort <=6000) {
        rendimento = numSort * 0.15;
        total = numSort + rendimento}
    else if (numSort <=8000) {
            rendimento = numSort * 0.2;
            total = numSort + rendimento}
    else {
                rendimento = numSort * 0.25;
                total = numSort + rendimento}
console.log(`Valor sorteado = ${numSort.toFixed(2)}`);
console.log(`Valor do rendimento = ${rendimento.toFixed(2)}`);
console.log(`Valor Total = ${total.toFixed(2)}`);