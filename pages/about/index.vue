<template>
  <v-app>
    <div class="hero">
      <h1>the about page</h1>
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
  margin-left: 360px;
}
</style>

