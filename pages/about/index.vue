<template>
  <v-app>
    <div class="hero">
      <div class="about-block">
        <h1>ABOUT</h1>
        <p class="block">Al-Ansari & Associates</p>
      </div>
      <div class="about-hero-text">
        <p class="block-2">
          We are proud of the depth and range of our legal services which includes assisting our clients with regulatory and compliance issues and investigations related to financial crimes. Our team can assist you with issues such as understanding local anti-money laundering laws and investigations.
          We are proud of the depth and range of our legal services which includes assisting our clients with regulatory and compliance issues and investiga.
        </p>
      </div>
      <div class="hero-img"></div>
    </div>
    <!--founders-->
    <div class="founders">
      <div class="founders-heading">
        <h1>FOUNDERS</h1>
      </div>
      <div class="founder-card-1 elevation-2">
        <div class="card-1-content">
          <h2>SHAWN KEMP WHITEKER</h2>
          <P>MANAGING DIRECTOR</P>
          <p>shawnkemp@gmail.com</p>
          <p>+974 444 333 222</p>
          <p>fb twitter linked-in </p>
        </div>
        <div class="card-1-img"></div>
      </div>
      <div class="founder-card-2 elevation-2">
        <div class="card-2-content">
          <h2>CARL WINSLOW CHESTAR</h2>
          <P>MANAGING DIRECTOR</P>
          <p>carlwinslow@gmail.com</p>
          <p>+974 444 333 222</p>
          <p>fb twitter linked-in </p>
        </div>
        <div class="card-2-img"></div>
      </div>
    </div>
    <!--founders-->
    
  </v-app>
</template>

<script>
import Home from '@/components/Home'
import Card3 from '@/components/Card3'
export default {
  components: {
    Home,
    Card3
  },
  data () {
    return {
      dialog: false
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
  width: 100%;
  height: 100vh;
}
.about-block{
  grid-column: 4 / span 9;
  grid-row: 1 / span 4;
  font-family: 'montserrat', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  color: #FDF3E7;
  font-size: 2rem;
  border: 1px solid black;
  background-color: black;
  padding: 20px 0 0 20px;
  position: relative;
}
.block{
  font-size: 1.6rem;
  letter-spacing: 0.5rem;
}
.hero-img{
  grid-column: 5 / span 8;
  grid-row: 3 / span 6;
  /*border: 1px solid black;*/
  background-image: url('/andreas-klassen-401337-unsplash.jpg');
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  z-index: 999;
  transition-duration: 1s;
}
.hero-img:hover{
  transform: scaleX(1.1);
}
.about-hero-text{
  grid-column: 5 / span 7;
  grid-row: 10 / span 2;
  /*border: 1px solid black;*/
}
.block-2{
  font-family: 'montserrat', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: 1.4rem;
  color: #212D3B;
}
/*----------FOUNDERS----------*/
.founders{
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
  width: 100%;
  height: 100vh;
}
.founders-heading{
  grid-column: 5 / span 3;
  grid-row: 2 / span 1;
  font-family: 'montserrat', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: 1.1rem; 
  font-weight: 100px;
  display: flex;
  align-items: center;
  /*border: 1px solid black;*/
}
.founder-card-1{
  grid-column: 5 / span 7;
  grid-row: 3 / span 4;
  display: flex;
  padding: 40px 0 0 10px;
  /*border: 1px solid black;*/
}
.card-1-content{
  width: 80%;
  height: 100%;
  font-family: 'montserrat', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
.card-1-img{
  background-color: aquamarine;
  background-image: url('/salman-2.jpg');
  background-size: 100%;
  background-position: 30% 30%;
  width: 100%;
  height: 100%;
}
.founder-card-2{
  grid-column: 5 / span 7;
  grid-row: 8 / span 4;
  display: flex;
  padding: 40px 0 0 10px;
  /*border: 1px solid black;*/
}
.card-2-content{
  width: 80%;
  height: 100%;
  font-family: 'montserrat', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
.card-2-img{
  background-image: url('/buahmed-min.jpg');
  background-size: 100%;
  background-position: 20% 20%;
  width: 100%;
  height: 100%;
}
</style>

