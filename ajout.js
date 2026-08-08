document.getElementById("app").innerHTML = `

<header class="topbar">

    <a href="index.html" class="back">←</a>

    <h1>Ajouter un événement</h1>

</header>

<div class="categories">

    <img src="categorie-concert.png" class="categorie" id="concert">

    <img src="categorie-sport.png" class="categorie" id="sport">

    <img src="categorie-spectacle.png" class="categorie" id="spectacle">

    <img src="categorie-divers.png" class="categorie" id="divers">

</div>

<div class="formulaire">

<label class="label">TITRE</label>
<input
    type="text"
    id="titre">

<label class="label">DATE</label>
<input
    type="text"
    id="date"
    inputmode="numeric"
    maxlength="10">

<label class="label">HEURE</label>
<input
    type="text"
    id="heure"
    inputmode="numeric"
    maxlength="5">

<label class="label">VILLE</label>
<input
    type="text"
    id="ville">

<label class="label">LIEU</label>
<input
    type="text"
    id="lieu">

</div>

<img src="btn-enregistrer.png"
     id="btnEnregistrer"
     alt="Enregistrer">

`;

const dateInput = document.getElementById("date");

dateInput.addEventListener("input", () => {

    let v = dateInput.value.replace(/\D/g, "");

    if (v.length > 2)
        v = v.slice(0,2) + "/" + v.slice(2);

    if (v.length > 5)
        v = v.slice(0,5) + "/" + v.slice(5);

    dateInput.value = v.slice(0,10);

});

const heureInput = document.getElementById("heure");

heureInput.addEventListener("input", () => {

    let v = heureInput.value.replace(/\D/g, "");

    if (v.length > 2)
        v = v.slice(0,2) + ":" + v.slice(2);

    heureInput.value = v.slice(0,5);

});

let categorieSelectionnee = "";

document.querySelectorAll(".categorie").forEach(cat => {

    cat.addEventListener("click", () => {

        document.querySelectorAll(".categorie")
            .forEach(c => c.classList.remove("active"));

        cat.classList.add("active");

        categorieSelectionnee = cat.id;

    });

});

document.getElementById("btnEnregistrer").addEventListener("click", () => {

    if (!categorieSelectionnee) {
        alert("Choisissez une catégorie.");
        return;
    }

    const evenement = {
        categorie: categorieSelectionnee,
        titre: document.getElementById("titre").value.trim(),
        date: document.getElementById("date").value.trim(),
        heure: document.getElementById("heure").value.trim(),
        ville: document.getElementById("ville").value.trim(),
        lieu: document.getElementById("lieu").value.trim()
    };

    if (
        !evenement.titre ||
        !evenement.date ||
        !evenement.heure ||
        !evenement.ville ||
        !evenement.lieu
    ) {
        alert("Complète tous les champs.");
        return;
    }

    let events = JSON.parse(localStorage.getItem("agenda-events")) || [];

    events.push(evenement);

    localStorage.setItem("agenda-events", JSON.stringify(events));

    window.location.href = "evenements.html";

});
