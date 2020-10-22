<template>
  <div class="rules">
    <h1>How to play</h1>
    <ul>
      <li>Get into two teams.</li>
      <li>Players take turns as the "giver", who attempts to prompt their team to guess as many keywords as possible in the allotted time.</li>
      <li>However each card also has a number of "taboo" words which can't be said.</li>
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