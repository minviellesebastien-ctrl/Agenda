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

    <input type="text" placeholder="Titre">

    <label>Date</label>
<input
    type="text"
    id="date"
    placeholder="15/08/2026"
    inputmode="numeric"
    maxlength="10">

<label>Heure</label>
<input
    type="text"
    id="heure"
    placeholder="20:15"
    inputmode="numeric"
    maxlength="5">

    <input type="text" placeholder="Ville">

    <input type="text" placeholder="Lieu">

</div>

<img src="btn-enregistrer.png"
     id="btnEnregistrer"
     alt="Enregistrer">

`;
