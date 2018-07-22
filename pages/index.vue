<template>
  <v-app>
    
    <div class="hero">
      <div class="heroPic"></div>
    </div>
    <!--ARTICLE-->
    <section class="article">
      <div class="article-content-heading">
        <div><h1>-WHO WE ARE</h1><div class="circle"><h1>1</h1></div></div>
        <div><h1>-WHAT WE DO</h1><div class="circle"><h1>2</h1></div></div>
        <div><h1>-WHAT TO EXPECT</h1><div class="circle"><h1>3</h1></div></div>
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
      <div class="article-content-heading-2">
        <h1>Corporate & Commercial</h1>
        <div class="line"></div>
      </div>
      <div class="article-content-2">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit magnam et praesentium dolore nobis tempore itaque, similique doloremque repellendus ut neque eligendi laboriosam officiis architecto culpa nemo velit! Perspiciatis, dolore.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit magnam et praesentium dolore nobis tempore itaque, similique doloremque repellendus ut neque eligendi laboriosam officiis architecto culpa nemo velit! Perspiciatis, dolore.          
        </p>
      </div>
      <div class="article-2-img"></div>
    </section>

    <section class="article3">
      <div class="article-content-heading-3">
        <h1>Regulatory & Complience</h1>
        <div class="line"></div>
      </div>
      <div class="article-content-3">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus maiores minus voluptates molestias ratione nulla, quasi sequi at hic optio recusandae beatae officia iste earum magni alias labore, veniam laudantium!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, temporibus. Rem, magnam dolore! Dolores iure a velit aut eaque molestias eligendi id, vitae distinctio ipsa fugiat earum laborum incidunt accusamus.
        </p>
      </div>
      <div class="article-3-img"></div>
    </section>
    <section class="article4">
      <div class="article-content-heading-4">
        <h1>WHAT TO EXPECT</h1>
      </div>
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
  background-color: #FFFFFF;
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
.article, .article2, .article3, .article4, .article5{
  position: sticky;
  top: 0;
}
.article2, .article3, .article4, .article5{
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat( 12, 1fr);
  height: 100vh;
  background-color: #FFFFFF;
  margin-left: 360px;
}
.article-content-heading-2, .article-content-heading-3, .article-content-heading-4, .article-content-heading-5{
  grid-column: 1 / span 5;
  grid-row: 1 / span 2;
  /*border: 1px solid black;*/
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 18px; 
  font-weight: 100px;
  font-family: montserrat;
  position: relative;
  padding-left: 10px;
}
.article-content-2, .article-content-3, .article-content-4, .article-content-5 {
  grid-column: 6 / span 6;
  grid-row: 2 / span 4;
  /*border: 1px solid black;*/
  font-family: montserrat;
  font-size: 18px;
  font-weight: 100px;
}
.line{
  height: 2px;
  width: 10%;
  background-color: black;
  position: absolute;
  margin-top: 30px;
  margin-left: 14px;
}
.circle{
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #FFFFFF;
  background-color: black;
  border: 1px solid black;
  position: absolute;
  margin-left: -30px;
  margin-top: -30px;
}
/*----------ARTICLE1----------*/
.article{
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat( 12, 1fr);
  height: 100vh;
  margin-left: 360px;
  background-color: #FFFFFF;
}
.article-content-heading{
  grid-column: 1 / span 12;
  grid-row: 1 / span 2;
  /*border: 1px solid black;*/
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 16px; 
  font-weight: 100px;
  font-family: montserrat;
  position: relative;
  padding-left: 40px;
}
.article-text{
  grid-column: 1 / span 12;
  grid-row: 3 / span 9;
  /*border: 1px solid black;*/
  font-family: montserrat;
  font-weight: 700; 
  font-size: 35px;
  line-height: 50px;
  background-color: rgba(204, 204, 204, 0.116);
}
/*----------ARTICLE2----------*/
.article-2-img{
  grid-column: 1 / span 12;
  grid-row: 6 / span 6;
  background-image: url('/rick-tap-110126.jpg');
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  /*border: 1px solid black;*/
  background-size: cover;
  background-position: center;
}
/*----------ARTICLE3----------*/
.article-3-img{
  grid-column: 1 / span 12;
  grid-row: 6 / span 6;
  background-image: url('/matt-artz-333274.jpg');
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
}

/*----------ARTICLE4----------*/
</style>
