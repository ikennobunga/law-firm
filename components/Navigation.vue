<template>
  <aside class="sidebar">
      <div class="sideContent1">
        <strong>logo goes here</strong>
      </div>
      <div class="sideContent2">
        <h2 class="bold"><nuxt-link to="/about">about</nuxt-link></h2>
      </div>
      <div class="sideContent3">
        <h2 class="bold"><nuxt-link to="/practise">practise</nuxt-link></h2>
      </div>
      <div class="sideContent4">
        <h2 class="bold"><nuxt-link to="/contact">contact</nuxt-link></h2>
      </div>
    </aside>
</template>

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
  z-index: 1;
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
</style>
