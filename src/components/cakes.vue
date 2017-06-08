<template>
  <div>
    <div class="jumbo" :style="{'background-image': 'url(' + cake.url + ')' }">
    <h1>{{cake.title}}</h1>
    <p>{{cake.text}}</p>
    </div>
    <div class="zigzag"></div>
    <div class="container">
        <div class="cake-type">
          <div class="col-xs-2">
              <img src="../assets/LOGO.png" alt="" @click="getCategorie('all')">
          </div>
          <div class="col-xs-2">
              <img src="../assets/keo.png" alt="" @click="getCategorie('keo')">
          </div>
          <div class="col-xs-2">
              <img src="../assets/gaufrette.png" alt="" @click="getCategorie('gaufr')">
          </div>
          <div class="col-xs-2">
              <img src="../assets/genoise.png" alt="" @click="getCategorie('genoise')">
          </div>
          <div class="col-xs-2">
              <img src="../assets/domingo.png" alt="" @click="getCategorie('domingo')">
          </div>
          <div class="col-xs-2">
              <img src="../assets/Millefeuille.png" alt="" @click="getCategorie('mil')">
          </div>

      </div>
        <transition name="fade">
          <div class="cakes-card" v-if="show">
              <card-cake :cakes='typeOfCake' :title='title'></card-cake>
          </div>
        </transition>
    </div>
  </div>
</template>

<script>
import cardCake from './cardCake'

export default {
  name: 'cakes',
  data () {
    return {
      title: 'Click sur les image pour afficher notre produit ;)',
      cake: {
        url: 'static/images/LTY.jpg',
        title: 'Wooow this\'s a delicious cake',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit obcaecati iure mollitia aliquam nemo'
      },
      card1: [
        {
          url: 'static/images/bisk/bisko4.jpg',
          title: 'bisquite',
          info: 'les bon gout de caramel',
          price: 1.50
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
      ],
      card2: [
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
        }
      ],
      keo: [
        {
          url: 'static/images/keo/keon.jpg',
          title: 'KEO Choco',
          info: 'SANDWICHS FOURRES ET ENROBES SAVEUR CACAO',
          price: ''
        },
        {
          url: 'static/images/keo/KEO 6 Choco 6BISCUITS SANDWICHS FOURRES ET ENROBES SAVEUR CACAO 30 PIECES PAR CARTON.png',
          title: 'KEO 6 Choco',
          info: 'SANDWICHS FOURRES ET ENROBES SAVEUR CACAO',
          price: 3.00
        },
        {
           url: 'static/images/keo/KEO 6 Cookies 6 BISCUITS AU PéPITES DE CHOCOLAT 60 PIECES PAR CARTON.png',
          title: 'KEO 6 Cookies',
          info: '6 BISCUITS AU PéPITES DE CHOCOLAT',
          price: 3.00
        },
        {
           url: 'static/images/keo/keo2.png',
          title: 'KEO 3 Negro',
          info: 'SANDWICHS AU CACAO FOURRES SAVEUR VANILLE',
          price: 3.00
        },
        {
           url: 'static/images/keo/bisk6.png',
          title: 'Mini Ralf CACAO 2',
          info: 'SANDWICHS FOURRES SAVEUR CACAO',
          price: 3.00
        },
        {
          url: 'static/images/keo/bisk5.png',
          title: 'Blaugrana Kids',
          info: '12 biscuits sec 42 PIECES PAR CARTON',
          price: 3.00
        }
      ],
      gaufr: [
        {
          url: 'static/images/gaufrette/Del CASTRO Cigare FOURRE SAVEUR CACAO 50 PIECES PAR TASSE.png',
          title: 'Del CASTRO Cigare',
          info: 'FOURRE SAVEUR CACAO',
          price: 3.00
        },
        {
          url: 'static/images/gaufrette/Mini Tomix Vanille Gaufrette fourree saveur vanille 100 pieces par carton.png',
          title: 'Mini Tomix Vanille',
          info: ' Gaufrette fourree saveur vanille',
          price: 3.00
        },
        {
          url: 'static/images/gaufrette/Tomix CACAO gaufrette fouree saveur cacao 88 pieces par carton.png',
          title: 'Tomix CACAO',
          info: ' gaufrette fouree saveur cacao',
          price: 3.00
        },
        {
          url: 'static/images/gaufrette/Tomix chocolat gaufrette fouree & enrobee saveur cacao 75 pieces par carton.png',
          title: 'Tomix chocolat ',
          info: ' gaufrette fouree & enrobee saveur cacao',
          price: 3.00
        }
      ],
      genoise: [
        {
          url: 'static/images/genoise/Al jamal Cacao Genoise fourre saveur cacao 25 pieces par carton.png',
          title: 'Al jamal Cacao',
          info: 'Genoise fourre saveur cacao',
          price: 3.00
        },
        {
          url: 'static/images/genoise/Al jamal Caramel Genoise fourre saveur caramel 25 PIECES PAR CARTON.png',
          title: 'Al jamal Genoise',
          info: 'Genoise fourre saveur caramel',
          price: 3.00
        },
        {
          url: 'static/images/genoise/Al jamal Orange Genoise fourre saveur Orange 25 pieces par carton.png',
          title: 'Al jamal Orange',
          info: 'Genoise fourre saveur Orange',
          price: 3.00
        },
        {
          url: 'static/images/genoise/Al jamal Vanille Genoise fourre saveur Vanille 25 pieces par carton.png',
          title: 'Al jamal Vanille',
          info: 'Genoise fourre saveur Vanille',
          price: 3.00
        },
        {
          url: 'static/images/genoise/L50 Genoise fourre saveur Cacao 25 pieces par carton.png',
          title: 'L50 Genoise',
          info: 'Genoise fourre saveur Cacao',
          price: 3.00
        },
        {
          url: 'static/images/genoise/Melany Kake 80 Genoise fourre saveur vanille 80 pieces Par carton.png',
          title: 'Melany Kake 80',
          info: 'Genoise fourre saveur vanille',
          price: 3.00
        },
        {
          url: 'static/images/genoise/Mini Zwina Cacao Genoise fourre & enrobe saveur cacao 66 pieces par carton.png',
          title: 'Mini Zwina Cacao',
          info: 'Genoise fourre & enrobe saveur cacao',
          price: 3.00
        },
        {
          url: 'static/images/genoise/Zwina CACAO Genoise fourre & enrobe saveur cacao 40 pieces par carton.png',
          title: 'Zwina Cacao',
          info: 'Genoise fourre & enrobe saveur cacao',
          price: 3.00
        }
      ],
      domingo: [
        {
          url: 'static/images/domingo/Domingo choco pete feuillete fourree creme vanille et enrobee au cacao 30 pieces par carton.png',
          title: 'Domingo choco',
          info: 'Pate feuillete fourree creme vanille',
          price: 3.00
        },
        {
          url: 'static/images/domingo/Domingo Vanille pete feuillete fourree creme vanille 30 pieces par carton.png',
          title: 'Domingo Vanille',
          info: 'Pate feuillete fourree creme vanille ',
          price: 3.00
        },
        {
          url: 'static/images/domingo/Milwix chocolat pete feuillete fourree  et enrobee au cacao 40 pieces par carton.png',
          title: 'Milwix chocolat',
          info: 'Pate feuillete fourree et enrobee au cacao',
          price: 3.00
        }
      ],
      mil:[
        {
          url: 'static/images/milefeuille/Millefeuille 8 Unites.png',
          title: 'Millefeuille choco',
          info: 'Millefeuille 8 Unites',
          price: 30.00
        },
        {
          url: 'static/images/milefeuille/Millefeuille 16 Unites.png',
          title: 'Millefeuille',
          info: 'Millefeuille 16 Unites',
          price: 30.00
        },
        {
          url: 'static/images/milefeuille/Millefeuille 22 Unites.png',
          title: 'Millefeuille',
          info: 'Millefeuille 22 Unites',
          price: 30.00
        },
        {
          url: 'static/images/milefeuille/Millefeuille 30 Unites.png',
          title: 'Millefeuille',
          info: 'Millefeuille 22 Unites',
          price: 30.00
        }
      ],
      all: [
        {
          url: 'static/images/milefeuille/Millefeuille 8 Unites.png',
          title: 'Millefeuille choco',
          info: 'Millefeuille 8 Unites',
          price: 30.00
        },
        {
          url: 'static/images/milefeuille/Millefeuille 16 Unites.png',
          title: 'Millefeuille',
          info: 'Millefeuille 16 Unites',
          price: 30.00
        },
        {
          url: 'static/images/milefeuille/Millefeuille 22 Unites.png',
          title: 'Millefeuille',
          info: 'Millefeuille 22 Unites',
          price: 30.00
        },
        {
          url: 'static/images/milefeuille/Millefeuille 30 Unites.png',
          title: 'Millefeuille',
          info: 'Millefeuille 22 Unites',
          price: 30.00
        },
        {
          url: 'static/images/domingo/Domingo choco pete feuillete fourree creme vanille et enrobee au cacao 30 pieces par carton.png',
          title: 'Domingo choco',
          info: 'Pate feuillete fourree creme vanille',
          price: 3.00
        },
        {
          url: 'static/images/domingo/Domingo Vanille pete feuillete fourree creme vanille 30 pieces par carton.png',
          title: 'Domingo Vanille',
          info: 'Pate feuillete fourree creme vanille ',
          price: 3.00
        },
        {
          url: 'static/images/domingo/Milwix chocolat pete feuillete fourree  et enrobee au cacao 40 pieces par carton.png',
          title: 'Milwix chocolat',
          info: 'Pate feuillete fourree et enrobee au cacao',
          price: 3.00
        },
         {
          url: 'static/images/genoise/Al jamal Cacao Genoise fourre saveur cacao 25 pieces par carton.png',
          title: 'Al jamal Cacao',
          info: 'Genoise fourre saveur cacao',
          price: 3.00
        },
        {
          url: 'static/images/genoise/Al jamal Caramel Genoise fourre saveur caramel 25 PIECES PAR CARTON.png',
          title: 'Al jamal Genoise',
          info: 'Genoise fourre saveur caramel',
          price: 3.00
        },
        {
          url: 'static/images/genoise/Al jamal Orange Genoise fourre saveur Orange 25 pieces par carton.png',
          title: 'Al jamal Orange',
          info: 'Genoise fourre saveur Orange',
          price: 3.00
        },
        {
          url: 'static/images/genoise/Al jamal Vanille Genoise fourre saveur Vanille 25 pieces par carton.png',
          title: 'Al jamal Vanille',
          info: 'Genoise fourre saveur Vanille',
          price: 3.00
        },
        {
          url: 'static/images/genoise/L50 Genoise fourre saveur Cacao 25 pieces par carton.png',
          title: 'L50 Genoise',
          info: 'Genoise fourre saveur Cacao',
          price: 3.00
        },
        {
          url: 'static/images/genoise/Melany Kake 80 Genoise fourre saveur vanille 80 pieces Par carton.png',
          title: 'Melany Kake 80',
          info: 'Genoise fourre saveur vanille',
          price: 3.00
        },
        {
          url: 'static/images/genoise/Mini Zwina Cacao Genoise fourre & enrobe saveur cacao 66 pieces par carton.png',
          title: 'Mini Zwina Cacao',
          info: 'Genoise fourre & enrobe saveur cacao',
          price: 3.00
        },
        {
          url: 'static/images/genoise/Zwina CACAO Genoise fourre & enrobe saveur cacao 40 pieces par carton.png',
          title: 'Zwina Cacao',
          info: 'Genoise fourre & enrobe saveur cacao',
          price: 3.00
        },
        {
          url: 'static/images/gaufrette/Del CASTRO Cigare FOURRE SAVEUR CACAO 50 PIECES PAR TASSE.png',
          title: 'Del CASTRO Cigare',
          info: 'FOURRE SAVEUR CACAO',
          price: 3.00
        },
        {
          url: 'static/images/gaufrette/Mini Tomix Vanille Gaufrette fourree saveur vanille 100 pieces par carton.png',
          title: 'Mini Tomix Vanille',
          info: ' Gaufrette fourree saveur vanille',
          price: 3.00
        },
        {
          url: 'static/images/gaufrette/Tomix CACAO gaufrette fouree saveur cacao 88 pieces par carton.png',
          title: 'Tomix CACAO',
          info: ' gaufrette fouree saveur cacao',
          price: 3.00
        },
        {
          url: 'static/images/gaufrette/Tomix chocolat gaufrette fouree & enrobee saveur cacao 75 pieces par carton.png',
          title: 'Tomix chocolat ',
          info: ' gaufrette fouree & enrobee saveur cacao',
          price: 3.00
        },
        {
          url: 'static/images/milefeuille/Millefeuille 8 Unites.png',
          title: 'Millefeuille choco',
          info: 'Millefeuille 8 Unites',
          price: 30.00
        },
        {
          url: 'static/images/milefeuille/Millefeuille 16 Unites.png',
          title: 'Millefeuille',
          info: 'Millefeuille 16 Unites',
          price: 30.00
        },
        {
          url: 'static/images/milefeuille/Millefeuille 22 Unites.png',
          title: 'Millefeuille',
          info: 'Millefeuille 22 Unites',
          price: 30.00
        },
        {
          url: 'static/images/milefeuille/Millefeuille 30 Unites.png',
          title: 'Millefeuille',
          info: 'Millefeuille 22 Unites',
          price: 30.00
        },
        {
          url: 'static/images/keo/KEO 6 Choco 6BISCUITS SANDWICHS FOURRES ET ENROBES SAVEUR CACAO 30 PIECES PAR CARTON.png',
          title: 'KEO 6 Choco',
          info: 'SANDWICHS FOURRES ET ENROBES SAVEUR CACAO',
          price: 3.00
        },
        {
           url: 'static/images/keo/KEO 6 Cookies 6 BISCUITS AU PéPITES DE CHOCOLAT 60 PIECES PAR CARTON.png',
          title: 'KEO 6 Cookies',
          info: '6 BISCUITS AU PéPITES DE CHOCOLAT',
          price: 3.00
        },
        {
           url: 'static/images/keo/keo2.png',
          title: 'KEO 3 Negro',
          info: 'SANDWICHS AU CACAO FOURRES SAVEUR VANILLE',
          price: 3.00
        },
        {
           url: 'static/images/keo/bisk6.png',
          title: 'Mini Ralf CACAO 2',
          info: 'SANDWICHS FOURRES SAVEUR CACAO',
          price: 3.00
        },
        {
          url: 'static/images/keo/bisk5.png',
          title: 'Blaugrana Kids',
          info: '12 biscuits sec 42 PIECES PAR CARTON',
          price: 3.00
        }
      ],
      typeOfCake:  this.all,
      show : true
    }
  },
  methods: {
    getCategorie (type) {
      this.show = false
      if (type === 'domingo') {
        this.typeOfCake = this.domingo
        this.title = 'Notre collection Domingo et Twixi ...'
        this.show = !this.show
      }
      else if (type === 'mil') {
        this.typeOfCake = this.mil
        this.title = 'Notre collection de Milefeuille ...'
        this.show = !this.show
      }
      else if (type === 'keo'){
          this.typeOfCake = this.keo
          this.title = 'Notre collection KEO ...'
          this.show = !this.show
      }
      else if (type === 'gaufr'){
          this.typeOfCake = this.gaufr
          this.title = 'Notre collection Goufrette ...'
          this.show = !this.show

      }
      else if (type === 'genoise'){
          this.typeOfCake = this.genoise
          this.title = 'Notre collection Genoise ...'
          this.show = !this.show
      }
      else {
        this.typeOfCake = this.all
        // this.typeOfCake
        this.title = 'Notre collection Haninie ...'
        this.show = !this.show
      }
    }
  },
  components: {
    'card-cake': cardCake
  }
}
</script>

<style lang="scss">
.fade-enter-to, .fade-leave-active {
  transition: opacity 1s, transform 1s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: translateX(20px);
}
.jumbo {
    margin-top: -20px;
    height: 600px;
    background: linear-gradient( to bottom,rgba(0,0,0,.4),rgba(0,0,0,.9));
    background-repeat: no-repeat;
    background-position: center center;
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
.zigzag {
    margin: -15px 0px 10px -10px;
    border: 20px solid transparent;
    border-image:  url('../assets/zig-zag.svg') 196 repeat;
}
.cake-type {
  text-align: center;
  margin: 30px;
  img {
    height: 80px;
    cursor: pointer;
  }
}
</style>
