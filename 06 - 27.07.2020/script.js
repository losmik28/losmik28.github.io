// ZADATAK 1

let lek1pSati = 10;
let lek1pMin = 00;
let lek1kSati = 15;
let lek1kMin = 00;

let ukPocetakLek1 = lek1pSati * 60 + lek1pMin;
let ukKrajLek1 = lek1kSati * 60 + lek1kMin;
// console.log(ukPocetakLek1);
// console.log(ukKrajLek1);

let lek2pSati = 16;
let lek2pMin = 00;
let lek2kSati = 18;
let lek2kMin = 00;

let ukPocetakLek2 = lek2pSati * 60 + lek2pMin; 
let ukKrajLek2 = lek2kSati * 60 + lek2kMin;
// console.log(ukPocetakLek2);
// console.log(ukKrajLek2);

let para1 = document.getElementById('para1');
let para4 = document.getElementById('para4');

if(ukPocetakLek1 > ukPocetakLek2){
    console.log(`Doktor 2 je prvi krenuo na posao u ${lek2pSati}h`);
    para4.innerHTML = `Doktor 2 je prvi krenuo na posao u ${lek2pSati}h i ${lek1pMin}m, ali je kasnije napustio smenu u odnosu na Doktora 1.`;
    para4.style.color = "red";
    para4.style.fontSize = "40px";
    // Proveravamo ko je prvi zavrsio sa smenom
    if(ukKrajLek1 > ukKrajLek2){
        console.log(`Doktor 2 je i prvi zavrsio sa poslom u ${lek2kSati}h`);
        para4.innerHTML = `Doktor 2 je prvi krenuo na posao i prvi zavrsio sa poslom u ${lek2kSati}h.`;
        para4.style.color = "red";
        para4.style.fontSize = "40px";
    }
    
    // Preklapanje
    if(ukKrajLek1 <= ukKrajLek2){
        preklapanje = ukKrajLek1 - ukPocetakLek1;
        // console.log(`Doktor 1 i Doktor 2 zajedno u smeni rade ${preklapanje} minuta.`);
    } else {
        preklapanje = ukKrajLek2 - ukPocetakLek1;
        if(preklapanje < 0){
            preklapanje -= preklapanje;
        }
        // console.log(`Doktor 1 i Doktor 2 zajedno u smeni rade ${preklapanje} minuta.`);
    }
} else {
    console.log(`Doktor 1 je prvi krenuo na posao u ${lek1pSati}h.`);
    if(ukKrajLek1 < ukKrajLek2){
        console.log(`Doktor 1 je prvi krenuo na posao u ${lek1pSati}h.`);
        para4.innerHTML = `Doktor 1 je prvi zavrsio sa poslom u ${lek1kSati}h.`;
        para4.style.color = "red";
        para4.style.fontSize = "40px";
    } else if(ukKrajLek1 > ukKrajLek2){
        para4.innerHTML = `Doktor 1 je prvi krenuo na posao u ${lek1pSati}h i ${lek1pMin}m, dok je Doktor 2 prvi zavrsio sa poslom u ${lek2kSati}h i ${lek2kMin}.`;
        para4.style.color = "red";
        para4.style.fontSize = "40px";
    } else {
        para4.innerHTML = `Zavrsili su zajedno sa poslom u ${lek2kSati}h.`;
        para4.style.color = "red";
        para4.style.fontSize = "40px";
    }
    if(ukKrajLek2 < ukKrajLek1){
        preklapanje = ukKrajLek2 - ukPocetakLek2;
        // console.log(`Doktor 1 i Doktor 2 zajedno u smeni rade ${preklapanje} minuta.`);
    } else {
        preklapanje = ukKrajLek1 - ukPocetakLek2;
        if(preklapanje < 0){
            preklapanje -= preklapanje;
        }
        // console.log(`Doktor 1 i Doktor 2 zajedno u smeni rade ${preklapanje} minuta.`);
    }
}

// SAMO PREKLAPANJE

// if(ukPocetakLek1 > ukPocetakLek2){
//     if(ukKrajLek1 <= ukKrajLek2){
//         preklapanje = ukKrajLek1 - ukPocetakLek1;
//         // console.log(`Doktor 1 i Doktor 2 zajedno u smeni rade ${preklapanje} minuta.`);
//     } else {
//         preklapanje = ukKrajLek2 - ukPocetakLek1;
//         // console.log(`Doktor 1 i Doktor 2 zajedno u smeni rade ${preklapanje} minuta.`);
//     }
// } else {
//     if(ukKrajLek2 <= ukKrajLek1){
//         preklapanje = ukKrajLek2 - ukPocetakLek2;
//         // console.log(`Doktor 1 i Doktor 2 zajedno u smeni rade ${preklapanje} minuta.`);
//     } else {
//         preklapanje = ukKrajLek1 - ukPocetakLek2;
//         // console.log(`Doktor 1 i Doktor 2 zajedno u smeni rade ${preklapanje} minuta.`);
//     }
// }

let sati = preklapanje / 60;
let hSati = Math.floor(sati);
let minuti = (sati - hSati) * 60;
let mMinuti = Math.round(minuti);

para1.innerHTML = `Doktor 1 i Doktor 2 rade zajedno u smeni ${preklapanje} minuta, odnosno ${hSati} sati/sata i ${mMinuti} minuta.`;
para1.style.color = "red";
para1.style.fontSize = "40px";
para1.style.display = "block";
console.log(`Doktor 1 i Doktor 2 rade zajedno u smeni ${preklapanje} minuta, odnosno ${hSati} sati/sata i ${mMinuti} minuta.`);



// ZADATAK 2

let para2 = document.getElementById('para2');

let rastojanjeIzmedju = 3;
let povrsinaLokala = 6;
let trenutnoOsoba = 2;

let dozvoljenoOsoba = Math.floor(povrsinaLokala / rastojanjeIzmedju);
let potrebnoNapustiti = trenutnoOsoba - dozvoljenoOsoba;
// console.log(dozvoljenoOsoba);

if(povrsinaLokala % 3 == 0){
    if(trenutnoOsoba <= dozvoljenoOsoba){
        para2.innerHTML = `Da, pridrzavaju se propisanih mera.`;
        para2.style.color = "blue";
        para2.style.fontSize = "40px";
    } else {
        console.log(`Ne, trenutno se u lokalu nalaze ${trenutnoOsoba} osobe, na trenutnih ${povrsinaLokala}m2, dozvoljeno je ${dozvoljenoOsoba} osobe, potrebno je da napuste ${potrebnoNapustiti} osobe.`);
        para2.innerHTML = `Ne, trenutno se u lokalu nalaze ${trenutnoOsoba} osobe, na trenutnih ${povrsinaLokala}m2, dozvoljeno je ${dozvoljenoOsoba} osobe, potrebno je da napuste ${potrebnoNapustiti} osobe.`;
        para2.style.color = "blue";
        para2.style.fontSize = "40px";
    }
} else if (povrsinaLokala % 3 == 1){
    if(trenutnoOsoba <= dozvoljenoOsoba){
        console.log(`Da, pridrzavaju se propisanih mera.`);
        para2.innerHTML = `Da, pridrzavaju se propisanih mera.`;
        para2.style.color = "blue";
        para2.style.fontSize = "40px";
    } else {
        console.log(`Ne, trenutno se u lokalu nalaze ${trenutnoOsoba} osobe, na trenutnih ${povrsinaLokala}m2, dozvoljeno je ${dozvoljenoOsoba} osobe, potrebno je da napuste ${potrebnoNapustiti} osobe.`);
        para2.innerHTML = `Ne, trenutno se u lokalu nalaze ${trenutnoOsoba} osobe, na trenutnih ${povrsinaLokala}m2, dozvoljeno je ${dozvoljenoOsoba} osobe, potrebno je da napuste ${potrebnoNapustiti} osobe.`;
        para2.style.color = "blue";
        para2.style.fontSize = "40px";
    }
} else {
    if(trenutnoOsoba <= dozvoljenoOsoba){
        console.log(`Da, pridrzavaju se propisanih mera.`);
        para2.innerHTML = `Da, pridrzavaju se propisanih mera.`;
        para2.style.color = "blue";
        para2.style.fontSize = "40px";
    } else {
        console.log(`Ne, trenutno se u lokalu nalaze ${trenutnoOsoba} osobe, na trenutnih ${povrsinaLokala}m2, dozvoljeno je ${dozvoljenoOsoba} osobe, potrebno je da napuste ${potrebnoNapustiti} osobe.`);
        para2.innerHTML = `Ne, trenutno se u lokalu nalaze ${trenutnoOsoba} osobe, na trenutnih ${povrsinaLokala}m2, dozvoljeno je ${dozvoljenoOsoba} osobe, potrebno je da napuste ${potrebnoNapustiti} osobe.`;
        para2.style.color = "blue";
        para2.style.fontSize = "40px";
    }
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
