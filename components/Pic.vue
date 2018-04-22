<template>
    <v-flex xs12
    class="ourTeam"
    :style="{backgroundImage:'url('+ ourTeam +')'}"
    >
     <div class="teamContent">
        <h2>{{ title }}</h2>
        <span>{{ snipet }}</span>
        <h4>{{ previewText }}</h4>
     </div>
    </v-flex>
</template>

<script>
export default {
  props: [ 'ourTeam', 'title', 'snipet', 'previewText' ]
}
</script>

<style scoped>
.ourTeam{
  width: 100%;
  height: 100%;
  background-size: cover;
}
</style>

