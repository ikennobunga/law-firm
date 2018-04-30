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
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis aut dolorum numquam, eius quam soluta ad ab explicabo totam ipsa ullam iure, doloribus amet laboriosam facilis ducimus quod? Nulla, porro.</p>
      </div>
      <div class="articleText2">
        <h1>What We Do.</h1>
      </div>
      <div class="cards">

      </div>
      <div class="articleText3">
        <h1>Clients Say.</h1>
      </div>
      <div class="card2">

      </div>
      <div class="summery">
        <div class="summeryText">
          <h1>What to Expect</h1>
        </div>
        <div class="summeryImage">

        </div>
      </div>
      <div class="footer">
        <h1>footer</h1>
      </div>
    </div>
  </v-app>
</template>

<script>
import Home from '@/components/Home'
export default {
  components: {
    Home
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
  height: 3500px;
  background-color: #FFFFFF;
}
.articleText1{
  grid-column: 6 / span 5;
  grid-row: 3 / span 2;
  background-color: aquamarine;
  text-align: center;
}
.articleText2{
  grid-column: 4 / span 5;
  grid-row: 7 / span 2;
  background-color: #F1948F;
}
.cards{
  grid-column: 7 / span 8;
  grid-row: 9 / span 10;
  border: 15px solid #4A5271;
}
.articleText3{
  grid-column: 8 / span 4;
  grid-row: 22 / span 2;
  background-color: #39465B;
}
.card2{
  grid-column: 4 / span 6;
  grid-row: 24 / span 8;
  border: 15px solid #4A5271;
}
.summery{
  grid-column: 4 / span 9;
  grid-row: 35 / span 10;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
  background-color: #907F78;
}
.summeryText{
  grid-column: 1 / span 9;
  grid-row: 1 / span 3;
  background-color: #4A5271;
}
.summeryImage{
  grid-column: 2 / span 12;
  grid-row: 4 / span 7; 
  background-color: #F1948F;
}
/*----------FOOTER----------*/
.footer{
  grid-column: 4 / span 9;
  grid-row: 47 / span 8;
  background-color: aquamarine;
}
</style>


