import fs from 'fs';

let userSettingsPath = 'C:\\Users\\goali\\Desktop\\temp'
let localMachinePath = 'C:\\Users\\goali\\Desktop\\temp\\RiotLocalMachine.ini'

let localMachine = await readLocalMachine()

async function readLocalMachine(){        
    return fs.readFileSync(localMachinePath).toString()
}

let folderName = localMachine.substring(localMachine.indexOf('LastKnownUser=') + 14)

var userSettings
var files = fs.readdirSync(userSettingsPath);
for (let i = 0; i < files.length; i++) {
    if (files[i].includes(folderName)) {
        userSettings = files[i]
    }
}

console.log(userSettings)

// Can also grab from rso so use this as backup ^