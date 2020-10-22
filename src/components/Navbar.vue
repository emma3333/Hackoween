<template>
  <div class="navbar">
    <div class="links">
      <router-link :to="{ name: 'Index' }">
        <span>Hackoween</span>
      </router-link>
      <router-link :to="{ name: 'HowToPlay' }">
        <span>How to play</span>
      </router-link>
      <router-link :to="{ name: 'PlayGame' }">   
        <span>Play Game</span>
      </router-link>
    </div>
    <div class="pumpkin">
      <img src="/ghost.png" alt="ghost" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {

    }
  }
}
</script>

<style>
  .navbar {
    border-bottom: 2px solid #5e32ba;
    margin-bottom: 30px;
    padding: 2px 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  a {
    color: #5e32ba;
    font-size: 1rem;
    font-weight: 800;
    text-transform: uppercase;
    text-decoration: none;
    margin-right: 50px;
  }
  .pumpkin {
    align-self: flex-end;
  }
  .pumpkin img {
    height: 30px;
    width: 30px;
  }
  @media (max-width: 705px) {
    .navbar {
      flex-direction: row;
      padding: 2px;
    }
  }
  @media (max-width: 585px) {
    .navbar {
      padding: 2px;
    }
    .links {
      display: flex;
      flex-direction: column;
    }
}
</style>