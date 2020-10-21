<template>
  <div class="container">
    <div v-show="show" class="game">
      <p v-if="players">Player 1: {{ players }}</p>
      <h4>Keyword: {{ word }} </h4>
      <p v-for="(taboo, index) in wordOne.tabooWords" :key="index">Taboo word {{index + 1}}: {{ taboo }} </p>
    </div>
    <div class="timer">
      <BaseTimer :time-limit="timeLeft" />
    </div>
    <div class="playGame">
      <button @click="showTaboo()">Play game</button>
    </div>
    <!-- <div class="playAgain">
      <button @click="playAgain()">Play again</button>
    </div>     -->
  </div>
</template>

<script>
import BaseTimer from '@/components/BaseTimer'

export default {
  name: 'PlayGame',
  props: {
    players: {
      type: Array
    }
  },
  components: {
    BaseTimer
  },
  data() {
    return {
      show: false,
      player: 'Emma',
      word: 'Furlough',
      timeLeft: 10,
      tabooWords: ['Covid', 'Work', 'Government', 'October', 'Scheme'],
      wordOne: {
        word: 'Covid-19',
        tabooWords: ['Pandemic', 'Bat', 'China', 'Flu', 'Illness']
      }
    }
  },
  methods: {
    showTaboo() {
      this.timeLeft = 60
      this.show = true
      console.log('hello')
    },
    playAgain() {
      this.timeLeft = 60
      console.log('play again')
    }
  }
}

</script>

<style scoped>
  .container {
    max-width: 600px;
    margin: 0 auto;
    border: 3px solid #eb6123;
    padding: 30px;
  }
  .playGame, .playAgain {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  div button {
    background-color: #5e32ba;
    color: white;
    border: none;
    height: 50px;
    font-size: 1.5rem;
    font-weight: 800;
    border-radius: 8px;
    min-width: 300px;
    margin-top: 30px;
  }
  .game {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .timer {
    display: flex;
    justify-content: center;
  }
</style>