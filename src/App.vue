<template>
  <div id="app">
    <app-header></app-header>
    <nav-bar></nav-bar>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

import NavBar from './layout-components/NavBar'
import AppHeader from './layout-components/AppHeader'

export default {
  name: 'app',
  components: {
    NavBar,
    AppHeader
  }
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
