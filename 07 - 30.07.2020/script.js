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
n = 5;
i = 1;
a = -1;
b = 1;
if(a <= -1 && b <= 1){
    while(i <= n){
        console.log(Math.sin(n + i / n));
        i++;
    }
} else {
    console.log(`Uneli ste pogresne vrednosti za a i b.`);
}


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
