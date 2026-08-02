const GAME = {

    team: {

        name: "Puerto Plata Sharks",

        wins: 0,

        losses: 0,

        money: 50000000,

        fans: 82

    },

    opponent: "Miami Waves"

};

function startCareer(){

    document.getElementById("menu").style.display="none";

    document.getElementById("game").style.display="block";

    updateDashboard();

}

function updateDashboard(){

    document.getElementById("teamName").innerHTML=GAME.team.name;

    document.getElementById("record").innerHTML=
    GAME.team.wins+"-"+GAME.team.losses;

    document.getElementById("money").innerHTML=
    "$"+GAME.team.money.toLocaleString();

    document.getElementById("fans").innerHTML=
    GAME.team.fans+"%";

}

document.getElementById("newGame").onclick=startCareer;