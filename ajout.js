document.getElementById("app").innerHTML = `

<a href="index.html" class="back">←</a>

<h1>Ajouter un événement</h1>

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
    id="titre"
    placeholder="Indochine">

<label class="label">DATE</label>
<input
    type="text"
    id="date"
    placeholder="15/08/2026"
    inputmode="numeric"
    maxlength="10">

<label class="label">HEURE</label>
<input
    type="text"
    id="heure"
    placeholder="20:15"
    inputmode="numeric"
    maxlength="5">

<label class="label">VILLE</label>
<input
    type="text"
    id="ville"
    placeholder="Paris">

<label class="label">LIEU</label>
<input
    type="text"
    id="lieu"
    placeholder="Stade de France">

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
