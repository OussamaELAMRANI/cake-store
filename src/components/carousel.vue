<template>
<div>
  <div class="carousel">
  <div v-for="info in infos" class="carousel-img" :style="{'background-image': 'url(' + info.url + ')' }">
    <h1>{{info.titre}}</h1>
    <p>{{info.text}}</p>
  </div>
  </div>
  <div class="zigzag"></div>

</div>
</template>


<script>

  export default {
    name: 'carousel',
    data () {
      return {
        infos: [
           {
            url: 'static/images/carousel/keoo.jpg',
            titre: 'Les gareaux number one ',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, illo'
          },
          {
            url: 'static/images/carousel/ZZZZ.jpg',
            titre: 'Les gareaux number one ',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, illo'
          },
          {
            url: 'static/images/carousel/kh.jpg',
            titre: 'Les gareaux number one ',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, illo'
          },
          {
            url: 'static/images/carousel/zwina.jpg',
            titre: 'Les gareaux number one ',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, illo'
          },
          {
            url: 'static/images/carousel/marchela.jpg',
            titre: 'Les gareaux number one ',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, illo'
          }
        ]
      }
    }
}
</script>

<style lang="scss">

.carousel{
  // width:99% !important;
  .carousel-img {
      height: 600px;
      background: linear-gradient( to bottom,rgba(0,0,0,.4),rgba(0,0,0,.9));
      background-repeat: no-repeat;
      background-position: top bottom;
      background-size: cover;
      h1{
        font-family: 'Dancing Script', cursive;
        font-size: 60px;
        font-weight:bold;
      }
      p{
        font-family: 'Open Sans Condensed', sans-serif;
        font-size: 30px;
      }

      h1,p {
        position: relative;
        top: 33.33%;
        text-align: center;
        text-shadow: 2px 2px 10px gray;
        color: #fff;
      }
  }
}
.slick-dots{
    bottom: 100px;
  li button:before {
    font-size: 17px;
    color: #A48196;
    background-color: #A48196;
  }
}
.zigzag {
    margin: -44px 0px 10px -10px;
    border: 20px solid transparent;
    border-image:  url('../assets/zig-zag.svg') 200 repeat;
}
</style>
