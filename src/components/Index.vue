<template>
  <div class="home">
    <h2>Hackoween Taboo</h2>
    <p v-if="playersOne.length > 0">Team names: <span v-for="(player, index) in splitPlayers" :key="index">{{player + '    '}}</span></p>
    <form v-if="playersOne.length < 4" @submit.prevent="enterGame()">
      <h3>Team names (4 players)</h3>
      <div v-show="true" v-for="(player, index) in playersOne" :key="index">
        <label for="playerone">Player {{ index+1 }}</label>
        <input type="text" name="playerone" v-model="playersOne[index]" @keydown.enter.prevent="addPlayer">
      </div>
      <div class="field">
        <label for="add-player">Enter player names (press enter):</label>
        <input type="text" name="add-player" @keydown.enter.prevent="addPlayerOne" v-model="player">
        <p v-if="feedback">{{ feedback }}</p>
      </div>
    </form>
    <PlayGame :players="playersOne" v-if="playersOne.length === 4"></PlayGame>
  </div>
</template>

<script>
import PlayGame from '@/components/PlayGame'

export default {
  name: 'Home',
  components: {
    PlayGame
  },
  data() {
    return {
      player: null,
      playersOne: [],
      feedback: null
    }
  },
  methods: {
    addPlayerOne() {
      if (this.player) {
        this.feedback = null
        this.playersOne.push(this.player)
        this.player = null
        if (this.playersOne.length === 4) {
          this.show = false
        }
      } else {
        this.feedback = 'Please enter player name'
      }
  },
    addPlayerTwo() {
      this.playersTwo.push(this.player)
      this.player = null
      if (this.playersTwo.length === 4) {
        this.show = false
      }
  },  
    enterGame() {
      this.$router.push({ name: 'PlayGame'})
    }
  },
  computed: {
    splitPlayers() {
      let singlePlayer = [...this.playersOne]
      singlePlayer.map(player => player.split('').join(''))
      return singlePlayer
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2, h3 {
  margin: 0;
}
span {
  color: #5e32ba;
}
.home {
  max-width: 600px;
  margin: 0 auto;
  border: 3px solid #96c457;
  padding: 60px;
}
form div {
  display: flex;
  flex-direction: column;
  max-width: 300px;
}
form label {
  margin-top: 10px;
}
.field p {
  color: #e9804d;
  font-weight: 800;
}
input {
  height: 20px;
  border: 1px solid black;
  border-radius: 8px;
  margin-top: 10px;
  padding: 5px;
}
@media (max-width: 585px) {
  .home {
    padding: 5px;
  }
}
</style>
