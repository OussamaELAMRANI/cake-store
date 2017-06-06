<template>
<div class="container ">
  <div class="col-xs-12">
    <div class="page-header">
      <h4>{{title}}</h4>
    </div>
  </div>
  <div class="cake-vol">
    <div class="col-xs-4" v-for="tp in types">
      <div class="cake-catg" >
        <img :src='tp.url' alt="">
        <h3>{{tp.name}}</h3>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    name: 'cake-type',
    data () {
      return {
        title: 'Notre Biscuite ;) ...',
        types: [
          {
            url: 'static/images/catgs/cake.jpg',
            name: 'Goufrette'
          },
          {
            url: 'static/images/catgs/catg1.jpg',
            name: 'Bisquite'
          },
          {
            url: 'static/images/catgs/catg2.jpg',
            name: 'Mskoota :D'
          },
          {
            url: 'static/images/catgs/catg3.jpg',
            name: 'Glass ... :D'
          }
        ]
      }
    }
}
</script>

<style lang="scss">
  .cake-catg {
    position: relative;
    display: block;
    overflow: hidden;
    padding: 0;
    height: 260px;
    width: 300px;
    /* Or whatever */
      // background-color: #A48196;
    img{
      height: 250px;
    }
    h3{
      position: absolute;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.46);
      width: 100%;
      color: #fff;
      padding: 10px;
      text-align: center;

    }
}
.slick-prev:before,
.slick-next:before {
    background-color:  #A48196;
    border-radius: 50%;
    color:  #A48196;
}
</style>
