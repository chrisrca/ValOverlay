import fs from 'fs';

/*
NOTE TO SELF 
YOU CAN GET 'cf8c8f23-212e-5ac2-ab15-856455217453' from the rso endpoint then add region (which is also from the endpoint)

but use stuff below as contingency for offline mode
*/


// let localMachinePath = process.env.LOCALAPPDATA + '\\VALORANT\\Saved\\Config\\Windows\\RiotLocalMachine.ini'
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

let localMachinePath = 'C:\\Users\\goali\\Desktop\\temp\\RiotLocalMachine.ini'

let localMachine = await readLocalMachine()

async function readLocalMachine(){        
    return fs.readFileSync(localMachinePath).toString()
}

let folderName = localMachine.substring(localMachine.indexOf('LastKnownUser=') + 14)


// Parse: 
/* 
[UserInfo]
LastKnownUser=cf8c8f23-212e-5ac2-ab15-856455217453
*/
// add "-region" to the end 
// ex: "-na"
// get from rso endpoint

/* {"userInfo":"{\"country\":\"usa\",\"sub\":\"cf8c8f23-212e-5ac2-ab15-856455217453\",\"lol_account\":{\"summoner_id\":2749730118911648,\"profile_icon\":3545,\"summoner_level\":3,\"summoner_name\":\"AyyItsLucky\"},\"email_verified\":true,\"player_plocale\":null,\"country_at\":1587942672000,\"pw\":{\"cng_at\":1587942673000,\"reset\":false,\"must_reset\":false},\"lol\":{\"cuid\":2749730118911648,\"cpid\":\"NA1\",\"uid\":2749730118911648,\"pid\":\"NA1\",\"apid\":null,\"ploc\":\"en\",\"lp\":false,\"active\":true},\"original_platform_id\":\"NA1\",\"original_account_id\":2749730118911648,\"phone_number_verified\":false,\"photo\":\"https:\\/\\/avatar.leagueoflegends.com\\/na\\/AyyItsLucky.png\",\"preferred_username\":\"ImTheLuckiest\",\"ban\":{\"code\":null,\"desc\":\"\",\"exp\":null,\"restrictions\":[]},\"ppid\":null,\"lol_region\":[{\"cuid\":2749730118911648,\"cpid\":\"NA1\",\"uid\":2749730118911648,\"pid\":\"NA1\",\"lp\":false,\"active\":true}],\"player_locale\":\"en\",\"pvpnet_account_id\":2749730118911648,\"region\":{\"locales\":[\"en_US\"],\"id\":\"NA1\",\"tag\":\"na\"},\"acct\":{\"type\":0,\"state\":\"ENABLED\",\"adm\":false,\"game_name\":\"Chris\",\"tag_line\":\"Lucky\",\"created_at\":1587942672000},\"jti\":\"p1UsXYeYOwI\",\"username\":\"ImTheLuckiest\"}"} */
