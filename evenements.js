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

    events.forEach(event=>{

        liste.innerHTML+=`

        <div class="carte ${event.categorie}">

            <h2>${event.titre}</h2>

            <p>${event.date} • ${event.heure}</p>

            <p>${event.lieu}</p>

            <p>${event.ville}</p>

        </div>

        `;

    });

}
