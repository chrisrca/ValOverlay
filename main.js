const {app, BrowserWindow, screen} = require('electron');
// const { API, Regions, Locales, Queue } = require("node-valorant-api");

// const APIKey = "~~~~~-~~~~~~~~-~~~~-~~~~-~~~~-~~~~~~~~~~~~";
// const valorant = new API(Regions.NA, APIKey, Regions.AMERICAS);

let mainWindow;


function createAgentSelectionOverlay () {
  let factor = screen.getPrimaryDisplay().scaleFactor;
  mainWindow = new BrowserWindow({
    width: 920 / factor, 
    height: 300 / factor,
    webPreferences: {
      zoomFactor: 1.0 / factor
    },
    frame:false, 
    transparent:true, 
    backgroundColor: '#00FFFFFF'
  });
  mainWindow.loadFile('overlays\\agentselection\\agentSelectionOverlay.html');
  mainWindow.setMenu(null)
  mainWindow.setMinimizable(false)
  mainWindow.maximize()
  mainWindow.setIgnoreMouseEvents(true)
  mainWindow.setAlwaysOnTop(true, 'screen')
  mainWindow.focus(true)
  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}



// function printData() {
//   valorant.ContentV1.getContent(Locales["en-US"]).then(content => {
//     console.log(content.characters.map(char => { return char.name }));
// });

//   valorant.AccountV1.getAccountByRiotID("~~~~", "~~~~").then(account => {
//     valorant.MatchV1.getMatchesByPuuid(account.puuid).then(matches => {
//         console.log(matches);
//     })
//   });
// }

app.on('ready', () => setTimeout(createAgentSelectionOverlay, 400));