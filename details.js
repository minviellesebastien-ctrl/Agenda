document.getElementById("app").innerHTML = `

<header class="topbar">

    <a href="evenements.html" class="back">←</a>

    <h1>Détails</h1>

</header>

<div class="carte">

    <div class="titre" id="titre"></div>

    <div class="ligne">
    <img src="calendar.svg" class="icon">
    <span id="date"></span>
</div>

<div class="ligne">
    <img src="clock.svg" class="icon">
    <span id="heure"></span>
</div>

<div class="ligne">
    <img src="location.svg" class="icon">
    <span id="lieu"></span>
</div>
    <div class="adresseTitre">
    Adresse / Notes
</div>

    <textarea
    class="adresse"
    id="adresse"
    placeholder="Adresse non renseignée">
</textarea>

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
    evenement.date;

    document.getElementById("heure").textContent =
    evenement.heure;

    document.getElementById("lieu").textContent =
    evenement.lieu;

    document.getElementById("adresse").value =
    evenement.adresse || "";

}

document
    .getElementById("btnAdresse")
    .addEventListener("click", () => {

        evenement.adresse =
            document.getElementById("adresse").value.trim();

        localStorage.setItem(
            "agenda-events",
            JSON.stringify(events)
        );

        window.location.href = "evenements.html";

    });
