import base64 from 'base-64';
import fetch from 'node-fetch';
import fs from 'fs';

// Call with:
let name 
try {name = await getUserInfo()} 
    catch (err) // Catch errors
    {console.log('Lockfile does not yet exist or rso is not avalible')}

console.log(name)

async function getUserInfo () {
    // Set path and disable TLS certification
    let lockFilePath = process.env.LOCALAPPDATA + '\\Riot Games\\Riot Client\\Config\\lockfile'
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

    // Read lockFile
    let lockFileData = await readLockData()
    function readLockData(){        
        return fs.readFileSync(lockFilePath).toString()
    }

    // Split lockfile into array
    let userInfo = lockFileData.split(':')

    // Create url and credentials using lockfile array
    let url = (`https://127.0.0.1:${userInfo[2]}/rso-auth/v1/authorization/userinfo`)
    let credentials = base64.encode(`riot:${userInfo[3]}`)

    // Fetch user info from local api
    let rawuserinfo
    await fetch(url, {method:'GET', headers: {'Authorization': `Basic ${credentials}`       
    }})
        .then(response => response.json())
        .then(json => rawuserinfo = json);

    // Parse userinfo    
    rawuserinfo = JSON.parse(rawuserinfo.userInfo)

    // Return name and tagline
    let username = [rawuserinfo.acct.game_name, rawuserinfo.acct.tag_line] 
    return (username)
}