// --->>> ZADATAK 1 <<<---

const currentK = 273.15;
let f = 90;

let c = (f - 32) * 5 / 9;
// console.log(c);
let k = c + currentK;
// console.log(k);

// Konverzija f u kelvin
let farToKel = (f - 32) / 1.8 + currentK;
console.log(farToKel);

// Konverzija kelvin u f
let kelToFar = (k - currentK) * 1.8 + 32;
console.log(kelToFar);




// --->>> ZADATAK 2 <<<---

let poglavlja = 15;
let prviDan = 5;
let drugiDan = prviDan + 2;
let ostalo = poglavlja - drugiDan;

console.log(`Ostalo je da procita jos ${ostalo} poglavlja.`);




// --->>> ZADATAK 3 <<<---

let pera = 2000;
let mika = 3000;
let ukupanKusur = 1500;

let placeno = pera + mika - ukupanKusur;
let cenaDzempera = placeno / 2;
// console.log(cenaDzempera);

console.log(`Placeno je u prodavnici ${placeno} dinara. Dobili su kusur od ${ukupanKusur} dinara.`);

let kusurMika = mika - cenaDzempera;
let kusurPera = pera - cenaDzempera;
// console.log(kusurMika, kusurPera);
console.log(`Mika treba da dobije kusur od ${kusurMika} dinara, a Pera treba da dobije ${kusurPera} dinara.`);
