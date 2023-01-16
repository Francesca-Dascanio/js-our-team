/* 

creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

MILESTONE 0:
Creare l'array di oggetti con le informazioni fornite.

MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe

BONUS 1:
Trasformare la stringa foto in una immagine effettiva

*/

// Milestone 0
// Per ogni persona del team creo un oggetto contenente 3 proprietà
const workerOne = {
    nome: 'Wayne Barnett',
    ruolo: 'Founder & Ceo',
    img: 'wayne-barnett-founder-ceo.jpg'
}

const workerTwo = {
    nome: 'Angela Carroll',
    ruolo: 'Chief Editor',
    img: 'angela-caroll-chief-editor.jpg'
}

const workerThree = {
    nome: 'Walter Gordon',
    ruolo: 'Office Manager',
    img: 'walter-gordon-office-manager.jpg'
}

const workerFour = {
    nome: 'Angela Lopez',
    ruolo: 'Social Media Manager',
    img: 'angela-lopez-social-media-manager.jpg'
}

const workerFive = {
    nome: 'Scott Estrada',
    ruolo: 'Developer',
    img: 'scott-estrada-developer.jpg'
}

const workerSix = {
    nome: 'Barbara Ramos',
    ruolo: 'Graphic Designer',
    img: 'barbara-ramos-graphic-designer.jpg'
}

// Creo un array degli oggetti
const team = [
    workerOne,
    workerTwo,
    workerThree,
    workerFour,
    workerFive,
    workerSix
];


    
// Milestone 1
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

// ciclo esterno --> per array
for (let i = 0; i < 6; i++) {     
    
    console.log('----------------------------------------------------------------------------------');

    // ciclo interno --> per ogni oggetto dell'array
    for (let key in team[i]) {

        
        console.log(team[i][key], typeof team[i][key]);
    }

}


// Milestone 2
// Stampare le stesse informazioni su DOM sottoforma di stringhe
for (let i = 0; i < 6; i++) {    

    // prendi proprietà 3 di ogni oggetto
    console.log(team[i]['img']);
    // Bonus 1: trasforma stringa in immagine
    team[i]['img'] = `<img src='img/${team[i]['img']}'>`;

    const teamContainer = document.getElementById('team-container');

    teamContainer.innerHTML += '------------------------------------------------------------------------------------------------------------';
    
    // ciclo interno --> per ogni oggetto dell'array
    for (let key in team[i]) {

        const singleWorker = document.createElement('div');
        singleWorker.innerHTML += (team[i][key]);
  
        teamContainer.append(singleWorker);
 
    }



}


// Bonus 1
        // Trasformare la stringa foto in una immagine effettiva
        // Fatto



