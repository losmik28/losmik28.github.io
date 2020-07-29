// ZADATAK 1

let lek1pSati = 12;
let lek1pMin = 00;
let lek1kSati = 19;
let lek1kMin = 30;

let ukPocetakLek1 = lek1pSati * 60 + lek1pMin;
let ukKrajLek1 = lek1kSati * 60 + lek1kMin; 
// console.log(ukPocetakLek1);
// console.log(ukKrajLek1);


let lek2pSati = 11;
let lek2pMin = 20;
let lek2kSati = 20;
let lek2kMin = 00;

let ukPocetakLek2 = lek2pSati * 60 + lek2pMin; 
let ukKrajLek2 = lek2kSati * 60 + lek2kMin; 
// console.log(ukPocetakLek2);
// console.log(ukKrajLek2);

// Preklapanje vremena
if(ukPocetakLek1 > ukPocetakLek2){
    if(ukKrajLek1 <= ukKrajLek2){
        preklapanje = ukKrajLek1 - ukPocetakLek1;
        // console.log(`Doktor 1 i Doktor 2 zajedno u smeni rade ${preklapanje} minuta.`);
    } else {
        preklapanje = ukKrajLek2 - ukPocetakLek1;
        // console.log(`Doktor 1 i Doktor 2 zajedno u smeni rade ${preklapanje} minuta.`);
    }
} else {
    if(ukKrajLek2 <= ukKrajLek1){
        preklapanje = ukKrajLek2 - ukPocetakLek2;
        // console.log(`Doktor 1 i Doktor 2 zajedno u smeni rade ${preklapanje} minuta.`);
    } else {
        preklapanje = ukKrajLek1 - ukPocetakLek2;
        // console.log(`Doktor 1 i Doktor 2 zajedno u smeni rade ${preklapanje} minuta.`);
    }
}

let para1 = document.getElementById('para1');

let sati = preklapanje / 60;
let hSati = Math.floor(sati);
let minuti = (sati - hSati) * 60;
let mMinuti = Math.round(minuti);

para1.innerHTML = `Doktor 1 i Doktor 2 rade zajedno u smeni ${preklapanje} minuta, odnosno ${hSati} sati/sata i ${mMinuti} minuta.`;
para1.style.color = "red";
para1.style.fontSize = "40px";
console.log(`Doktor 1 i Doktor 2 rade zajedno u smeni ${preklapanje} minuta, odnosno ${hSati} sati/sata i ${mMinuti} minuta.`);



// ZADATAK 2

let para2 = document.getElementById('para2');

let rastojanjeIzmedju = 3;
let povrsinaLokala = 120;
let trenutnoOsoba = 36;

let dozvoljenoOsoba = povrsinaLokala / rastojanjeIzmedju; // Na osnovu povrsine lokala i rastojanja izmedju osobe
let potrebnoNapustiti = trenutnoOsoba - dozvoljenoOsoba;
// console.log(dozvoljenoOsoba);

if(trenutnoOsoba <= 40){
    console.log(`Da, pridrzavaju se propisanih mera.`);
    para2.innerHTML = `Da, pridrzavaju se propisanih mera. Trenutno se nalaze ${trenutnoOsoba} osobe.`;
    para2.style.color = "blue";
    para2.style.fontSize = "40px";
} else {
    console.log(`Ne, trenutno se u lokalu nalaze ${trenutnoOsoba} osobe, dozvoljeno je maksimalno ${dozvoljenoOsoba}, potrebno je da 
    napuste ${potrebnoNapustiti} osobe.`);
    para2.innerHTML = `Ne, trenutno se u lokalu nalaze ${trenutnoOsoba} osobe, dozvoljeno je maksimalno ${dozvoljenoOsoba}, potrebno je da 
    napuste ${potrebnoNapustiti} osobe.`;
    para2.style.color = "blue";
    para2.style.fontSize = "40px";
}



// ZADATAK 3

let para3 = document.getElementById('para3');

let datum = new Date();
let vreme = new Date(datum.getTime());
vreme.setMonth(datum.getMonth() + 1);
vreme.setDate(0);
let dan = vreme.getDate() > datum.getDate() ? vreme.getDate() - datum.getDate() : 0;

para3.innerHTML = `Ostalo je jos ${dan} dana do kraja meseca.`;
para3.style.color = "green";
para3.style.fontSize = "40px";

console.log(`Ostalo je jos ${dan} dana do kraja meseca!`);
