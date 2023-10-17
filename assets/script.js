let players = [];
const team1Players = [];
const team2Players = [];
const reserves = [];

function addPlayer() {
    const playerName = document.getElementById('player-name').value;
    if (playerName.trim() !== '') {
        players.push(playerName);
        document.getElementById('player-name').value = '';
        updatePlayerList();
    }
}

function updatePlayerList() {
    const playerList = document.getElementById('player-list');
    playerList.innerHTML = '';
    players.forEach((player, index) => {
        const listItem = document.createElement('div');
        listItem.textContent = `${index + 1}. ${player}`;
        playerList.appendChild(listItem);
    });
}

function generateTeams() {
    if (players.length < 18) {
        alert('Insira pelo menos 18 jogadores.');
        return;
    }

    shuffleArray(players);

    for (let i = 0; i < 7; i++) {
        team1Players.push(players.pop());
        team2Players.push(players.pop());
    }

    reserves.push(...players);

    displayTeams();
}

function displayTeams() {
    const team1PlayersDiv = document.getElementById('team-1-players');
    const team2PlayersDiv = document.getElementById('team-2-players');
    const team1ReservesDiv = document.getElementById('team-1-reserves');
    const team2ReservesDiv = document.getElementById('team-2-reserves');

    team1PlayersDiv.innerHTML = team1Players.join('<br>');
    team2PlayersDiv.innerHTML = team2Players.join('<br>');
    team1ReservesDiv.innerHTML = reserves.slice(0, 2).join('<br>');
    team2ReservesDiv.innerHTML = reserves.slice(2, 4).join('<br>');
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
function addPlayer() {
    if (players.length >= 18) {
        alert('Você já inseriu o máximo de 18 jogadores.');
        return;
    }

    const playerName = document.getElementById('player-name').value;
    if (playerName.trim() !== '') {
        players.push(playerName);
        document.getElementById('player-name').value = '';
        updatePlayerList();
    }
}
function shareResultsOnWhatsApp() {
    const team1PlayersDiv = document.getElementById('team-1-players');
    const team2PlayersDiv = document.getElementById('team-2-players');
    const team1ReservesDiv = document.getElementById('team-1-reserves');
    const team2ReservesDiv = document.getElementById('team-2-reserves');

    const message = `Resultados do Sorteio de Times:
Time 1:
${team1PlayersDiv.textContent}
Reservas:
${team1ReservesDiv.textContent}

Time 2:
${team2PlayersDiv.textContent}
Reservas:
${team2ReservesDiv.textContent}
`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://api.whatsapp.com/send?text=${encodedMessage}`;

    window.open(whatsappURL, '_blank');
}
function addPlayersFromTextarea() {
    const playerNamesTextarea = document.getElementById('player-names');
    const namesText = playerNamesTextarea.value;
    
    if (namesText.trim() === '') {
        return;
    }

    const namesArray = namesText.split('\n').map(name => name.trim());

    for (const name of namesArray) {
        if (name !== '') {
            players.push(name);
        }
    }

    playerNamesTextarea.value = '';
    updatePlayerList();
}
