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
        <h1>Financial Crime</h1>
        <div class="line"></div>
      </div>
      <div class="article-content-4">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam porro a aliquam cupiditate enim saepe natus in repellendus illum magni quasi veritatis dolorum obcaecati, esse sit, velit placeat optio repellat.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium suscipit at, odit magni adipisci vel numquam. Molestias praesentium velit nulla! Voluptatum, dicta tenetur ut illo in commodi aperiam? Repudiandae, perferendis.
        </p>
      </div>
      <div class="article-4-img"></div>
    </section>

    <section class="article5">
      <div class="article-content-heading-5">
        <h1>Mergers & Aquisitions</h1>
        <div class="line"></div>
      </div>
      <div class="article-content-5">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam quisquam tempore itaque numquam aliquam dolores ex, architecto repudiandae quod quos aliquid, in reprehenderit quia minus dolor dolorem nemo illo temporibus!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor laudantium debitis, recusandae doloremque ipsa, repellendus animi aperiam eveniet, reprehenderit unde harum! Neque ipsam modi eius commodi, quo earum aut blanditiis?
        </p>
      </div>
      <div class="article-5-img"></div>
    </section>

    <section class="article6">
      <div class="article-content-heading-6">
        <h1>Litigation & Dispiute Resolution</h1>
      </div>
      <div class="article-content-6">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quibusdam officiis sint quidem rem ab nobis, voluptates ullam rerum ex modi laborum voluptate aliquid incidunt eum eius, nostrum, impedit voluptatem.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus adipisci modi, soluta possimus error amet fugiat expedita maiores unde velit, ipsam esse illo nulla dicta consectetur necessitatibus rerum animi! Tempora.
        </p>
      </div>
      <div class="article-6-img"></div>
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
.article, 
.article2, 
.article3, 
.article4, 
.article5,
.article6,
.article7,
.article8,
.article9,
.article10{
  position: sticky;
  top: 0;
}
.article2, 
.article3, 
.article4, 
.article5,
.article6,
.article7,
.article8,
.article9,
.article10{
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat( 12, 1fr);
  height: 100vh;
  background-color: #FFFFFF;
  margin-left: 360px;
}
.article-content-heading-2, 
.article-content-heading-3, 
.article-content-heading-4, 
.article-content-heading-5,
.article-content-heading-6,
.article-content-heading-7,
.article-content-heading-8,
.article-content-heading-9,
.article-content-heading-10{
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
.article-content-2, 
.article-content-3, 
.article-content-4, 
.article-content-5,
.article-content-6,
.article-content-7,
.article-content-8,
.article-content-9,
.article-content-10{
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
.article-4-img{
  grid-column: 1 / span 12;
  grid-row: 6 / span 6;
  background-image: url('/coins-1523383_1920.jpg');
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center; 
}
/*----------ARTICLE5----------*/
.article-5-img{
  grid-column: 1 / span 12;
  grid-row: 6 / span 6;
  background-image: url('/pacific-austin-106854.jpg');
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: bottom;
}
/*----------ARTICLE6----------*/
.article-6-img{
  grid-column: 1 / span 12;
  grid-row: 6 / span 6;
  background-image: url('/agreement-2679506_1920.jpg');
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
}
/*----------ARTICLE7----------*/
.article-7-img{
  grid-column: 1 / span 12;
  grid-row: 6 / span 6;
  background-image: url('');
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
}
/*----------ARTICLE8----------*/
.article-8-img{
  grid-column: 1 / span 12;
  grid-row: 6 / span 6;
  background-image: url('');
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
}
/*----------ARTICLE9----------*/
.article-9-img{
  grid-column: 1 / span 12;
  grid-row: 6 / span 6;
  background-image: url('');
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
}
/*----------ARTICLE10----------*/
.article-9-img{
  grid-column: 1 / span 12;
  grid-row: 6 / span 6;
  background-image: url('');
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
}
</style>
