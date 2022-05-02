// Set player elements
setElements(1, randomInt(0, 22), randomMatches(), randomInt(0, 200), randomInt(0, 999), randomInt(0, 200), randomInt(0, 300))
setElements(2, randomInt(0, 22), randomMatches(), randomInt(0, 200), randomInt(0, 999), randomInt(0, 200), randomInt(0, 300))
setElements(3, randomInt(0, 22), randomMatches(), randomInt(0, 200), randomInt(0, 999), randomInt(0, 200), randomInt(0, 300))
setElements(4, randomInt(0, 22), randomMatches(), randomInt(0, 200), randomInt(0, 999), randomInt(0, 200), randomInt(0, 300))
setElements(5, randomInt(0, 22), randomMatches(), randomInt(0, 200), randomInt(0, 999), randomInt(0, 200), randomInt(0, 300))

// Randomized match wins & losses
function randomMatches() {
    recentMatches = [randomInt(0, 1), randomInt(0, 1), randomInt(0, 1), randomInt(0, 1), randomInt(0, 1)]
    return recentMatches
}

// Randomized number generator
function randomInt(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// Sets the player elements
function setElements(player, rank, lfg, kda, hs, adr, avs) {
    // Set player rank
    playerid = 'player' + player + 'rank'
    playerrank = "resources/" + rank + ".png"
    document.getElementById(playerid).src = playerrank
   
    // Set player games
    winrate = 0
    for (game = 0; game < 5; game++) {
        gameid = 'player' + player + 'game' + (game + 1) 
        if (lfg[game] == 0) {
            document.getElementById(gameid).src = "resources/win.png";
            winrate += 20
        } else {
            document.getElementById(gameid).src = "resources/loss.png";
        }
    }

    // Set player winrate
    winrateid = 'player' + player + 'wr'
    document.getElementById(winrateid).innerHTML = winrate + '% Win Rate';
    
    // Set plater kda
    kdaid = 'player' + player + 'kda'
    document.getElementById(kdaid).innerHTML = (kda / 100).toFixed(2) + ' KDA';

    // Set player headshot percentage
    hsid = 'player' + player + 'hs'
    document.getElementById(hsid).innerHTML = (hs / 10) + '% HS'

    // Set player average death rate
    hadr = 'player' + player + 'adr'
    document.getElementById(hadr).innerHTML = (adr) + ' ADR'

    // Set player average score
    havs = 'player' + player + 'avs'
    document.getElementById(havs).innerHTML = (avs) + ' Avg. Score'
}