<template>
  <div id="app">
    <nav-bar></nav-bar>
    <!--img src="./assets/logo.png"-->
    <router-view></router-view>
    <footer-cake></footer-cake>
  </div>
</template>

<script>
import NavBar from './components/NavBar'
import footer from './components/footer'

export default {
  name: 'app',
  components: {
    'nav-bar': NavBar,
    'footer-cake': footer
  }
}
</script>

<style lang="scss">

</style>
