const events = JSON.parse(localStorage.getItem("agenda-events")) || [];

events.sort((a, b) => {

    const [ja, ma, aa] = a.date.split("/");
    const [jb, mb, ab] = b.date.split("/");

    return new Date(aa, ma - 1, ja) - new Date(ab, mb - 1, jb);

});

const event = events[0];
document.getElementById("app").innerHTML = `
<div class="event-card">

    <div class="countdown">
    <img src="hourglass.svg" class="icon-hourglass" alt="">
    <span>DANS 21 JOURS</span>
</div>

    <div class="event-title">INDOCHINE</div>

    <div class="event-date">
    <img src="calendar.svg" class="icon">
    <span>28 août 2026</span>
</div>

<div class="event-place">
    <img src="location.svg" class="icon">
    <span>Stade de France</span>
</div>

<div class="separator"></div>

<div class="event-time">
    <img src="clock.svg" class="icon">
    <span>20:00</span>
</div>

</div>

<img src="compteur.png"
     id="compteur"
     alt="Compteur des événements">

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
