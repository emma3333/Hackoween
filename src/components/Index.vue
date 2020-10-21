<template>
  <div class="home">
    <h1>Hackoween Taboo</h1>
    <p v-if="playersOne.length > 0">Team One Player Names: <span>{{ playersOne }}</span> </p>
    <form v-if="playersOne.length < 4" @submit.prevent="enterGame()">
      <h2>Team One (4 players)</h2>
      <div v-show="true" v-for="(player, index) in playersOne" :key="index">
        <label for="playerone">Player {{ index+1 }}</label>
        <input type="text" name="playerone" v-model="playersOne[index]" @keydown.tab.prevent="addPlayer">
      </div>
      <div class="field">
        <label for="add-player">Enter player name</label>
        <input type="text" name="add-player" @keydown.tab.prevent="addPlayerOne" v-model="player">
        <p v-if="feedback">{{ feedback }}</p>
      </div>
    </form>
    <!-- Team Two -->
    <!-- <p v-if="playersTwo.length > 0">Team Two Player Names: <span>{{ playersTwo }}</span> </p>
    <form v-if="playersTwo.length < 3 && playersOne.length === 3" @submit.prevent="enterGame()">
      <h2>Team Two (3 players)</h2>
      <div v-show="true" v-for="(player, index) in playersTwo" :key="index">
        <label for="playerone">Player {{ index+1 }}</label>
        <input type="text" name="playerone" v-model="playersTwo[index]" @keydown.tab.prevent="addPlayer">
      </div>
      <div class="field">
        <label for="add-player">Enter player name</label>
        <input type="text" name="add-player" @keydown.tab.prevent="addPlayerTwo" v-model="player">
        <p v-if="feedback">{{ feedback }}</p>
      </div>
    </form> -->


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
  // props: ['player'],
  data() {
    return {
      player: null,
      playersOne: [],
      playersTwo: [],
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
  }}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
span {
  color: #5e32ba;
}

.home {
  max-width: 600px;
  margin: 0 auto;
  border: 3px solid #96c457;
  padding: 30px;
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
</style>
