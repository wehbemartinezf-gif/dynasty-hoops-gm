const GAME = {
    season: 1,
    team: {
        name: "Puerto Plata Sharks",
        wins: 0,
        losses: 0,
        money: 50000000,
        fans: 82
    },
    opponent: "Miami Wolves",

    roster: [
        {name:"Luis Martínez",pos:"PG",ovr:84},
        {name:"Carlos Reyes",pos:"SG",ovr:81},
        {name:"Miguel Santos",pos:"SF",ovr:86},
        {name:"José Pérez",pos:"PF",ovr:80},
        {name:"Robert King",pos:"C",ovr:89}
    ]
};

const menu = document.getElementById("menu");
const game = document.getElementById("game");

const teamName = document.getElementById("teamName");
const season = document.getElementById("season");
const record = document.getElementById("record");
const money = document.getElementById("money");
const fans = document.getElementById("fans");
const log = document.getElementById("log");

document.getElementById("newGame").addEventListener("click", startGame);
document.getElementById("playBtn").addEventListener("click", playGame);

function startGame(){

    menu.classList.add("hidden");
    game.classList.remove("hidden");

    updateDashboard();

    showHome();

}

function updateDashboard(){

    teamName.textContent = GAME.team.name;

    season.textContent = GAME.season;

    record.textContent =
        GAME.team.wins + "-" + GAME.team.losses;

    money.textContent =
        "$" + (GAME.team.money/1000000).toFixed(1) + "M";

    fans.textContent =
        GAME.team.fans + "%";

}

function playGame(){

    const my = 90 + Math.floor(Math.random()*21);

    const cpu = 90 + Math.floor(Math.random()*21);

    let text = "";

    if(my>cpu){

        GAME.team.wins++;

        GAME.team.money += 700000;

        GAME.team.fans++;

        text+="🏆 ¡Victoria!\n\n";

    }else{

        GAME.team.losses++;

        GAME.team.money -= 250000;

        GAME.team.fans--;

        text+="❌ Derrota\n\n";

    }

    text += GAME.team.name+" "+my+"\n";
    text += GAME.opponent+" "+cpu+"\n\n";

    text += "Jugador del Partido\n";

    const mvp =
        GAME.roster[Math.floor(Math.random()*GAME.roster.length)];

    text += "⭐ "+mvp.name+"\n";
    text += "OVR "+mvp.ovr;

    log.textContent = text;

    updateDashboard();

}

function showHome(){

    log.textContent =
`Bienvenido General Manager.

🏀 Objetivos

• Ganar el campeonato

• Mantener felices a los fans

• Construir una dinastía

Pulsa "JUGAR PARTIDO"
para comenzar.`;

}