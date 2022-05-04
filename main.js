const {app, BrowserWindow, screen} = require('electron');

let appWindow;
let overlayWindow;

function createAgentSelectionOverlay () {
  let factor = screen.getPrimaryDisplay().scaleFactor;
  overlayWindow = new BrowserWindow({
    width: 920 / factor, 
    height: 300 / factor,
    webPreferences: {
      zoomFactor: 1.0 / factor
    },
    frame:false, 
    transparent:true, 
    backgroundColor: '#00FFFFFF'
  });
  overlayWindow.loadFile('overlays\\agentselection\\agentSelectionOverlay.html');
  overlayWindow.setMenu(null)
  overlayWindow.setMinimizable(false)
  overlayWindow.maximize()
  overlayWindow.setIgnoreMouseEvents(true)
  overlayWindow.setAlwaysOnTop(true, 'screen')
  overlayWindow.focus(true)
  overlayWindow.on('closed', function () {
    overlayWindow = null;
  });
}

// APP TO DO             !!!Copy Valorant Gui/Menus and add open/closing animations to make app look sick!!!
/* 
  1. Add menu buttons (minimize and close)
  2. Add panel buttons (Profile (Show Name), Stats, Leaderboards, Guides, Agents, Maps, Overlays, Fun, etc)
  3. Make and add logo to bottom left corner
  4. Add scroll wheel
  5. Menu Icons
  6. etc
*/

/// ADD THIS SOMEWHERE IN APP:
// Valoverlay isn't endorsed by Riot Games and doesn't reflect the views or opinions of Riot Games or anyone officially involved in producing or managing Riot Games properties. Riot Games, and all associated properties are trademarks or registered trademarks of Riot Games, Inc.



function loadApp() {
  let factor = screen.getPrimaryDisplay().scaleFactor;
  appWindow = new BrowserWindow({
    width: 808 / factor, 
    height: 457 / factor,
    webPreferences: {
      zoomFactor: 1.0 / factor
    },
    frame:false, 
    transparent:true, 
    backgroundColor: '#00FFFFFF'
  });
  appWindow.loadFile('app\\app.html');
  appWindow.setMenu(null)
  appWindow.focus(true)
  appWindow.setResizable(false)
  appWindow.on('closed', function () {
    appWindow = null;
  });
}

app.on('ready', () => loadApp()/*, setTimeout(createAgentSelectionOverlay, 400)*/);