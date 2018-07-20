<template>
  <v-app>
    
    <div class="hero">
      <div class="heroPic"><h1>the pic</h1></div>
    </div>
    <!--ARTICLE-->
    <section class="article">
      <div class="article-content">
        <h1>WHO WE ARE</h1>
      </div>
      <div class="article-text">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae laborum minima ratione expedita quos nemo dignissimos, eligendi dolor quidem sed deleniti ea nobis dolores qui incidunt! Quia recusandae voluptas incidunt.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime nisi, mollitia eaque quod necessitatibus optio eveniet aut, esse magni voluptas maiores veritatis alias odit voluptates consectetur deleniti? Dolore, quasi rerum?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis minus necessitatibus veritatis sequi quam delectus optio non inventore blanditiis officiis, voluptatem, aliquam et unde rerum ratione atque? Beatae, ex voluptas.
        </p>
      </div>
    </section>
    <section class="article2">
      <h1>WHAT WE DO</h1>
    </section>
    <section class="article3">
      <h1>WHAT OUR CLIENTS SAY</h1>
    </section>
    <section class="article4">
      <h1>WHAT TO EXPECT</h1>
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
.article, .article2, .article3, .article4{
  position: sticky;
  top: 0;
}
.article{
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat( 12, 1fr);
  height: 100vh;
  margin-left: 360px;
  background-color: #FFFFFF;
}
.article-content{
  grid-column: 2 / span 4;
  grid-row: 2 / span 1;
  /*border: 1px solid black;*/
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px; 
  font-weight: 100px;
  font-family: montserrat;
}
.article-text{
  grid-column: 1 / span 12;
  grid-row: 3 / span 9;
  /*border: 1px solid black;*/
  font-family: montserrat;
  font-weight: 100; 
  font-size: 35px;
  line-height: 50px;
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
.article4{
  height: 100vh;
  background-color: cadetblue;
  margin-left: 360px;
}
</style>
