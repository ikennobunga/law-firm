<template>
  <v-flex xs12>
    <div class="ourTeam">
      <img :src="url" alt="">
      <div class="team-content">
        <h3 class="title">{{ title }}</h3>
        <span class="post">{{ post }}</span>
        <p class="description">{{ description }}</p>
      </div>
    </div>
  </v-flex>
</template>

<script>
  export default {
    props: [ 'title', 'post', 'description', 'url' ]
  }
</script>

<style scoped>
.ourTeam{
  overflow: hidden;
  position: relative;
}
.ourTeam img{
  width: 100%;
  height: 335px;
  position: relative;
  right: 0;
  transition: all 0.4s ease-in-out 0s;
}
.ourTeam:hover img{
  right: 60%;
}
.ourTeam .team-content{
  width: 80%;
  height: 335px;
  background-color: beige;
  padding: 20% 30px 0;
  position: absolute;
  top: 0;
  right: -80%;
  transition: all 0.4s ease-in-out 0s;
}
.ourTeam:hover .team-content{
  right: 0;
}
</style>

