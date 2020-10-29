<template>
  <div class="container">
    <h4 v-show="gameover">Time's up!</h4>
    <div v-show="show" class="game">
      <p v-if="players">Clue giver: <span>{{ players[randomPlayer] }}</span></p>
        <div>
          <h3>Keyword: {{ taboos[randomTabooCard].keyword }}</h3>
          <p>Taboo words: {{ taboos[randomTabooCard].taboowords.join(', ') }}</p>
        </div>
    </div>
    <div class="timer">
      <p v-show="show">Time left: {{ counter }} seconds</p>
      <!-- <BaseTimer :time-limit="timeLeft" /> -->
    </div>
    <div class="skipCard">
      <button v-show="skip" @click="skipCard()">Skip card</button>
    </div>    
    <div class="playGame">
      <button @click="showTaboo()">{{ this.playGame ? 'Play Game' : 'Play Again' }}</button>
    </div>
  </div>
</template>

<script>
import db from '@/firebase/init'
// import BaseTimer from '@/components/BaseTimer'

export default {
  name: 'PlayGame',
  props: {
    players: {
      type: Array
    }
  },
  // components: {
  //   BaseTimer
  // },
  data() {
    return {
      show: false,
      playGame: true,
      skip: false,
      gameover: false,
      counter: 20,
      taboos: [],
      randomPlayer: 0,
      randomTabooCard: 0,
      timerId: null,
      timerIds: []
    }
  },
  methods: {
    showTaboo() {
      this.timerId = null
      clearInterval(this.timerId)
      this.gameover = false
      this.playGame = false
      this.skip = true
      this.randomPlayer = Math.floor(Math.random() * 4)
      this.randomTabooCard = Math.floor(Math.random() * this.taboos.length)
      this.timerId = setInterval(() => {
        this.timerIds.push(this.timerId)
        if (this.counter === 0) {
          clearInterval(this.timerId)
          this.gameover = true
          this.show = false
          this.skip = false
          }
        this.counter--
        }, 1000)
      this.show = true
      this.counter = 20
      this.timerIds.map(id => clearInterval(id))
    },
    skipCard() {
      this.randomTabooCard = Math.floor(Math.random() * this.taboos.length)     
    }
  },
  created() {
    db.collection("taboocards")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          let taboo = doc.data()
          taboo.id = doc.id
          this.taboos.push(taboo)
        })
      })
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
  h4 {
    text-align: center;
    font-size: 2rem;
  }
  .playGame {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
  }
  .skipCard {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
  }
  .skipCard button {
    background-color: #96c457;    
  }
  span {
    color: #5e32ba;
    font-weight: 800;
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
    margin-top: 10px;
  }
  .game {
    display: flex;
    flex-direction: column;
  }
  .timer {
    display: flex;
    justify-content: center;
  }

</style>