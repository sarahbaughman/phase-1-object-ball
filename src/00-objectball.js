function gameObject(){
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson" : {
                    number: "0",
                    shoe: "16",
                    points: "22" ,
                    rebounds: "12",
                    assists: "12",
                    steals: "3",
                    blocks: "3",
                    slamDunks: "1"
                    },
                "Reggie Evans" : {
                    number: "30",
                    shoe: "14",
                    points: "12" ,
                    rebounds: "12",
                    assists: "12",
                    steals: "12",
                    blocks: "12",
                    slamDunks: "7"
                    },
                "Brooke Lopez" : {
                    number: "11",
                    shoe: "17",
                    points: "17" ,
                    rebounds: "19",
                    assists: "10",
                    steals: "3",
                    blocks: "1",
                    slamDunks: "15"
                    },
                "Mason Plumlee" : {
                    number: "1",
                    shoe: "19",
                    points: "26" ,
                    rebounds: "12",
                    assists: "6",
                    steals: "3",
                    blocks: "8",
                    slamDunks: "5"
                    },
                "Jason Terry" : {
                    number: "31",
                    shoe: "15",
                    points: "19" ,
                    rebounds: "2",
                    assists: "2",
                    steals: "4",
                    blocks: "11",
                    slamDunks: "1"
                    },
            }
        },
                 
    
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turqouise", "Purple"],
            players: {
                "Jeff Adrrien" : {
                    number: "4",
                    shoe: "18",
                    points: "10" ,
                    rebounds: "1",
                    assists: "1",
                    steals: "2",
                    blocks: "7",
                    slamDunks: "2"
                    },
                "Bismak Biyombo" : {
                    number: "0",
                    shoe: "16",
                    points: "12" ,
                    rebounds: "4",
                    assists: "7",
                    steals: "7",
                    blocks: "15",
                    slamDunks: "10"
                    },
                "DeSagna Diop" : {
                    number: "2",
                    shoe: "14",
                    points: "24" ,
                    rebounds: "12",
                    assists: "12",
                    steals: "4",
                    blocks: "5",
                    slamDunks: "5"
                    },
                "Ben Gordon" : {
                    number: "8",
                    shoe: "15",
                    points: "33" ,
                    rebounds: "3",
                    assists: "2",
                    steals: "1",
                    blocks: "1",
                    slamDunks: "0"
                    },
                "Brendan Haywood" : {
                    number: "33",
                    shoe: "15",
                    points: "6" ,
                    rebounds: "12",
                    assists: "12",
                    steals: "22",
                    blocks: "5",
                    slamDunks: "12"
                    }
             }
        }
    }
}

//key gives first layer of keys, keyValue gives value of those keys(our objects)
// function teamColors(){
//     let game = gameObject()
//     for(let key in game) {
//         let keyValue = game[key];
//         console.log(keyValue)
//     }
// }

function experiment(){
    let game = gameObject()
    for(let gameKey in game) {
        let teamObj = game[gameKey];
         return(teamObj.players)

    // for(let teamKey in teamObj){
    //     let teams = teamObj[teamKey]
    //     console.log(teams)
      
    
    // // let data = teamObj.player
    //     for(let key in teams){
    //     let players = teams[key]
    //     console.log(players)
        
       
    //     }
        // }
    }
}

experiment()


function allPlayersObject() {
    let object = gameObject();
    let homePlayers = object["home"]["players"];
    let awayPlayers = object["away"]["players"];
    const allPlayers = {...homePlayers, ...awayPlayers}
    return allPlayers
  }

function getPlayersByName(playerName){
   return allPlayersObject()[playerName]
}

function numPointsScored(playerName){
    return getPlayersByName(playerName)["points"]
}

function shoeSize(playerName){
    return getPlayersByName(playerName)["shoe"]
}

const getTeamInfoByTeamName = teamName => {
    if (gameObject().home.teamName === teamName) {
        return gameObject().home
    } else return gameObject().away
}

function teamColors(teamName) {
   return getTeamInfoByTeamName(teamName).colors
}

const somethingElse = () => [ gameObject().home.teamName, gameObject().away.teamName ]

function playerNumbers(teamName) {
    let newArray = []
    let teamPlayers = getTeamInfoByTeamName(teamName).players

    for(player in teamPlayers){
    newArray.push(teamPlayers[player].number)}
    return newArray
}

function playerStats(playerName){
    return getPlayersByName(playerName)
}

//


function bigShoeRebounds() {
    //- First, find the player with the largest shoe size
    let largestShoe = 0;
    let largestPlayer = '';
    const playerObj = allPlayersObject() 
    const shoeArray = []
    const playerArray = []
    //create two arrays, player name and shoe size
    for (let player in playerObj) {
      playerArray.push(player)
      shoeArray.push(playerObj[player].shoe)
    }
    //get largest shoe size from shoeArray
    largestShoe = Math.max(...shoeArray)
  
    //find player name with largest shoe size based on index in shoeArray
    largestPlayer = playerArray[shoeArray.indexOf(largestShoe)]
    return playerObj[largestPlayer].rebounds
  }

s