<template>
  <v-app>
    
    <div class="hero">
      <div class="heroPic"><h1>the pic</h1></div>
    </div>
    <!--ARTICLE-->
    <section class="article">
      <h1>WHO WE ARE</h1>
    </section>
    <section class="article2">
      <h1>WHAT WE DO</h1>
    </section>
    <section class="article3">
      <h1>WHAT OUR CLIENTS SAY</h1>
    </section>
    
  </v-app>
</template>

<script>
import { TweenMax, Sine } from 'gsap'
// import { scroll } from '../assets/script/scroll'
import Home from '@/components/Home'
import Card from '@/components/Card'
import Pic from '@/components/Pic'
export default {
  components: {
    Home,
    Card,
    Pic
    // scroll,
    // Sine
  },
  data () {
    return {
    }
  },
  methods: {
    scroller: function (evt, el) {
      if (window.scrollY > 50) {
        TweenMax.to(el, 2, {
          y: -50,
          opacity: 1,
          ease: Sine.easeout
        })
      }
      return window.scrollY > 100
    }
  }
}
</script>

<style scoped>
.hero{
  background-color: #91949D;
  width: 100%;
  height: 100vh;
  position: relative;
  margin-left: 360px;
  margin-top: -16px;
}
.heroPic{
  background-image: url('/anders-jilden-239-unsplash.jpg');
  background-repeat: no-repeat;
  background-size: contain;
  width: 100%;
  height: 100%;
  
}
/*----------ARTICLE----------*/
.article, .article2, .article3{
  position: sticky;
  top: 0;
}
.article{
  display: grid;
  grid-template-columns: repeat();
  grid-template-rows: repeat();
  height: 100vh;
  margin-left: 360px;
  background-color: grey;
}
.article2{
  height: 100vh;
  background-color: aquamarine;
  margin-left: 360px;
}
.article3{
  height: 100vh;
  background-color: beige;
  margin-left: 360px;
}
</style>
