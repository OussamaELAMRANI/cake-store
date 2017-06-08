<template>
<div>

  <div class="cakes-card container">
  <div class="col-xs-12">
      <div class="page-header">
          <h4>{{title}}</h4>
      </div>
  </div>
  <div class="col-xs-4" v-for="card in cakes">
        <div class="cake-card">
        <div class="cake-head">
          <img :src="card.url" alt="">
        </div>
        <div class="cake-content">
          <h2>{{card.title}}</h2>
          <p>{{card.info}}</p>
          <p v-if="(card.price !== '')">prix : <strong> {{card.price}} DH</strong></p>
        </div>
      </div><!--end cake-card-->
  </div><!--end col-xx-xx -->
</div>
</div>
</template>

<script>
  export default {
    name: 'card-cake',
    props: ['cakes', 'title'],
    data () {
      return {
        msg: 'Cake Collections ...'
      }
    }
  }
</script>

<style lang="scss">
.cake-card {
  margin-top: 30px;
  overflow: hidden;
  width: 300px;
  height: 360px;
  // background-color: #997266;
  background-color: #9dd2d8;
  box-shadow: 1px 1px 10px #9dd2d8;
  // border-radius: 10px 10px 0 0 ;
  .cake-head {
    background-color: #fff;
    img {
    width: 100%;
    height: 200px;
  }
  }
  .cake-content {
    text-align: center;
    color: #fff;
    p {
      font-family: 'Open Sans Condensed', sans-serif;
      font-size: 18px;
    }
    h2{
      color: #B1877A;
      font-size: 30px;
      font-family: 'Dancing Script', cursive;
    }
  }
}

</style>
