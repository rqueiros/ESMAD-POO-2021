// a) Create the next array:
let games = [
    { name: 'Rick Dangerous', year: 1989 },
    { name: 'Goblins', year: 1992 },
    { name: 'Golden Axe', year: 1989 }
]

/* b) 
Show in the console information about the games:
Name: N  Year: A

(where N is the name of the game and A is the year the game was released) */

for (const game of games) {
    console.log(`Name: ${game.name} Year: ${game.year}`);
}

// c) Display the number of existing games on the console
console.log(games.length);

// d) Create a function called addGame that creates a new object (with user data from 2
//text boxes and an “ADD GAME” button) and insert them into the array

const btn1 = document.getElementById('btnAdd')
btn1.addEventListener('click', addGame);


function addGame() {

    const gameName = document.getElementById('txtGame').value
    const gameYear = document.getElementById('txtYear').value
    const newGame = { name: gameName, year: gameYear }

    if (games.some(item => item.name == gameName)) {   // e.  verify if game exists in the array 
        alert('O Jogo já existe no array!')
    }
    else {
        games.push(newGame)
        console.table(games)
    }
}

// f) Create a function called averageLaunchDate that calculates and returns the average
// year of game launch. Display the result in an alert box

function averageLaunchDate() {
    return games.reduce((sum, game) => sum + game.year, 0) / games.length
}

// g) Create a new button called “REMOVE GAME” which, when pressed, must remove the
// game whose name was entered in the text box. If the game does not exist, the
//message: “GAME INEXISTENT” must be displayed in an alert box

document.querySelector('#btnRemove').addEventListener('click', removeGame);
function removeGame() {
    const gameName = document.getElementById('txtGame').value
    if (games.find(game => game.name == gameName)) {
        games = games.filter(game => game.name != gameName)
    } else {
        alert('Jogo inexistente!')
    }
}

// h) Create a function called gamesFrom90 that returns the names of games released in
//the 90s. Display the result in an alert box

function gamesFrom90() {
    return games
        .filter(game => game.year >= 1990 && game.year < 2000)
        .map(game => game.name)
}

alert(gamesFrom90())

// i) Create a function called concatenateGameNames that returns a string with all game
// names in lowercase and without spaces. Display the result in an alert box

function concatenateGameNames() {
    return games.map(game => game.name).join('').toLowerCase()
}

alert(concatenateGameNames())