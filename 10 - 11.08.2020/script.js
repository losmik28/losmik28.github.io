let book1 = {
    naziv: "Harry Potter",
    autor: "Rowling",
    cena: 3000,
    urlSlike: "./images/harrypotter.jpg"
}

let book2 = {
    naziv: "Live free or die",
    autor: "Sean Heniti",
    cena: 1200,
    urlSlike: "./images/livefreeordie.jpg"
}

let book3 = {
    naziv: "Petar Pan",
    autor: "Barrie",
    cena: 100,
    urlSlike: "./images/petarpan.jpg"
}

let book4 = {
    naziv: "Petar Pan",
    autor: "Barrie",
    cena: 2200,
    urlSlike: "./images/petarpan.jpg"
}

let arrbooks= [book1, book2, book3, book4]


let prosek = 0;
let suma = 0; 
let brMax = 0;
let brMin = 0;
for(let i = 0; i < arrbooks.length; i++){
    suma += arrbooks[i].cena;
}

for(let i = 0; i < arrbooks.length; i++){
    if(arrbooks[i].cena > prosek){
        brMax++
    } else{
        brMin++;
    }
}

prosek = suma / arrbooks.length;

let tabela = document.createElement("table");

for(let i = 0; i <= arrbooks.length; i++){
    let tr = document.createElement("tr");
    let td = document.createElement("td");

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