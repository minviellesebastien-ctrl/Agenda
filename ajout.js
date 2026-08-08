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

    <input type="date">

    <input type="time">

    <input type="text" placeholder="Ville">

    <input type="text" placeholder="Lieu">

</div>

<img src="btn-enregistrer.png"
     id="btnEnregistrer"
     alt="Enregistrer">

`;
