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

`;

document.getElementById("btnAjouter").onclick = () => {
    window.location.href = "ajout.html";
};

document.getElementById("btnEvenements").onclick = () => {
    window.location.href = "evenements.html";
};
