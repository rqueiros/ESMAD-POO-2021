

// a.	Person’s personal data such as: name, address, birthday and local of birth, contacts (phone and email) and profession;// 
const person = {
    name: 'Carla Fonseca',
    adress: 'Avenida dos Banhos, 777',
    birth: { day: '2001-04-06', local: 'Vila do Conde' },
    contact: { phone: '933222111', email: 'carla@gmail.com' },
    profession: 'Student'
}

// b.	Information about a soccer game. The object must allow a function (not to implement) be capable of showing the final score of the game, the name of the teams, 
//       the authors of the goals, the stadium name and the date and time of the game.

const soccerGame = {
    stadiumName: 'Estádio da Luz',
    teams: { team1: 'Benfica', team2: 'FCP' },
    score: { team1: 2, team2: 1 },
    datetime: '12/12/2021 20:00:00',
    goals:
        [
            { name: 'Seferovic', team: 'Benfica', minutes: 12 },
            { name: 'Darwin', team: 'Benfica', minutes: 63 },
            { name: 'Pepe', team: 'FCP', minutes: 82 },
        ]
}

