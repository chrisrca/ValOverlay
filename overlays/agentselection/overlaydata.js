setElements(1, randomInt(0, 22), randomMatches(), randomInt(0, 200), randomInt(0, 999), randomInt(0, 200), randomInt(0, 300))
setElements(2, randomInt(0, 22), randomMatches(), randomInt(0, 200), randomInt(0, 999), randomInt(0, 200), randomInt(0, 300))
setElements(3, randomInt(0, 22), randomMatches(), randomInt(0, 200), randomInt(0, 999), randomInt(0, 200), randomInt(0, 300))
setElements(4, randomInt(0, 22), randomMatches(), randomInt(0, 200), randomInt(0, 999), randomInt(0, 200), randomInt(0, 300))
setElements(5, randomInt(0, 22), randomMatches(), randomInt(0, 200), randomInt(0, 999), randomInt(0, 200), randomInt(0, 300))

function randomMatches() {
    recentMatches = [randomInt(0, 1), randomInt(0, 1), randomInt(0, 1), randomInt(0, 1), randomInt(0, 1)]
    return recentMatches
}

function randomInt(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function setElements(player, rank, lfg, kda, hs, adr, avs) {
    playerid = 'player' + player + 'rank'
    switch (rank) {
        case 0:
          document.getElementById(playerid).src = "resources/unranked.png";
          break;
        case 1:
          document.getElementById(playerid).src = "resources/iron1.png";
          break;
        case 2:
          document.getElementById(playerid).src = "resources/iron2.png";
          break;
        case 3:
          document.getElementById(playerid).src = "resources/iron3.png";
          break;
        case 4:
          document.getElementById(playerid).src = "resources/bronze1.png";
          break;
        case 5:
          document.getElementById(playerid).src = "resources/bronze2.png";
          break;
        case 6:
          document.getElementById(playerid).src = "resources/bronze3.png";
          break;
        case 7:
          document.getElementById(playerid).src = "resources/silver1.png";
          break;
        case 8:
          document.getElementById(playerid).src = "resources/silver2.png";
          break;
        case 9:
          document.getElementById(playerid).src = "resources/silver3.png";
          break;
        case 10:
          document.getElementById(playerid).src = "resources/gold1.png";
          break;
        case 11:
          document.getElementById(playerid).src = "resources/gold2.png";
          break;
        case 12:
          document.getElementById(playerid).src = "resources/gold3.png";
          break;
        case 13:
          document.getElementById(playerid).src = "resources/platinum1.png";
          break;
        case 14:
          document.getElementById(playerid).src = "resources/platinum2.png";
          break;
        case 15:
          document.getElementById(playerid).src = "resources/platinum3.png";
          break;
        case 16:
          document.getElementById(playerid).src = "resources/diamond1.png";
          break;
        case 17:
          document.getElementById(playerid).src = "resources/diamond2.png";
          break;
        case 18:
          document.getElementById(playerid).src = "resources/diamond3.png";
          break;
        case 19:
          document.getElementById(playerid).src = "resources/immortal1.png";
          break;
        case 20:
          document.getElementById(playerid).src = "resources/immortal2.png";
          break;
        case 21:
          document.getElementById(playerid).src = "resources/immortal3.png";
          break;        
        case 22:
          document.getElementById(playerid).src = "resources/radiant.png";
          break;
    } 
    
    for (game = 0; game < 5; game++) {
        gameid = 'player' + player + 'game' + (game + 1) 
        if (lfg[game] == 0) {
            document.getElementById(gameid).src = "resources/win.png";
        } else {
            document.getElementById(gameid).src = "resources/loss.png";
        }
    }

    winrate = 0
    winrateid = 'player' + player + 'wr'
    for (game = 0; game < 5; game++) {
      if(lfg[game] == 0) {
        winrate += 20
      }
    }
    document.getElementById(winrateid).innerHTML = winrate + '% Win Rate';
    
    kdaid = 'player' + player + 'kda'
    document.getElementById(kdaid).innerHTML = (kda / 100).toFixed(2) + ' KDA';

    hsid = 'player' + player + 'hs'
    document.getElementById(hsid).innerHTML = (hs / 10) + '% HS'

    hadr = 'player' + player + 'adr'
    document.getElementById(hadr).innerHTML = (adr) + ' ADR'

    havs = 'player' + player + 'avs'
    document.getElementById(havs).innerHTML = (avs) + ' Avg. Score'
}