let book1 = {
    naziv: "Harry Potter",
    autor: "Rowling",
    cena: 400,
    urlSlike: "./images/harrypotter.jpg"
}

let book2 = {
    naziv: "Live free or die",
    autor: "Sean Heniti",
    cena: 500,
    urlSlike: "./images/livefreeordie.jpg"
}

let book3 = {
    naziv: "Petar Pan",
    autor: "Barrie",
    cena: 300,
    urlSlike: "./images/petarpan.jpg"
}

let book4 = {
    naziv: "Petar Pan",
    autor: "Barrie",
    cena: 500,
    urlSlike: "./images/petarpan.jpg"
}

let book5 = {
    naziv: "Petar Pan",
    autor: "Barrie",
    cena: 300,
    urlSlike: "./images/petarpan.jpg"
}

let book6 = {
    naziv: "Petar Pan",
    autor: "Barrie",
    cena: 500,
    urlSlike: "./images/petarpan.jpg"
}

let arrbooks= [book1, book2, book3, book4, book5, book6];


let prosek = 0;
let suma = 0; 
let brMax = 0;
let brMin = 0;
let max = 0;
let min = 9999999999;
for(let i = 0; i < arrbooks.length; i++){
    suma += arrbooks[i].cena;
}

for(let i = 0; i < arrbooks.length; i++){
    if(arrbooks[i].cena > max){
        max = arrbooks[i].cena;
    } 
    if(arrbooks[i].cena < min){
        min = arrbooks[i].cena;
    }
}

for(let i = 0; i < arrbooks.length; i++){
    if(arrbooks[i].cena == max){
        brMax++;
    } 
    if(arrbooks[i].cena == min){
        brMin++;
    }
}

console.log(`Ima ${brMax} knjiga/knjige sa maksimalnom cenom od ${max}.`);
console.log(`Ima ${brMin} knjiga/knjige sa minimalnom cenom od ${min}.`);

prosek = suma / arrbooks.length;

let tabela = document.createElement("table");

for(let i = 0; i <= arrbooks.length; i++){
    let tr = document.createElement("tr");
    let td = document.createElement("td");

    // Leva strana tabele
    
    if(i != arrbooks.length){
        let slika = document.createElement("img");
        slika.src = arrbooks[i].urlSlike;
        slika.className = "slika";
        td.appendChild(slika);
    } else{
        let p = document.createElement("p");
        p.innerHTML = "UKUPNO";
        if(brMax > brMin){
            p.style.color = "purple";
        } else{
            p.style.color = "blue";
        }
        td.appendChild(p);
    }

    tr.appendChild(td);
    td = document.createElement("td");

    // Desna strana tabele

    if(i != arrbooks.length){
        let p = document.createElement("p");
        p.innerHTML = `${arrbooks[i].naziv}, ${arrbooks[i].autor}, ${arrbooks[i].cena} dinara`;
        if(arrbooks[i].cena < prosek){
            p.style.color = "blue";
        } else{
            p.style.color = "gray";
        }
        td.appendChild(p);
    } else{
        let p = document.createElement("p");
        p.innerHTML = suma;
        if(brMax > brMin){
            p.style.color = "purple";
        } else{
            p.style.color = "blue";
        }
        td.appendChild(p);
    }

    tr.appendChild(td);
    tabela.appendChild(tr);
}

let body = document.body;
body.appendChild(tabela);