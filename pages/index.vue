<template>
  <v-app>
    <aside class="sidebar">
      <div class="sideContent1">
        <strong>logo goes here</strong>
      </div>
      <div class="sideContent2">
        <h2 class="bold"><nuxt-link to="/about">about</nuxt-link></h2>
      </div>
      <div class="sideContent3">
        <h2 class="bold">practise</h2>
      </div>
      <div class="sideContent4">
        <h2 class="bold">contact</h2>
      </div>
    </aside>
    <div class="hero">
      <div class="heroPic">
        <home image="/andre-benz-248744.jpg"/>
      </div>
    </div>

    <div class="article">
      <div class="articleText1">
        <p><span class="bold">Lorem ipsum dolor consectetur</span> adipisicing elit. Quis aut dolorum numquam,eius quam soluta ad ab explicabo totam ipsa ullam iure, doloribus amet laboriosam facilis ducimus quod? Nulla, porro.</p>
      </div>
      <div class="articleText2">
        <h1>What We Do.</h1>
      </div>
      <div class="cards">
        <div class="cardsPic1">
          <pic 
           url="/rob-potvin-15730.jpg"
           title="Tulip"
           post="Web Developer"
           description="Laboriosam, ex quam expedita totam qui impedit exercitationem magnam necessitatibus repudiandae nostrum? Sequi "/>
        </div>
        <div class="cardsPic2">
          <pic 
           url="/nathan-dumlao-264380.jpg"
           title="Tulip"
           post="Web Developer"
           description="Laboriosam, ex quam expedita totam qui impedit exercitationem magnam necessitatibus repudiandae nostrum? Sequi "/>
        </div>
        <div class="cardsPic3">
          <pic 
           url="/brandon-wong-255543.jpg"
           title="Tulip"
           post="Web Developer"
           description="Laboriosam, ex quam expedita totam qui impedit exercitationem magnam necessitatibus repudiandae nostrum? Sequi "/>
        </div>
        <div class="cardsPic4">
          <pic 
           url="/florian-wehde-411310.jpg"
           title="Tulip"
           post="Web Developer"
           description="Laboriosam, ex quam expedita totam qui impedit exercitationem magnam necessitatibus repudiandae nostrum? Sequi "/>
        </div>
        <div class="cardsPic5">
          <pic 
           url="/brandon-wong-255543.jpg"
           title="Tulip"
           post="Web Developer"
           description="Laboriosam, ex quam expedita totam qui impedit exercitationem magnam necessitatibus repudiandae nostrum? Sequi "/>
        </div>
        <div class="cardsPic6">
          <pic 
           url="/rob-potvin-15730.jpg"
           title="Tulip"
           post="Web Developer"
           description="Laboriosam, ex quam expedita totam qui impedit exercitationem magnam necessitatibus repudiandae nostrum? Sequi "/>
        </div>
      </div>
      <div class="articleText3">
        <h1>Clients Say.</h1>
      </div>
      <div class="card2">
        <div class="card2Pic1">
          <card
           image1="/danny-kekspro-341913.jpg"
           title="Jubilee Insurance"
           textPreview="One of the best law firm we had a pleasure to partner with! Carlos Otis MD. One of the best law firm we had a pleasure to partner with! Carlos Otis MD. One of the best law firm we had a pleasure to partner with!"/>
        </div>
        <div class="card2Pic2">
          <card
           image1="/brandon-wong-255543.jpg"
           title="Jubilee Insurance"
           textPreview="One of the best law firm we had a pleasure to partner with! Carlos Otis MD. One of the best law firm we had a pleasure to partner with! Carlos Otis MD. One of the best law firm we had a pleasure to partner with!"/>
        </div>
        <div class="card2Pic3">
          <card
           image1="/florian-wehde-411310.jpg"
           title="Jubilee Insurance"
           textPreview="One of the best law firm we had a pleasure to partner with! Carlos Otis MD. One of the best law firm we had a pleasure to partner with! Carlos Otis MD. One of the best law firm we had a pleasure to partner with!"/>
        </div>
      </div>
      <div class="summery">
        <div class="summeryText">
          <h1>What to Expect</h1>
        </div>
        <div class="summeryImage">
          <home
           image="/nathan-dumlao-264380.jpg"/>
        </div>
      </div>
      <div class="footer">
        <h1>the footer</h1>
      </div>
    </div>
  </v-app>
</template>

<script>
import Home from '@/components/Home'
import Card from '@/components/Card'
import Pic from '@/components/Pic'
export default {
  components: {
    Home,
    Card,
    Pic
  }
}
</script>


<style scoped>
.sidebar{
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(12, 1fr);
  grid-row-gap: 10px;
  background-color: #FAFAFA;
  width: 360px;
  height: 100%;
  position: fixed;
}
.sideContent1{
  grid-column: 2 / span 4;
  grid-row: 2 / span 3;
  background-color: aliceblue;
}
.sideContent2{
  grid-column: 3 / span 2;
  grid-row: 7 / span 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #50535E;
  background-color: #EDEAE3;
  background-image: url('/diagonal-lines.svg'); 
  background-repeat: repeat;
}
.sideContent3{
  grid-column: 3 / span 2;
  grid-row: 8 / span 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #50535E;
  background-color: #EDEAE3;
  background-image: url('/diagonal-lines.svg'); 
  background-repeat: repeat;
}
.sideContent4{
  grid-column: 3 / span 2;
  grid-row: 9 / span 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #50535E;
  background-color: #EDEAE3;
  background-image: url('/diagonal-lines.svg'); 
  background-repeat: repeat;
}
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
  color:  #50535E;
}
.bold{
  font-size: 45px;
  font-weight: 700;
  font-family: candal;
}
.articleText2{
  grid-column: 4 / span 5;
  grid-row: 7 / span 2;
  font-size: 35px;
  font-family: candal;
  font-weight: 700;
  color: #50535E;
}
.cards{
  grid-column: 7 / span 8;
  grid-row: 9 / span 10;
  border: 15px solid #4A5271;
  background-color: #50535E;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
  grid-gap: 4px;
}
.cardsPic1{
  grid-column: 1 / span 4;
  grid-row: 1 / span 6;
  background-color: #F1948F;
}
.cardsPic2{
  grid-column: 5 / span 4;
  grid-row: 1 / span 6;
  background-color: #50535E;
}
.cardsPic3{
  grid-column: 9 / span 4;
  grid-row: 1 / span 6;
  background-color: antiquewhite; 
}
.cardsPic4{
  grid-column: 1 / span 4;
  grid-row: 7 / span 6;
  background-color: beige;
}
.cardsPic5{
  grid-column: 5 / span 4;
  grid-row: 7 / span 6;
  background-color: #888760;
}
.cardsPic6{
  grid-column: 9 / span 4;
  grid-row: 7 / span 6;
  background-color: #8CACA1;
}
.articleText3{
  grid-column: 7 / span 6;
  grid-row: 22 / span 2;
  font-family: candal;
  font-weight: 700;
  font-size: 35px;
  text-align: right;
  color: #50535E;
}
.card2{
  grid-column: 4 / span 6;
  grid-row: 24 / span 8;
  border: 15px solid #4A5271;
  background-color: #50535E;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
  grid-gap: 4px;
  overflow: hidden;
}
.card2Pic1{
  grid-column: 1 / span 4;
  grid-row: 1 / span 12;
  background-color: #91949D;
}
.card2Pic2{
  grid-column: 5 / span 4;
  grid-row: 1 / span 12;
  background-color: #CCCBA3;
}
.card2Pic3{
  grid-column: 9 / span 4;
  grid-row: 1 / span 12;
  background-color: #8CACA1;
}
.summery{
  grid-column: 4 / span 9;
  grid-row: 35 / span 10;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
  background-color: #39465B;
}
.summeryText{
  grid-column: 1 / span 9;
  grid-row: 1 / span 2;
  font-family: candal;
  font-weight: 700;
  font-size: 35px;
  color: #EDEAE3;
}
.summeryImage{
  grid-column: 2 / span 12;
  grid-row: 3 / span 7; 
  margin-top: -15px;
}
.image{
  max-height: 100%;
  max-width: 100%;
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
