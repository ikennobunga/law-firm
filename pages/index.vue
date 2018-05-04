<template>
  <v-app>
    <div class="hero">
      <div class="heroImg">
        <home
          image="https://images.unsplash.com/photo-1515467068080-b58fdd1a9a66?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f2424faf1c14633e209d99d8a631c992&auto=format&fit=crop&w=900&q=60"
          />
      </div>
    </div>
    <div class="sidebar">
        <h1>side nav</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, ex quam expedita totam qui impedit exercitationem magnam necessitatibus repudiandae nostrum? Sequi voluptate mollitia dicta ipsum doloremque in laboriosam sed. Quaerat.</p>
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
          
        </div>
        <div class="cardsPic3">
          
        </div>
        <div class="cardsPic4">
          
        </div>
        <div class="cardsPic5">
          
        </div>
        <div class="cardsPic6">
          
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
.hero{
  display: grid;
  grid-template-columns: 25vw auto;
  background-color: bisque;
  height: 800px;
}
.sidebar{
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(12, 1fr);
  position: fixed;
  width: 25vw;
  background-color: #FAFAFA;
  height: auto;
}
.heroImg{
  grid-column-start: 2;
}
.image{
  background-size: cover;
  height: 784px;
}
/*----------ARTICLE----------*/
.article{
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(54, 1fr);
  height: 3800px;
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
  background-color: #E9DAB9;
}
.summeryText{
  grid-column: 1 / span 9;
  grid-row: 1 / span 2;
  font-family: candal;
  font-weight: 700;
  font-size: 35px;
  color: #50535E;
}
.summeryImage{
  grid-column: 2 / span 12;
  grid-row: 3 / span 7; 
  background-color: #F1948F;
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
