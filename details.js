document.getElementById("app").innerHTML = `

<header class="topbar">

    <a href="evenements.html" class="back">←</a>

    <h1>Détails</h1>

</header>

<div class="carte">

    <input
        class="titre champ"
        id="titre"
        type="text"
        placeholder="Titre de l'événement"
    >

    <div class="ligne">
        <img src="calendar.svg" class="icon">
        <input
            class="champ"
            id="date"
            type="text"
            placeholder="Date"
        >
    </div>

    <div class="ligne">
        <img src="clock.svg" class="icon">
        <input
            class="champ"
            id="heure"
            type="text"
            placeholder="Heure"
        >
    </div>

    <div class="ligne">
        <img src="location.svg" class="icon">
        <input
            class="champ"
            id="lieu"
            type="text"
            placeholder="Lieu"
        >
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
        Modifier
    </div>

</div>

`;

const id = Number(sessionStorage.getItem("eventSelectionne"));

const events =
    JSON.parse(localStorage.getItem("agenda-events")) || [];

const evenement = events.find(e => e.id === id);

if (evenement) {

    document.getElementById("titre").value =
        evenement.titre || "";

    document.getElementById("date").value =
        evenement.date || "";

    document.getElementById("heure").value =
        evenement.heure || "";

    document.getElementById("lieu").value =
        evenement.lieu || "";

    document.getElementById("adresse").value =
        evenement.adresse || "";
}


document
    .getElementById("btnAdresse")
    .addEventListener("click", () => {

        if (!evenement) return;

        evenement.titre =
            document.getElementById("titre").value.trim();

        evenement.date =
            document.getElementById("date").value.trim();

        evenement.heure =
            document.getElementById("heure").value.trim();

        evenement.lieu =
            document.getElementById("lieu").value.trim();

        evenement.adresse =
            document.getElementById("adresse").value.trim();

        localStorage.setItem(
            "agenda-events",
            JSON.stringify(events)
        );

        window.location.href = "evenements.html";
    });
