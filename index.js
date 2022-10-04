let players = []
const activePlayer = 0

const elementPlayer = document.querySelector('.player')

fetch('./players.json').then(response => response.json()).then(data => {
  players = data
})

function changePlayer(indexPlayer) {
  const player = players[indexPlayer]

  console.log(player, players, indexPlayer)
  elementPlayer.classList.add('remove')

  setTimeout(() => {
    const name = document.querySelector('h1')
    const [a, b] = player.name.split(' ')
    name.innerHTML = a + '<br />' + b
  
    const position = document.querySelector('h2')
    position.innerHTML = `${player.position} <sup>#</sup>${player.number}`
  
    const playerTeam = document.querySelector('.player__team')
    playerTeam.setAttribute('src', player.team.logo)
  
    const playerAvatar = document.querySelector('.player__avatar')
    playerAvatar.setAttribute('src', player.avatar)

    elementPlayer.classList.remove('remove')
  }, 500)
  

}