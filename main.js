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

app.on('ready', () => loadApp()/*, setTimeout(createAgentSelectionOverlay, 400)*/);