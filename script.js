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

// Initial display update
updateDisplay();




