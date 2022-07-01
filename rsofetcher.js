import fs from 'fs';
import base64 from 'base-64';
import fetch from 'node-fetch';

export async function UserRSO() {
    let lockDataJson 
    let id
    let username

    try {lockDataJson = await getUserInfo()
        username = [lockDataJson.acct.game_name, lockDataJson.acct.tag_line]
        id = [lockDataJson.sub + '-' + lockDataJson.region.tag] 
        } 
        catch (err) 
        {console.log('Lockfile / RSO not available')}

    let RiotUserSettingsPath = process.env.LOCALAPPDATA + '\\VALORANT\\Saved\\Config\\' + id + '\\Windows\\RiotUserSettings.ini'
    let KeyBindsPath = process.env.LOCALAPPDATA + '\\VALORANT\\Saved\\Config\\' + id + '\\WindowsClient\\BackupKeybinds.json'

    let RiotUserSettings = await readRiotUserSettings()
    let KeyBinds = await readKeyBinds()

    console.log(RiotUserSettings)
    console.log(KeyBinds)
    console.log(username)
}

async function readRiotUserSettings(){        
    return fs.readFileSync(RiotUserSettingsPath).toString()
}

async function readKeyBinds(){        
    return fs.readFileSync(KeyBindsPath).toString()
}

async function getUserInfo () {
    let lockFilePath = process.env.LOCALAPPDATA + '\\Riot Games\\Riot Client\\Config\\lockfile'
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

    let lockFileData = readLockData()
    function readLockData(){        
        return fs.readFileSync(lockFilePath).toString()
    }

    let userInfo = lockFileData.split(':')

    let url = (`https://127.0.0.1:${userInfo[2]}/rso-auth/v1/authorization/userinfo`)
    let credentials = base64.encode(`riot:${userInfo[3]}`)

    let rawuserinfo
    await fetch(url, {method:'GET', headers: {'Authorization': `Basic ${credentials}`       
    }})
        .then(response => response.json())
        .then(json => rawuserinfo = json);

    rawuserinfo = JSON.parse(rawuserinfo.userInfo)
    return rawuserinfo
}
