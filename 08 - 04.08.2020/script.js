console.log(`---> ZADATAK 1 <---`);

// ZADATAK 1
function suma(n, m){
    let sumaKubova = 1;
    for(let i = n; i <= m; i++){
        suma1 = i ** 3;
    }
    return sumaKubova;
}

let rezultat = suma(2, 4);
console.log(`Rezultat je: ${rezultat}.`);

console.log(`---> ZADATAK 2 <---`);


// ZADATAK 2

function godine(godRodjenja){
    let vreme = new Date();
    let trenutnaGod = vreme.getFullYear();

    if(trenutnaGod > godRodjenja){
        return trenutnaGod - godRodjenja;
    }
}

let ukupnoGod = godine(1998);
console.log(`Milos trenutno ima ${ukupnoGod} godina.`);

console.log(`---> ZADATAK 3 <---`);

// ZADATAK 3

function deljiv(n, m, k){
    let brojac = 0;
    for(let i = n; i <= m; i++){
        if(i % k == 0){
            console.log(`Broj ${i} je deljiv sa brojem ${k}.`);
            brojac++;
            // console.log(brojac)
        }
    }
    console.log(`Ukupno ima ${brojac} deljivih.`)
}

deljiv(20, 100, 3);