import base64 from 'base-64';
import fetch from 'node-fetch';
import fs from 'fs';

export async function getUserInfo () {
    let lockFilePath = process.env.LOCALAPPDATA + '\\Riot Games\\Riot Client\\Config\\lockfile'
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

    let lockFileData = await readLockData()
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