<template>
  <v-app>
    <div class="hero">
      <div class="hero-pic">
        <!--<home image="/people-2941951_1920.jpg"</home>-->
      </div>
    </div>
  </v-app>
</template>

<script>
export default {
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
  background-color: #4A5271;
  width: 100%;
  height: 840px;
  margin-left: 360px;
}
.hero-pic{
  grid-column: 2 / span 3;
  grid-row: 2 / span 6;
  background-color: brown; 
}
</style>

