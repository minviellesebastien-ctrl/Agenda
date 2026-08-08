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

events.sort((a, b) => {

    const [ja, ma, aa] = a.date.split("/");
    const [jb, mb, ab] = b.date.split("/");

    const dateA = new Date(aa, ma - 1, ja);
    const dateB = new Date(ab, mb - 1, jb);

    return dateA - dateB;

});

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

    <div class="carte" data-id="${event.id}">

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


        </div>

    </div>

    `;

});
}

document.querySelectorAll(".carte").forEach(carte => {

    let debutY = 0;

    carte.addEventListener("touchstart", (e) => {
        debutY = e.touches[0].clientY;
    });

    carte.addEventListener("touchend", (e) => {

        const finY = e.changedTouches[0].clientY;

        if (Math.abs(finY - debutY) > 10) {
            return;
        }

        document
            .getElementById("overlay")
            .classList.remove("hidden");

    });

});
        
document
    .getElementById("btnAnnuler")
    .addEventListener("click", () => {

        document
            .getElementById("overlay")
            .classList.add("hidden");

    });
