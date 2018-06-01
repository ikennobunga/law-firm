<template>
  <v-app>
    <div class="hero">
      <div class="hero-pic elevation-10">
        <home image="/people-2941951_1920.jpg"/>
      </div>
      <div class="hero-test1">
        <h1>about</h1>
      </div>
      <div class="hero-test2">
        <h1>us</h1>
      </div>
    </div>

    <div class="founders">
      <div class="founders-quote">
        <p class="bold">"Don't wish it was easier, wish you were better.
           Don't wish for less problems, wish for more skills.
           Don't wish for less challenge,wish for more wisdom." - <span class="quote">Jim Ron</span>
        </p> 
      </div>
      <div class="founders-header">
        <h1>founders</h1>
       <div class="line">
       </div>
      </div>

      <div class="founder-card">
        <div class="founder1">
        </div>
        <div class="founder1-pic">
        </div>

        <div class="founder2">
        </div>
        <div class="founder2-pic">
        </div>
      </div>

      <div class="ourvalues-header">
        <h1>our values</h1>
      </div>
      <div class="ourvalue-card1">
      </div>
      <div class="ourvalue-background1"></div>
      <div class="ourvalue-card2">
      </div>
      <div class="ourvalue-background2"></div>
      <div class="ourvalue-card3">
      </div>
      <div class="ourvalue-background3"></div>

      <div class="achievenents">
        <h1>achievements</h1>
      </div>
     
    </div>
  </v-app>
</template>

<script>
import Home from '@/components/Home'
export default {
  components: {
    Home
  },
  data () {
    return {
    }
  },
  methods: {
  },
  computed: {
  }
}
</script>

<style scoped>
.hero{
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
  background-color: #FFFFFF;
  color: #50535E;
  width: 100%;
  height: 840px;
  margin-left: 360px;
}
.hero-pic{
  grid-column: 2 / 7;
  grid-row: 2 / 12;
  border-radius: 8px; 
}
.image{
  height: 100%;
  width: 100%;
  background-size: cover;
  margin-top: -16px;
  border-radius: 8px; 
}
.hero-test1{
  grid-column: 7 / 10;
  grid-row: 2 / 4;
  font-family: montserrat;
  font-size: 45px;
  font-weight: bold;
  letter-spacing: 4px;
  text-shadow: 1px 1px 1px;
  margin-left: 10px;
}
.hero-test2{

  grid-column: 7 / 10;
  grid-row: 4 / 6;
  font-size: 45px;
  font-weight: bold;
  letter-spacing: 6px;
  text-shadow: 1px 1px 1px;
  margin-left: 10px
}
/*----------ARTICLE----------*/
.founders{
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(200, 1fr);
  background-color: #FFFFFF;
  width: 100%;
  height: 1100vh;
  margin-left: 360px;
  font-family: montserrat;
}
.founders-quote{
  grid-column: 1 / 9;
  grid-row: 2 / 12;
}
.bold{
  font-size: 50px;
  text-align: left;
  padding-left: 20px;
  color: #4E4637;
}
.founders-header{
  grid-column: 2 / 6;
  grid-row: 13 / span 2;
  background-color: #50535E;
  font-size: 40px;
  letter-spacing: 4px;
  -webkit-text-stroke-width: 0px;
  background-image: url('/nathan-dumlao-264380.jpg');
  background-repeat: no-repeat;
  display: inline;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  background-size: cover;
  /*color: transparent;*/
}
.founder-card{
  grid-column: 2 / 9;
  grid-row: 16 / 48;
  /*background-color: bisque;*/
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(30, 1fr);
}
.founder1{
  grid-column: 2 / 7;
  grid-row: 2 / 8;
  background-color: rgba(217, 204, 161, 0.301);
}
.founder1-pic{
  grid-column: 7 / 12;
  grid-row: 2 / 13;
  background-color: #50535E;
}
.founder2{
  grid-column: 7 / 12;
  grid-row: 16 / 22;
  background-color: rgba(217, 204, 161, 0.301);
}
.founder2-pic{
  grid-column: 2 / 7;
  grid-row: 16 / 27;
  background-color: #50535E;
}
.ourvalues-header{
  grid-column: 2 / 6;
  grid-row: 45 / 49;
  font-size: 40px;
  letter-spacing: 4px;
  background-image: url('/danny-kekspro-341913.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  display: inline;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-stroke-width: 0px;
  background-color: burlywood;
}
.ourvalue-card1{
  grid-column: 3 / 7;
  grid-row: 49 / 63;
  margin-left: 50px;
  margin-bottom: 43px;
  z-index: 999;
  background-color: teal;
}
.ourvalue-background1{
  grid-column: 3 / 6;
  grid-row: 49 / 63;
  margin-top: 44px;
  background-color: rgba(112, 128, 144, 0.404);
}
.ourvalue-card2{
  grid-column: 3 / 7;
  grid-row: 66 / 80;
  margin-left: 50px;
  margin-bottom: 43px;
  z-index: 999;
  background-color: teal; 
}
.ourvalue-background2{
  grid-column: 3 / 6;
  grid-row: 66 / 80;
  margin-top: 44px;
  background-color: slategray;
}
.ourvalue-card3{
  grid-column: 3 / 7;
  grid-row: 83 / 97;
  z-index: 999;
  margin-left: 50px;
  margin-bottom: 43px;
  background-color: teal;
}
.ourvalue-background3{
  grid-column: 3 / 6;
  grid-row: 83 / 97;
  margin-top: 44px;
  background-color: slategray;
}
.achievenents{
  grid-column: 2 / 9;
  grid-row: 100 / 104;
  font-size: 50px;
  letter-spacing: 4px;
  padding-left: 50px;
  margin-left: 60px;
  background-image: url('/rob-potvin-15730.jpg'); 
  background-repeat: no-repeat;
  background-size: cover;
  display: inline;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  background-color: #50535E;
}
.achievements-galary{
  grid-column: 2 / 9;
  grid-row: 105 / 113;
  background-color: #50535E;
}
</style>

