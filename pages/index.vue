<template>
  <v-app>
    
    <div class="hero">
      <div class="heroPic">
        <home image="/anders-jilden-239-unsplash.jpg"/>
      </div>
    </div>

    <div class="article">
      <div class="articleText1">
        <p><span class="bold">What We Do.</span> </p>
        <p>adipisicing elit. Quis aut dolorum numquam,eius quam soluta ad ab explicabo totam ipsa ullam iure, doloribus amet laboriosam facilis ducimus quod? Nulla, porro.</p>
      </div>

      <div class="article-img">
        <img src="/rick-tap-110126.jpg" style="width:100%; height:100%;">
      </div>
      <div class="article-text">
        <h1>Corporate & Commercial</h1>
        <div id="line"></div>
        <p class="article-paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dolorem at aliquam ut magnam veritatis? Enim deleniti, ipsum dolorem culpa impedit blanditiis obcaecati exercitationem adipisci eveniet animi nisi neque earum!
        </p>
      </div>

      <div class="article-img2">
        <img src="/matt-artz-333274.jpg" style="width:100%; height:100%" alt="">
      </div>
      <div class="article-text2">
        <h1>Regulatory & Complience</h1>
        <div id="line"></div>
        <p class="article-paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi illo expedita officia cum rem debitis saepe doloremque inventore, amet nemo dignissimos quas facere nostrum facilis aut libero suscipit deleniti necessitatibus?
        </p>
      </div>
      
      <div class="footer">
        <h1>the footer</h1>
      </div>
    </div>
    
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
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
  /*background-color: #91949D;*/
  width: 100%;
  height: 840px;
  position: absolute;
  margin-left: 360px;
  margin-top: -16px;
}
.heroPic{
  grid-column: 1 / span 9;
  grid-row: 1 / span 12;
}
.image{
  height: 100%;
  width: 100%;
  background-size: cover;
}
/*----------ARTICLE----------*/
.article{
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(54, 1fr);
  height: 3800px;
  margin-top: 800px;
  background-color: #FFFFFF;
}
.articleText1{
  grid-column: 5 / span 7;
  grid-row: 3 / span 2;
  text-align: center;
  font-size: 18px;
  color:  #333333;
}
.bold{
  font-size: 45px;
  font-weight: 700;
  font-family: Montserrat;
}
.article-img{
  grid-column: 8 / span 5;
  grid-row: 7 / span 7;
  font-family: Montserrat;
  font-weight: 700;
  color: #333333;
  background-color: #BD9E94;
}
.article-text{
  grid-column: 4 / span 4;
  grid-row: 7 / span 7;
  display: flex;
  padding-top: 40px;
  justify-content: center;
  /*font-family: Montserrat;*/
  font-size: 15px;
  position: relative;
  /*border: 1px solid black;*/
}
#line{
  width: 20%;
  height: 2px;
  background-color: #333333;
  position: absolute;
  margin-top: 60px;
  margin-right: 50%;
}
.article-paragraph{
  position: absolute;
  margin-top: 100px;
  padding: 0 70px;
  font-size: 20px
}
.article-img2{
  grid-column: 8 / span 5;
  grid-row: 15 / span 7;
  background-color: #BD9E94;
}
.article-text2{
  grid-column: 4 / span 4;
  grid-row: 15 / span 7;
  display: flex;
  justify-content: center;
  padding-top: 40px;
  font-size: 14px;
  position: relative;
}
/*----------FOOTER----------*/
.footer{
  grid-column: 4 / span 9;
  grid-row: 47 / span 8;
  background-image: url("https://images.unsplash.com/photo-1524671807765-9614d7622fea?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3257d8872c89efc8503e971900467d3d&auto=format&fit=crop&w=900&q=60");
  background-attachment: fixed;
  background-color: aquamarine;
  background-size: contain;
}
</style>
