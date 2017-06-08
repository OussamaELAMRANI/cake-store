<template>
  <div id="home">
    <carousel></carousel>
    <cake-type></cake-type>
    <card-cake></card-cake>
  </div>
</template>

<script>
import carousel from './carousel'
import cakeType from './cakeType'
import cardCake from './cardCake'

export default {
  name: 'home',
  data () {
    return {
      msg: 'la page home'
    }
  },
  components: {
    'carousel': carousel,
    'cake-type': cakeType,
    'card-cake': cardCake
  }
}
</script>

<style lang="scss">

</style>
