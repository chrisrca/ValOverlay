// async function getUserInfo () {

//   let lockFilePath = process.env.LOCALAPPDATA + '\\Riot Games\\Riot Client\\Config\\lockfile'
//   process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
//   let lockFileData, rawuserinfo, lockDataJson, puuidJson
//   let repeatlock = true

//   while (repeatlock) {
//       try { 
//         lockFileData = readFileData(lockFilePath) 
//         let tmplfd = lockFileData.split(':')
//         if (tmplfd[1] >= 0) {
//           repeatlock = false
//         }
//       }
//       catch (error) {
//         repeatlock = true
//       }
//   }
  
//   let userInfo = lockFileData.split(':')
//   let lockfileurl = (`https://127.0.0.1:${userInfo[2]}/rso-auth/v1/authorization/userinfo`)
//   let credentials = base64.encode(`riot:${userInfo[3]}`)
//   const request = {
//     method: 'get',
//     headers: {'Authorization': `Basic ${credentials}`},  
//   }
 
//   await axios.get(lockfileurl, request).then(response => { lockDataJson = response.data }) 
  
//   rawuserinfo = JSON.parse(lockDataJson.userInfo)
//   username = [rawuserinfo.acct.game_name, rawuserinfo.acct.tag_line]
//   id = [rawuserinfo.sub + '-' + rawuserinfo.region.tag] 
  
//   username[0] = 'chris'
//   username[1] = 'lucky'

//   appWindow.hide()
  
//   let puuidurl = `https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${username[0]}/${username[1]}?api_key=${APIKey}`

//   await axios.get(puuidurl, {responseType: "json"}).then(response => { puuidJson = response.data });  
//   puuid = (puuidJson.puuid)
//   checkForMatch()
// }

// async function checkForMatch() {
//   let recentmatchesurl = `https://na.api.riotgames.com/val/match/v1/matchlists/by-puuid/${puuid}?api_key=${APIKey}`
//   let matchesJson, matches

//   await axios.get(recentmatchesurl, {responseType: "json"}).then(response => { matchesJson = response.data });  

//   matches = (matchesJson.history[0].matchId)
//   console.log(matches)
//   getMatchInfo(matches)
// }

// async function getMatchInfo(matches) {
//   let matchurl = `https://na.api.riotgames.com/val/match/v1/matches/${matches}?api_key=${APIKey}`
//   let matchJson, team, round
  
//   await axios.get(matchurl, {responseType: "json"}).then(response => { matchJson = response.data });  

  
//   for (let i = 0; i < 10; i++) {
//     if (((matchJson.players[i].puuid).localeCompare(puuid)) == 0 ) {
//       team = (matchJson.players[i].teamId)
//       round = (matchJson.players[i].stats.roundsPlayed)
//     }
//   }
//   console.log(team, round)
//   var commandtoRun = "Overlay\\locate-player\\testpy.exe"; 

// }

// function setMapSettings() {
//   let userSettingsPath = process.env.LOCALAPPDATA + `\\VALORANT\\Saved\\Config\\${id}\\Windows\\RiotUserSettings.ini`

//   let currentsettings = readFileData(userSettingsPath)

//   let userSettings = currentsettings.substring(0, currentsettings.indexOf(`EAresFloatSettingName::MinimapSize=`) + 35)
//   userSettings = userSettings + '1.079787\n' + currentsettings.substring(currentsettings.indexOf('EAresFloatSettingName::OverallVolume='), currentsettings.indexOf('EAresBoolSettingName::MinimapRotates=') + 37) + 'False\n' + currentsettings.substring(currentsettings.indexOf('EAresBoolSettingName::MinimapTranslates='), currentsettings.length) 
  
//   fs.writeFile(userSettingsPath, userSettings, 'utf8', function readFileCallback(err){
//     if (err){
//         console.log(err);
//     }
//   })
// }

/* 
red team always attacks first
if the player is on red team and it is round 1, then they are attacking, 
if it is round 13, then they are defending etc 
*/

function readFileData(Path) {        
    return fs.readFileSync(Path).toString()
  }