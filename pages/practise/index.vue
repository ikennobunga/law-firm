<template>
  <v-app>
    <div class="hero">
      <div class="practice-block">
        <h1>PRACTICE</h1>
        <p class="block">Al-Ansari & Associates</p>
      </div>
       <div class="hero-img"></div>
    </div>
  </v-app>
</template>

<script>

</script>

<style scoped>
.hero{
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
  width: 100%;
  height: 100vh;
}
.practice-block{
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
  background-image: url('/rawpixel-659501-unsplash.jpg');
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  z-index: 999;
  transition-duration: 1s;
}
</style>
