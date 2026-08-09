let events = JSON.parse(localStorage.getItem("agenda-events")) || [];

const maintenant = new Date();

events = events.filter(event => {

    const [j, m, a] = event.date.split("/");
    const [h, min] = event.heure.split(":");

    const dateEvent = new Date(
        Number(a),
        Number(m) - 1,
        Number(j),
        Number(h),
        Number(min)
    );

    return dateEvent >= maintenant;

});

localStorage.setItem(
    "agenda-events",
    JSON.stringify(events)
);

events.sort((a, b) => {

    const [ja, ma, aa] = a.date.split("/");
    const [jb, mb, ab] = b.date.split("/");

    return new Date(aa, ma - 1, ja) - new Date(ab, mb - 1, jb);

});

const event = events[0];

const imageCarte = event
    ? {
        concert: "concert.png",
        sport: "sport.png",
        spectacle: "spectacle.png",
        divers: "divers.png"
    }[event.categorie]
    : "concert.png";

let countdown = "AUCUN ÉVÉNEMENT";

if (event) {

    const [j, m, a] = event.date.split("/");

    const aujourdhui = new Date();
    aujourdhui.setHours(0, 0, 0, 0);

    const dateEvent = new Date(a, m - 1, j);

    const diff = Math.ceil(
        (dateEvent - aujourdhui) / (1000 * 60 * 60 * 24)
    );

    if (diff <= 0) {

        countdown = "AUJOURD'HUI";

    } else if (diff === 1) {

        countdown = "DEMAIN";

    } else {

        countdown = `DANS ${diff} JOURS`;

    }

}

const nbEvents = events.length;

const texteCompteur = `${nbEvents} ÉVÈNEMENTS À VENIR`;


document.getElementById("app").innerHTML = `

<div class="event-card" style="background-image:url('${imageCarte}')">

    <div class="countdown">
        <img src="hourglass.svg" class="icon-hourglass">
        <span>${countdown}</span>
    </div>

    <div class="event-title">
        ${event ? event.titre : "Aucun événement"}
    </div>

    <div class="event-date">
        <img src="calendar.svg" class="icon">
        <span>${event ? event.date : "--/--/----"}</span>
    </div>

    <div class="event-place">
        <img src="location.svg" class="icon">
        <span>${event ? event.lieu : "-"}</span>
    </div>

    <div class="separator"></div>

    <div class="event-time">
        <img src="clock.svg" class="icon">
        <span>${event ? event.heure : "--:--"}</span>
    </div>

</div>

<div id="compteurBox">

    <img src="compteur.png"
         id="compteur"
         alt="Compteur">

    <div id="compteurTexte">

        <div id="labelEvents">${texteCompteur}</div>

    </div>

</div>

<div class="buttons">

    <img src="btn-evenements.png"
         id="btnEvenements"
         class="btn-img"
         alt="Mes événements">

    <img src="btn-ajouter.png"
         id="btnAjouter"
         class="btn-img"
         alt="Ajouter un événement">

</div>

<div class="backupBtns">

    <button id="btnExporter" class="backupBtn">
        Exporter
    </button>

    <button id="btnImporter" class="backupBtn">
        Importer
    </button>

</div>

<input
    type="file"
    id="importFile"
    accept=".json"
    hidden>

`;

document.getElementById("btnAjouter").onclick = () => {
    window.location.href = "ajout.html";
};

document.getElementById("btnEvenements").onclick = () => {
    window.location.href = "evenements.html";
};

document.getElementById("btnExporter").onclick = () => {

    const data = localStorage.getItem("agenda-events") || "[]";

    const maintenant = new Date();

    const nomFichier =
        `agenda-${maintenant.getFullYear()}-` +
        `${String(maintenant.getMonth()+1).padStart(2,"0")}-` +
        `${String(maintenant.getDate()).padStart(2,"0")}_` +
        `${String(maintenant.getHours()).padStart(2,"0")}h` +
`${String(maintenant.getMinutes()).padStart(2,"0")}.json`;

    const blob = new Blob([data], {
        type: "application/json"
    });

    const lien = document.createElement("a");
    lien.href = URL.createObjectURL(blob);
    lien.download = nomFichier;
    lien.click();

    URL.revokeObjectURL(lien.href);

    sessionStorage.setItem(
        "toastMessage",
        "✓ Événements exportés"
    );

    location.reload();

};

const toastMsg = sessionStorage.getItem("toastMessage");

if (toastMsg) {

    sessionStorage.removeItem("toastMessage");

    const toast = document.createElement("div");
    toast.className = "toast";

    if (toastMsg.startsWith("✓")) {
        toast.innerHTML =
            "<span style='color:#32d74b;font-weight:bold'>✓</span>" +
            toastMsg.substring(1);
    } else {
        toast.textContent = toastMsg;
    }

    document.body.appendChild(toast);

    requestAnimationFrame(() => toast.classList.add("show"));

    if (navigator.vibrate)
        navigator.vibrate(
            toastMsg.startsWith("✓") ? 20 : [40,40,40]
        );

    setTimeout(() => {

        toast.classList.remove("show");

        setTimeout(() => toast.remove(), 300);

    }, 2200);

}
