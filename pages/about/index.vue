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
      
    </div>

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
</style>

