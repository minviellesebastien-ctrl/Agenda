document.getElementById("app").innerHTML = `
<div class="event-card">

    <div class="countdown">
    <img src="main/hourglass.svg" class="icon-hourglass" alt="">
    <span>DANS 21 JOURS</span>
</div>

    <div class="event-info">

    <div class="event-title">INDOCHINE</div>

    <div class="event-date">
    <img src="main/calendar.svg" class="icon">
    <span>28 août 2026</span>
</div>

<div class="event-place">
    <img src="main/location.svg" class="icon">
    <span>Stade de France</span>
</div>

<div class="separator"></div>

<div class="event-time">
    <img src="main/clock.svg" class="icon">
    <span>20:00</span>
</div>
</div>

</div>

<div class="event-counter">
    <span>27</span>
    <p>ÉVÉNEMENTS</p>
</div>

<div class="buttons">

    <button class="btn blue">
        Mes<br>événements
    </button>

    <button class="btn orange">
        Ajouter un<br>événement
    </button>

</div>
`;
