// ZADATAK 1
console.log(`---> Zadatak 1 <---`);

let niz = [20, 10, -20, 2, -4, 6, -20, 13, 23];

function min(niz){
    let mini = niz[0];
    let minIndeks = 0;
    for(let i = 0; i < niz.length; i++){
        if(mini > niz[i]){
            minIndeks = i;
            mini = niz[i];
        }
    }
    return minIndeks;
}

console.log(`Najmanji element niza ima indeks: ${min(niz)}.`);


// ZADATAK 2
console.log(`---> Zadatak 2 <---`);

function sumaParniIndeks(niz){
    let suma = 0;
    for(let i = 0; i < niz.length; i++){
        if(i % 2 == 0){
            suma += niz[i];
        }
    }
    return suma;
}

console.log(sumaParniIndeks(niz));


// ZADATAK 3
console.log(`---> Zadatak 3 <---`);

function menjaZnak(niz){
    for(let i = 0; i < niz.length; i++){
        if(i % 2 == 0 && niz[i] % 2 != 0){
            niz[i] = niz[i] * (-1);
        }
    }
    console.log(niz);
}

menjaZnak(niz);