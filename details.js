document.getElementById("app").innerHTML = `

<header class="topbar">

    <a href="evenements.html" class="back">←</a>

    <h1>Détails</h1>

</header>

<div class="carte">

    <div class="titre" id="titre"></div>

    <div class="ligne" id="date"></div>

    <div class="ligne" id="heure"></div>

    <div class="ligne" id="lieu"></div>

    <div class="adresseTitre">
        Adresse
    </div>

    <div class="adresse" id="adresse"></div>

    <div class="bouton" id="btnAdresse">
        Modifier l'adresse
    </div>

</div>

`;

const id = Number(sessionStorage.getItem("eventSelectionne"));

const events =
    JSON.parse(localStorage.getItem("agenda-events")) || [];

const evenement = events.find(e => e.id === id);

if (evenement) {

    document.getElementById("titre").textContent = evenement.titre;

    document.getElementById("date").textContent =
        "📅 " + evenement.date;

    document.getElementById("heure").textContent =
        "🕒 " + evenement.heure;

    document.getElementById("lieu").textContent =
        "📍 " + evenement.lieu;

    document.getElementById("adresse").textContent =
        evenement.adresse || "Adresse non renseignée";

}
