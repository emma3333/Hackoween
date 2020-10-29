<template>
  <div class="rules">
    <h1>How to play</h1>
    <ul>
      <li>Split into two evenly sized teams.</li>
      <li>The aim of the game is for a specified clue giver to help their team to guess a keyword, without saying any of the taboo words listed.</li>
      <li>Each team takes turns to play, with one person being the clue giver (alternating who plays this role), who attempts to prompt their team to guess as many keywords as possible in the allotted time.</li>
      <li>The winning team is the team with most keywords guessed in the time allowed.</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HowToPlay',
  data() {
    return {

    }
  }
}
</script>

<style scoped>
  .rules {
    max-width: 600px;
    margin: 0 auto;
    border: 3px solid #eb6123;
    padding: 30px;
  }
  li {
    margin-bottom: 10px;
  }
</style>