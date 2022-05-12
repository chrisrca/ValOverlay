let lockFilePath = '%LOCALAPPDATA%\\Riot Games\\Riot Client\\Config\\lockfile'

fetch(`https://127.0.0.1:${lockFilePort}/entitlements/v1/token`, { 
    credentials: `riot:{${lockFilePassword}}`
}) 
    .then(response => response.json())
    .then(data => { 
        console.log('Success:', data);
});

function ObtainLockfileData(LockfilePath)
{
    let LockfileRaw = '';
    try
    {
        console.log("Trying to open Lockfile");
    }
    catch (FileNotFoundException)
    {
        console.log("Lockfile not found");
        return new LockfileData();
    }
}
/*
    = LockfileRaw.Split(":");
    return new LockfileData()
    {
        Client = (string)LockfileData[0],
        PID = Int32.Parse((string)LockfileData[1]),
        Port = Int32.Parse((string)LockfileData[2]),
        Key = (string)LockfileData[3],
        Protocol = (string)LockfileData[4],
        Basic = Convert.ToBase64String(Encoding.UTF8.GetBytes($"riot:{(string)LockfileData[3]}")),
        Success = true
    };
}

private async Task<AuthTokens> ObtainAuthTokens()
{
    Utilities.Utils.Log("Creating Auth Request");
    RestRequest request = new RestRequest($"https://127.0.0.1:{LocalCredentials.Port}/entitlements/v1/token", Method.Get);
    request.AddHeader("Authorization", $"Basic {LocalCredentials.Basic}");

    RestResponse response = await client.ExecuteAsync(request);
    if (!response.IsSuccessful) return new AuthTokens();

    AuthTokens tokens = JsonConvert.DeserializeObject<AuthTokens>(response.Content.ToString());
    tokens.Success = true;
    return tokens;
} */



// Send get request to local api

// file contains something like this Riot Client:8136:56833:gUbZrOn-BJf1-jskHxv8lg:https
//                                   name        pid  port  password               protocol

// request from https://127.0.0.1:{PORT}/rso-auth/v1/authorization/userinfo
// username is "riot"
// password is {PASSWORD}

// returns something like this:
/* {"userInfo":"{\"country\":\"usa\",\"sub\":\"cf8c8f23-212e-5ac2-ab15-856455217453\",\"lol_account\":{\"summoner_id\":2749730118911648,\"profile_icon\":3545,\"summoner_level\":3,\"summoner_name\":\"AyyItsLucky\"},\"email_verified\":true,\"player_plocale\":null,\"country_at\":1587942672000,\"pw\":{\"cng_at\":1587942673000,\"reset\":false,\"must_reset\":false},\"lol\":{\"cuid\":2749730118911648,\"cpid\":\"NA1\",\"uid\":2749730118911648,\"pid\":\"NA1\",\"apid\":null,\"ploc\":\"en\",\"lp\":false,\"active\":true},\"original_platform_id\":\"NA1\",\"original_account_id\":2749730118911648,\"phone_number_verified\":false,\"photo\":\"https:\\/\\/avatar.leagueoflegends.com\\/na\\/AyyItsLucky.png\",\"preferred_username\":\"ImTheLuckiest\",\"ban\":{\"code\":null,\"desc\":\"\",\"exp\":null,\"restrictions\":[]},\"ppid\":null,\"lol_region\":[{\"cuid\":2749730118911648,\"cpid\":\"NA1\",\"uid\":2749730118911648,\"pid\":\"NA1\",\"lp\":false,\"active\":true}],\"player_locale\":\"en\",\"pvpnet_account_id\":2749730118911648,\"region\":{\"locales\":[\"en_US\"],\"id\":\"NA1\",\"tag\":\"na\"},\"acct\":{\"type\":0,\"state\":\"ENABLED\",\"adm\":false,\"game_name\":\"Chris\",\"tag_line\":\"Lucky\",\"created_at\":1587942672000},\"jti\":\"p1UsXYeYOwI\",\"username\":\"ImTheLuckiest\"}"} */

// pull name and tagline

// awesome docs for more api requests: https://github.com/techchrism/valorant-api-docs
// can be used to check current players in pregame, etc