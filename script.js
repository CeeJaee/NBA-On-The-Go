document.addEventListener("DOMContentLoaded", function() {
    fetchGames();

    document.getElementById("games").addEventListener("change", function() {
        const gameId = this.value;
        fetchGameDetails(gameId);
    });
});

function fetchGames() {
    // Use a placeholder for fetching game data
    const games = [
        { id: 1, description: "Lakers vs Warriors" },
        { id: 2, description: "Nets vs Bucks" }
    ];
    const gamesSelect = document.getElementById("games");
    games.forEach(game => {
        const option = document.createElement("option");
        option.value = game.id;
        option.textContent = game.description;
        gamesSelect.appendChild(option);
    });
}

function fetchGameDetails(gameId) {
    // Use a placeholder for fetching game details
    const gameDetails = {
        1: {
            score: "Lakers 102 - 99 Warriors",
            players: [
                { name: "LeBron James", points: 34, rebounds: 8, assists: 9 },
                { name: "Stephen Curry", points: 27, rebounds: 5, assists: 7 }
            ]
        },
        2: {
            score: "Nets 110 - 105 Bucks",
            players: [
                { name: "Kevin Durant", points: 38, rebounds: 10, assists: 6 },
                { name: "Giannis Antetokounmpo", points: 31, rebounds: 11, assists: 8 }
            ]
        }
    };

    const details = gameDetails[gameId];
    const gameDetailsDiv = document.getElementById("game-details");
    gameDetailsDiv.innerHTML = `<h2>${details.score}</h2>`;

    const playersList = document.createElement("ul");
    let bestPlayer = details.players[0];

    details.players.forEach(player => {
        const playerItem = document.createElement("li");
        playerItem.textContent = `${player.name}: ${player.points} points, ${player.rebounds} rebounds, ${player.assists} assists`;
        playersList.appendChild(playerItem);

        // Determine best player (simple logic based on points)
        if (player.points > bestPlayer.points) {
            bestPlayer = player;
        }
    });

    gameDetailsDiv.appendChild(playersList);

    // Highlight best player
    const bestPlayerItem = Array.from(playersList.children).find(item => item.textContent.includes(bestPlayer.name));
    if (bestPlayerItem) {
        bestPlayerItem.classList.add("best-player");
    }
}
