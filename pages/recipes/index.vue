<template>
  <v-app>
    <aside class="sidebar">
      <div class="sideContent1">

      </div>
    </aside>
    <div class="hero">
      <h3>hero</h3>
    </div>
  </v-app>
</template>

<style scoped>
.sidebar{
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(12, 1fr);
  background-color: #8CACA1;
  width: 400px;
  height: 100%;
  position: fixed;
}
.sideContent1{
  grid-column: 2 / span 4;
  grid-row: 4 / span 3;
  background-color: aliceblue;
}
.hero{
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
  background-color: #91949D;
  width: 100%;
  height: 800px;
  position: absolute;
  margin-left: 400px;
}
</style>

