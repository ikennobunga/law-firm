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
      <div class="founder-card-1 elevation-0">
        <div class="card-1-content">
          <h2>SHAWN KEMP WHITEKER</h2>
          <P>MANAGING DIRECTOR</P>
          <p>shawnkemp@gmail.com</p>
          <p>+974 444 333 222</p>
          <p>fb twitter linked-in </p>
        </div>
        <div class="card-1-img elevation-4"></div>
      </div>
      <div class="founder-card-2 elevation-0">
        <div class="card-2-content">
          <h2>CARL WINSLOW CHESTAR</h2>
          <P>MANAGING DIRECTOR</P>
          <p>carlwinslow@gmail.com</p>
          <p>+974 444 333 222</p>
          <p>fb twitter linked-in </p>
        </div>
        <div class="card-2-img elevation-4"></div>
      </div>
    </div>

    <!--our-values-->
    <div class="our-values">
      <div class="our-value-header">
        <h1>OUR VALUES</h1>
      </div>
      <div class="our-value-content">
        <div class="leagle-practice">
          <h2>LEAGAL PRACTICE</h2>
          <P class="content-para-1">
            Our practice is underpinned by a deep understanding of local laws and of the sectors in which our clients operate. We provide expert counsel and innovative solutions to complex issues.
          </P>
        </div>
        <div class="client-focus">
          <h2>CLIENT FOCUS</h2>
          <P class="content-para-2">
            We pride ourselves on providing efficient, responsive and courteous service. We add value for our clients by providing training and information to support their business in the region.
          </P>
        </div>
        <div class="higest-levels">
          <h2>HIGEST LEVELS</h2>
          <p class="content-para-3">
            We are proud to offer legal services and expertise with international standards. Our core strength is the diversity and experience of our legal professionals with commitment to the highest standards.
          </p>
        </div>
      </div>
    </div>

    <!--facts & figures-->
    <div class="facts-figures">
      <div class="facts-figures-heading">
        <h1>FACTS & FIGURES</h1>
      </div>
      <div class="facts-figures-content">
        <v-carousel hide-delimiters  class="caroitem">
          <v-carousel-item
            v-for="(item, i) in items"
            :key="i"
            :src="item.src">
            <div class="carousel-title">
              {{ item.title }}
            </div>
          </v-carousel-item>
        </v-carousel>
        <div class="facts-figures-heading-2">
          <p>18K TOTOAL PRO BONO HOURS</p>
        </div>
      </div>
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
      items: [
        { src: '', title: '4K PRO BONO FOR INDIVIDUALS' },
        { src: '', title: '4K PRO BONO FOR CORPORATE' },
        { src: '', title: '5K PRO BONO FOR SMES' },
        { src: '', title: '3K PRO BONO FOR WOMEN' },
        { src: '', title: '2K PRO BONO FOR LEAGAL EDUCATION' }
      ]
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
  border: 1px solid black;
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
  border: 1px solid black;
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
/*----------OUR VALUES----------*/
.our-values{
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
  width: 100%;
  height: 100vh;
}
.content-para-1{
  margin-top: 160px;
  font-size: 1.1rem;
  letter-spacing: 0.4rem;
}
.content-para-2{
  margin-top: 100px;
  font-size: 1.1rem;
  letter-spacing: 0.4rem;
}
.content-para-3{
  margin-top: 150px;
  font-size: 1.1rem;
  letter-spacing: 0.4rem;
}
.our-value-header{
  grid-column: 5 / span 2;
  grid-row: 1 / span 1;
  display: flex;
  align-items: center;
  /*border: 1px solid black;*/
}
.our-value-content{
  grid-column: 4 / span 9;
  grid-row: 2 / span 11;
  color: #FDF3E7;
  font-family: 'montserrat', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  display: flex;
  padding: 0 80px 0 80px;
  background-color: black;
}
.leagle-practice{
  width: 100%;
  height: 100%;
  padding: 50px 60px 0 0;
  border: 0.01rem solid rgba(253, 243, 231, 0.123);
}
.client-focus{
  width: 100%;
  height: 100%;
  padding: 50px 60px 0 0;
  border: 0.01rem solid rgba(253, 243, 231, 0.123);
}
.higest-levels{
  width: 100%;
  height: 100%;
  padding: 50px 60px 0 0;
  border: 0.01rem solid rgba(253, 243, 231, 0.123);
}
/*----------FACTS & FIGURES----------*/
.facts-figures{
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
  width: 100%;
  height: 100vh;
}
.facts-figures-heading{
  grid-column: 5 / span 2;
  grid-row: 2 / span 1;
  color: #212D3B;
  /*border: 1px solid black;*/
  display: flex;
  align-items: center;
}
.facts-figures-content{
  grid-column: 4 / span 9;
  grid-row: 3 / span 6;
  /*border: 1px solid black;*/
}
.carousel{
  box-shadow: none;
}
.carousel-title{
  font-size: 2.5rem;
  font-weight: 700;
  font-family: 'montserrat', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  color: #212D3B;
  position: absolute;
  margin-left: 22%;
  margin-top: 20%;
}
.theme--dark .btn, .application .theme--dark.btn{
  color: black;
}
.jumbotron{
  width: 1000px;
}
.facts-figures-heading-2{
 margin-left: 12%; 
 font-size: 1.3rem;
 color: #212D3B;
}
</style>

