let film1 = {
    naziv: "Pirates od the Caribbean",
    reziser: "Gore Verbinski",
    minuti: 119,
    slika:{
        urlSlike: "./images/pirates.jpg",
        alt: "ABC"
    }
    
}

let film2 = {
    naziv: "Joker",
    reziser: "Neko ime",
    minuti: 220,
    slika:{
        urlSlike: "./images/joker.jpg",
        alt: "ABC"
    }
}

let film3 = {
    naziv: "Harry Potter and the Goblet on Fire",
    reziser: "Gore Verbinski",
    minuti: 250,
    slika:{
        urlSlike: "./images/harrypotter.jpg",
        alt: "ABC"
    }
}

let film4 = {
    naziv: "Harry Potter and the Goblet on Fire",
    reziser: "Gore Verbinski",
    minuti: 250,
    slika:{
        urlSlike: "./images/harrypotter.jpg",
        alt: "ABC"
    }
}

let film5 = {
    naziv: "Joker",
    reziser: "Neko ime",
    minuti: 20,
    slika:{
        urlSlike: "./images/joker.jpg",
        alt: "ABC"
    }
}

let film6 = {
    naziv: "Joker",
    reziser: "Neko ime",
    minuti: 220,
    slika:{
        urlSlike: "./images/joker.jpg",
        // alt: "ABC"
    }
}

let film7 = {
    naziv: "Joker",
    reziser: "Neko ime",
    minuti: 110,
    slika:{
        urlSlike: "./images/joker.jpg",
       // alt: "ABC"
    }
}

let film8 = {
    naziv: "Joker",
    reziser: "Neko ime",
    minuti: 220,
    slika:{
        urlSlike: "./images/joker.jpg",
        //alt: "ABC"
    }
}

let films = [film1, film2, film3, film4, film5, film6, film7, film8];

/////////////////////////////////////

let body = document.body;
let tabela = document.createElement("table");
tabela.setAttribute("style", "border-collapse: collapse; border: 2px solid red; padding: 0px;");

for(let i = 0; i < films.length; i++){
    let tr = document.createElement("tr");
    tr.setAttribute("style", "border-collapse: collapse; border: 2px solid red; padding: 0px;");
    let td = document.createElement("td");
    td.setAttribute("style", "border-collapse: collapse; border: 2px solid red; padding: 0px;");

    // Leva strana
    if(i != films.length){
        let slika = document.createElement("img");
        slika.src = films[i].slika.urlSlike;
        slika.setAttribute("style", "width: 100px; height: 150px; margin-bottom: -4px;");
        td.appendChild(slika);
    }

    tr.appendChild(td);
    td = document.createElement("td");

    // Desna strana
    if(i != films.length){
        let p = document.createElement("p");
        let naziv = document.createElement("label");
        naziv.innerHTML = `${films[i].naziv},`;
        naziv.className = "naziv";
        p.appendChild(naziv);
        naziv = document.createElement("label");
        naziv.innerHTML = `${films[i].reziser}, ${films[i].minuti} minuta`;
        p.appendChild(naziv);
        //p.innerHTML = `${films[i].naziv}, ${films[i].reziser}, ${films[i].minuti} minuta`;
        td.appendChild(p);
    }
    tr.appendChild(td);
    tabela.appendChild(tr);
}

body.appendChild(tabela);

/////////////////////////////////////

function neparnoParnoTr(){
    let tr1 = document.getElementsByTagName("tr");
    for(let i = 0; i < tr1.length; i++){
        if(i % 2 != 0){
            tr1[i].style.backgroundColor = "gray";
        } else {
            tr1[i].style.backgroundColor = "yellow";
        }
    }
}
neparnoParnoTr();

/////////////////////////////////////

function naslovPodebljati(arr){
    let para = document.getElementsByTagName("p");
    let filmsNaziv = films[0].naziv;
    // console.log(filmsNaziv);
    for(let i = 0; i < arr.length; i++){
        if(arr[i].minuti >= 120){
            para[i].querySelector(".naziv").setAttribute("style", "font-weight: bold; margin-right: 5px;");
            // arr[i].naziv.setAttribute("style", "font-weight: bold;");
        }
    }
}
naslovPodebljati(films);


/////////////////////////////////////

let najduziNaziv = document.createElement('div');

function vracaNajvecuDuzinu(films){
    let max1 = films[0].naziv.length;
    // console.log(max1);
    let maxStr1 = films[0].naziv;
    // console.log(maxStr1);
    films.forEach(film => {
        if(film.naziv.length > max1){
            max1 = film.naziv.length;
            maxStr1 = film.naziv;
        }
    });
    return maxStr1;
}
// console.log(vracaNajvecuDuzinu(films));
najduziNaziv.textContent = `Najduzi naziv filma je: "${vracaNajvecuDuzinu(films)}"`;
najduziNaziv.setAttribute("style", "margin-top: 20px; font-weight: bold;");

body.appendChild(najduziNaziv);

///////////////////////////////////// 

let najucestalijaImena = document.createElement("div");

// let imenaRezisera = films[0].reziser;
// console.log(imenaRezisera);
let count = 0;
let maxNajucestalijih = 1;
let ime;
for(let i = 0; i < films.length; i++){
    for(let j = i; j < films.length; j++){
        if(films[i].reziser == films[j].reziser){
            count++;
            if(maxNajucestalijih < count){
                maxNajucestalijih = count;
                ime = films[i].reziser;
            }
        }
    }
    count = 0;
}

najucestalijaImena.textContent = `Najucestalije ime rezisera je: "${ime}", ponavlja se ${maxNajucestalijih} puta.`;
najucestalijaImena.setAttribute("style", "font-weight: bold;");
body.appendChild(najucestalijaImena);
// console.log(najucestalijeImeRezisera(films));


/////////////////////////////////////

let duziOdDvaSata = document.createElement("div");

function vracaBrojDuziOdDvaSata(arr){
    let broj = 0;
    arr.forEach(min => {
        if(min.minuti > 120){
            broj++;
        }
    });
    return broj++;
}
// console.log(duzeOdDvaSata(films));
duziOdDvaSata.textContent = `Broj filmova koji traju duze od dva sata: " ${vracaBrojDuziOdDvaSata(films)} ".`;
duziOdDvaSata.setAttribute("style", "font-weight: bold;");

body.appendChild(duziOdDvaSata);

/////////////////////////////////////

function brSlika(arr) {
    let counter = 0;
    arr.forEach(film => {
        if (film.slika.alt != undefined || film.slika.alt != null)
            counter++;
    })
    return counter;
}

let slikaAlt = document.createElement("div");
let p = document.createElement("p");
p.innerHTML = `Broj slika koje imaju alt je: ${brSlika(films)}`;
p.setAttribute("style", "font-weight: bold;");
slikaAlt.appendChild(p);
body.appendChild(slikaAlt);