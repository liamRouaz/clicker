// Sélectionne l'élément avec l'ID "pokeball"
const pokeballBonus = document.getElementById("pokeball");

// Ajoute un écouteur d'événements sur cet élément
pokeballBonus.addEventListener("click", function() {
    // Vérifie si l'utilisateur a assez d'essences pour acheter le bonus
    if (essences >= 20) {
        // Déduit le coût du bonus des essences
        essences -= 20;
        // Augmente la valeur de chaque clic de 2
        clickAlchemy += 2;
        // Met à jour l'affichage
        updateDisplay();
    } else {
        // Affiche un message si l'utilisateur n'a pas assez d'essences
        alert("Vous n'avez pas assez d'essences pour acheter ce bonus !");
    }
});
