//CREO UN ARRAY DI OGGETTI

let objectTeam = [
    { Nome: `Wayne Barret`, Ruolo: `Founder & CEO`, img: `wayne-barnett-founder-ceo.jpg` },
    { Nome: `Angela Caroll`, Ruolo: `Chief Editor`, img: `angela-caroll-chief-editor.jpg` },
    { Nome: `Walter Gordon`, Ruolo: `Office Manager`, img: `walter-gordon-office-manager.jpg` },
    { Nome: `Angela Lopez`, Ruolo: `Social Media Manager`, img: `angela-lopez-social-media-manager.jpg` },
    { Nome: `Scott Estrada`, Ruolo: `Developer`, img: `scott-estrada-developer.jpg` },
    { Nome: `Barbara Ramos`, Ruolo: `Graphic Designer`, img: `barbara-ramos-graphic-designer.jpg` },
]

nomiDom = document.getElementById('lista');

// CICLO PER STAMPARE IN CONSOLE TUTTI GLI OGGETTI

for (let i = 0; i < objectTeam.length; i++) {
    let individuo = objectTeam[i];
    // console.log(individuo)
    for (let key in individuo) {
        console.log(individuo[key], key)
        // SE COME KEY CE UN IMMAGINE TRATTO L'INNERHTML IN MODO DA MOSTRARLA E METTO UN HR PER DIVIDERE LE CARD
        if (key == `img`) {
            // console.log('img presa')
            nomiDom.innerHTML += `<div><img src="./img/${individuo[key]}" alt=""><hr></div>`
        } else {
            nomiDom.innerHTML += `<div>${key}: ${individuo[key]}</div> `
        }
    }
}
