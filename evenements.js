document.getElementById("app").innerHTML = `

<header class="topbar">

    <a href="index.html" class="back">←</a>

    <h1>Mes événements</h1>

</header>

<div id="liste"></div>

`;

const liste = document.getElementById("liste");

const events =
    JSON.parse(localStorage.getItem("agenda-events")) || [];

if(events.length===0){

    liste.innerHTML=`
        <p class="vide">
            Aucun événement enregistré.
        </p>
    `;

}else{

    events.forEach((event,index)=>{

    const imageFond={
        concert:"concert_petite.png",
        sport:"sport_petite.png",
        spectacle:"spectacle_petite.png",
        divers:"divers_petite.png"
    }[event.categorie];

    liste.innerHTML+=`

    <div class="carte">

        <img src="${imageFond}" class="fondCarte">

        <div class="infos">

            <div class="titre">${event.titre}</div>

            <div class="date">
    <img src="calendar.svg" class="icon">
    <span>${event.date}</span>
</div>

<div class="lieu">
    <img src="location.svg" class="icon">
    <span>${event.lieu}</span>
</div>

<div class="heure">
    <img src="clock.svg" class="icon">
    <span>${event.heure}</span>
</div>

            <div class="ville">${event.ville}</div>

        </div>

    </div>

    `;

});
}
