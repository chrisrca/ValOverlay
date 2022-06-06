const {app, BrowserWindow, screen, Tray} = require('electron');

let appWindow;
let overlayWindow;
const trayIconPath = 'app\\resources\\icon.png'

function createAgentSelectionOverlay () {
  let factor = screen.getPrimaryDisplay().scaleFactor;
  overlayWindow = new BrowserWindow({
    type: 'toolbar',
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
  overlayWindow.setAlwaysOnTop(true, 'screen-saver')
  overlayWindow.focus(true)
  overlayWindow.setFullScreenable(false)
  overlayWindow.on('closed', function () {
    overlayWindow = null;
  });
}

function loadApp() {
  let factor = screen.getPrimaryDisplay().scaleFactor;
  appWindow = new BrowserWindow({
    width: 835, 
    height: 500,
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

// function testload() {
//   const win = new BrowserWindow({
//     transparent: true,
//     fullscreen: true, // remove if you don't need a fullscreen window
//     maximizable: true,
//     minimizable: false,
//     focusable: false,
//     skipTaskbar: true,
//     alwaysOnTop: true,
//     frame: false,
// });

// win.setVisibleOnAllWorkspaces(true, { visibleOnFullScreen: true });
// win.setAlwaysOnTop(true, 'screen-saver', 1);
// // win.maximize(); //use this, if you don't need fullscreen but only a maximized window
// win.loadFile('overlays\\agentselection\\agentSelectionOverlay.html');
// }

app.on('ready', () => {
  setTimeout(createAgentSelectionOverlay, 5000); 
  new Tray(trayIconPath)
});