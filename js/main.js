const GAME = {
    team: {
        name: "Puerto Plata Sharks",
        wins: 0,
        losses: 0,
        money: 50000000,
        fans: 82
    },

    opponent: "Miami Wolves",

    season: 1
};

// -------- BOTÓN NUEVA CARRERA --------

document.getElementById("newGame").addEventListener("click", () => {

    document.getElementById("menu").classList.add("hidden");
    document.getElementById("game").classList.remove("hidden");

    updateDashboard();

});

// -------- ACTUALIZA EL DASHBOARD --------

function updateDashboard(){

    document.getElementById("teamName").textContent =
        GAME.team.name;

    document.getElementById("record").textContent =
        GAME.team.wins + "-" + GAME.team.losses;

    document.getElementById("money").textContent =
        "$" + GAME.team.money.toLocaleString();

    document.getElementById("fans").textContent =
        GAME.team.fans + "%";

}

// -------- JUGAR PARTIDO --------

document.getElementById("playBtn").addEventListener("click", ()=>{

    let myScore = 90 + Math.floor(Math.random()*31);

    let cpuScore = 90 + Math.floor(Math.random()*31);

    let text = "";

    text += "🏀 TEMPORADA " + GAME.season + "\n\n";

    text += GAME.team.name + " vs " + GAME.opponent + "\n\n";

    if(myScore > cpuScore){

        GAME.team.wins++;

        GAME.team.money += 800000;

        GAME.team.fans += 2;

        text += "🏆 ¡VICTORIA!\n\n";

    }else{

        GAME.team.losses++;

        GAME.team.money -= 250000;

        GAME.team.fans -= 1;

        text += "❌ DERROTA\n\n";

    }

    if(GAME.team.fans > 100) GAME.team.fans = 100;

    if(GAME.team.fans < 0) GAME.team.fans = 0;

    text += "Marcador Final\n\n";

    text += GAME.team.name + ": " + myScore + "\n";

    text += GAME.opponent + ": " + cpuScore + "\n\n";

    text += "💰 Dinero: $" + GAME.team.money.toLocaleString() + "\n";

    text += "👥 Fans: " + GAME.team.fans + "%";

    document.getElementById("log").textContent = text;

    updateDashboard();

});