let wins = 0;
let losses = 0;

const menu = document.getElementById("menu");
const game = document.getElementById("game");

document.getElementById("newGame").onclick = () => {
    menu.classList.add("hidden");
    game.classList.remove("hidden");
};

document.getElementById("playBtn").onclick = () => {

    let my = Math.floor(Math.random()*25)+90;
    let ai = Math.floor(Math.random()*25)+90;

    let texto = "";

    texto += "🏀 Comienza el partido\n\n";

    for(let i=1;i<=10;i++){

        if(Math.random()>0.5){

            texto += "Sharks anotan.\n";

        }else{

            texto += "Wolves responden.\n";

        }

    }

    texto += "\n";

    texto += "FINAL\n";

    texto += "Sharks "+my+"\n";

    texto += "Wolves "+ai+"\n";

    if(my>ai){

        wins++;

        texto += "\n🏆 Victoria";

    }else{

        losses++;

        texto += "\n❌ Derrota";

    }

    document.getElementById("record").innerHTML="Récord: "+wins+"-"+losses;

    document.getElementById("log").innerHTML=texto;

};