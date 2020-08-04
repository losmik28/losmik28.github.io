// ZADATAK 1
a = 36;
b = 6;

let veci;
let manji;
if(a > b){
    veci = a;
    manji = b;
} else {
    veci = b;
    manji = a;
}
let celi = 0;
while((veci - manji) > 0){
    veci = veci - manji;
    celi++;
}

console.log(`Ceo deo iznosi ${celi} a ostatak je ${veci}`);


// ZADATAK 2
n = 10;
i = 1;
// Intervali
a = -1;
b = 1;
// ..........
let suma = 0;
let ukupnaSuma = 0;
while(i <= n){
    suma = Math.sin(n + i / n); // dobijena suma za sinus
    if(a <= suma && suma <= b){
        ukupnaSuma += suma;
        console.log(suma);
    }
    i++;
}
console.log(ukupnaSuma);



// ZADATAK 3


let slike = document.getElementById('slike');

n = 21;
i = 1;
while(i < n){
    if(i % 2 == 0){
        slike.innerHTML += `<img class="slika1" src="./images/sea.jpg">`;
    } else{
        slike.innerHTML += `<img class="slika2" src="./images/sunset.jpg">`;
    }
    i++;
}
