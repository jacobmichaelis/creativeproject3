<template>
  <div id="app">
    <nav>
      <p> plz date me</p>
      <hr>
      <ul>
        <li><router-link to="/">home</router-link></li>
        <li><router-link to="/portfolios">portfolios</router-link></li>
        <li><router-link to="/art">art</router-link></li>
        <li><router-link to="/jacob">jacob</router-link></li>
        <li><router-link to="/kalin">kalin</router-link></li>
        <li><router-link to="/lindsey">lindsey</router-link></li>
      </ul>
      <hr>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
