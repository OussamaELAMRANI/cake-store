<template>
<div class="cakes-card container">
  <div class="col-xs-12">
      <div class="page-header">
          <h4>{{title}}</h4>
      </div>
  </div>
  <div class="col-xs-4" v-for="card in cards">
    <div class="cake-card">
      <div class="cake-head">
        <img :src="card.url" alt="">
      </div>
      <div class="cake-content">
        <h2>{{card.title}}</h2>
        <p>{{card.info}}</p>
        <p>prix : <strong> {{card.price}} DH</strong></p>
      </div>
    </div><!--end cake-card-->
  </div><!--end col-xx-xx -->
</div>
</template>

<script>
  export default {
    name: 'card-cake',
    data () {
      return {
        title: 'Cake Collections ...',
        cards: [
          {
            url: 'static/images/bisk/bisk.jpg',
            title: 'bisquite',
            info: 'les bon gout de caramel',
            price: 1.00
          },
          {
            url: 'static/images/bisk/bisko4.jpg',
            title: 'bisquite',
            info: 'les bon gout de caramel',
            price: 1.50
          },
          {
            url: 'static/images/bisk/bisko5.jpg',
            title: 'bisquite',
            info: 'les bon gout de caramel',
            price: 2.00
          },
          {
            url: 'static/images/bisk/bisko6.jpg',
            title: 'bisquite',
            info: 'les bon gout de caramel',
            price: 3.00
          },
          {
            url: 'static/images/bisk/bisko.jpg',
            title: 'bisquite',
            info: 'les bon gout de caramel',
            price: 3.00
          },
          {
            url: 'static/images/bisk/bisko3.jpg',
            title: 'bisquite',
            info: 'les bon gout de caramel',
            price: 3.00
          },
          {
            url: 'static/images/bisk/bisko2.jpg',
            title: 'bisquite',
            info: 'les bon gout de caramel',
            price: 3.00
          },
          {
            url: 'static/images/bisk/bisko1.jpg',
            title: 'bisquite',
            info: 'les bon gout de caramel',
            price: 3.00
          }
        ]
      }
    }
  }
</script>

<style lang="scss">
.cake-card {
  margin-top: 30px;
  overflow: hidden;
  width: 300px;
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
      font-size: 30px;
      font-family: 'Dancing Script', cursive;
    }
  }
}

</style>
