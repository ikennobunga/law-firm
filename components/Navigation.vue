<template>
  <aside class="sidebar">
      <div class="sideContent1">
        <img src="/alansari.svg" alt="">
      </div>
      <div class="sideContent1-5">
        <h2 class="bold"><nuxt-link to="/">home</nuxt-link></h2>
      </div>
      <div class="sideContent2">
        <h2 class="bold"><nuxt-link to="/about">about</nuxt-link></h2>
      </div>
      <div class="sideContent3">
        <h2 class="bold"><nuxt-link to="/practise">practise</nuxt-link></h2>
      </div>
      <div class="sideContent4">
        <h2 class="bold"><nuxt-link to="/team">team</nuxt-link></h2>
      </div>
    </aside>
</template>

<style scoped>
a{
  text-decoration: none;
  color: #212D3B;
  font-size: 30px;
}
.sidebar{
  animation: yourAnimation 1.7s forwards 0s linear;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(12, 1fr);
  grid-row-gap: 10px;
  background-color: #FAFAFA;
  font-family: 'montserrat', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  width: 360px;
  height: 100%;
  position: fixed;
  z-index: 1;
}
@keyframes yourAnimation{
    0%{
        transform: translateY(50px);
        opacity: 0;
        }
    30%{
        transform: rotate(xx) scale(0.5) translateY(50px);
        opacity: 0.3;
        color: #D9CCA1;
        }
    60%{
        transform: rotate(xx) translateY(50px);
        opacity: 0.6;
        color: #B09862;
        }
    100%{
        transform: rotate(0) translateY(0px);
        opacity: 1;
        color: #333333;
        }
}
.sideContent1-5{
  grid-column: 3 / span 2;
  grid-row: 6 / span 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #212D3B;
  /*background-image: url('/diagonal-lines.svg');
  background-repeat: repeat;*/
}
.sideContent1{
  grid-column: 2 / span 4;
  grid-row: 2 / span 3;
/*background-color: aliceblue;*/
}
.sideContent2{
  grid-column: 3 / span 2;
  grid-row: 7 / span 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #212D3B;
  /*background-image: url('/diagonal-lines.svg');*/ 
  background-repeat: repeat;
}
.sideContent3{
  grid-column: 3 / span 2;
  grid-row: 8 / span 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #212D3B;
  /*background-image: url('/diagonal-lines.svg');*/ 
  background-repeat: repeat;
}
.sideContent4{
  grid-column: 3 / span 2;
  grid-row: 9 / span 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #212D3B;
  /*background-image: url('/diagonal-lines.svg'); */
  /*background-repeat: repeat;*/
}
</style>
