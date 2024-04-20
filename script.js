// Initial state
let essences = 0;
let elements = [];
let bonuses = [];

// Load state from localStorage
if(localStorage.getItem("alchemistSave")) {
    const saveData = JSON.parse(localStorage.getItem("alchemistSave"));
    essences = saveData.essences;
    elements = saveData.elements;
    bonuses = saveData.bonuses;
}

// Update display
function updateDisplay() {
    document.getElementById("essenceDisplay").innerText = `Essences: ${essences}`;
    document.getElementById("elementsContainer").innerHTML = elements.map(element => `<div class="element">${element.name} (${element.cost} Essences)</div>`).join("");
    document.getElementById("bonusContainer").innerHTML = bonuses.map(bonus => `<div class="bonus">${bonus.name} (${bonus.cost} Essences)</div>`).join("");
}

// Click to alchemize
function clickAlchemy() {
    essences++;
    updateDisplay();
}
// Save state to localStorage every 30 seconds
setInterval(() => {
    localStorage.setItem("alchemistSave", JSON.stringify({ essences, elements, bonuses }));
}, 30000);

function clickAlchemy() {
    essences++;
    updateDisplay();
    // Ajoute la classe "shake" au bouton pour déclencher l'animation
    document.getElementById("alchemyButton").classList.add("shake");
    // Supprime la classe "shake" après un court délai pour arrêter l'animation
    setTimeout(function() {
        document.getElementById("alchemyButton").classList.remove("shake");
    }, 500); // 500 ms correspond à la durée de l'animation définie dans le CSS
}

// Save state to localStorage every 30 seconds
setInterval(() => {
    localStorage.setItem("alchemistSave", JSON.stringify({ essences, elements, bonuses }));
}, 30000);

function vibrerImage() {
    // Sélectionnez l'image
    var image = document.querySelector("button img");

    // Ajoutez la classe d'animation pour la vibration
    image.classList.add("vibration");

    // Supprimez la classe d'animation après un certain délai
    setTimeout(function() {
        image.classList.remove("vibration");
    }, 500); // ajustez la durée de la vibration selon vos besoins
}

// Compteur de clics
let compteurClics = 0;

// Fonction appelée lors du clic sur l'image
function clicSurImage() {
    // Incrémente le compteur de clics
    compteurClics++;

    // Si le compteur de clics atteint 10
    if (compteurClics % 10 === 0) {
        // Change l'image aléatoirement
        changerImageAleatoire();
    }
}

// Fonction pour changer l'image aléatoirement
function changerImageAleatoire() {
    // Sélectionne l'image du buisson
    var image = document.getElementById("buisson");

    // Liste des chemins vers les images de buissons
    var imagesBuisson = ["assets/hyperball.png", "assets/honorball.png", "assets/superball.png"];

    // Génère un index aléatoire pour sélectionner une image aléatoire
    var indexAleatoire = Math.floor(Math.random() * imagesBuisson.length);

    // Change le chemin de l'image pour l'image sélectionnée aléatoirement
    image.src = imagesBuisson[indexAleatoire];
}

// Attache l'événement clic à l'image du buisson
var boutonBuisson = document.getElementById("buisson");
boutonBuisson.addEventListener("click", clicSurImage);

// Initial display update
updateDisplay();



