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

function imgVibration() {
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
function clickOnImage() {
    // Incrémente le compteur de clics
    compteurClics++;

    // Si le compteur de clics atteint 10
    if (compteurClics % 10 === 0) {
        // Change l'image aléatoirement
        changeImageRandom();
    }
}

// Fonction pour changer l'image aléatoirement
function changeImageRandom() {
    // Sélectionne l'image du buisson
    var image = document.getElementById("buisson");

    // Liste des chemins vers les images de buissons
    var imagesClick = ["assets/roucoul.png", "assets/Osselait.png", "assets/Rondoudou.png", "assets/Carapuce.png", "assets/Carabaffe.png", "assets/salamèche.png", "assets/Reptincel.png", "assets/Dracaufeu.png"];

    // Génère un index aléatoire pour sélectionner une image aléatoire
    var indexAleatoire = Math.floor(Math.random() * imagesClick.length);

    // Change le chemin de l'image pour l'image sélectionnée aléatoirement
    image.src = imagesClick[indexAleatoire];
}

// Attache l'événement clic à l'image du buisson
var boutonClick = document.getElementById("buisson");
boutonClick.addEventListener("click", clickOnImage);

// Initial display update
updateDisplay();



