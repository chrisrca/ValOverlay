import {getUserInfo} from './rsofetcher.js'

let lockDataJson 
let username
try {lockDataJson = await getUserInfo()
     username = [lockDataJson.acct.game_name, lockDataJson.acct.tag_line] 
    } 
    catch (err) 
    {console.log('Lockfile does not yet exist or rso is not avalible')}

console.log(username)

