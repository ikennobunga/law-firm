<template>
   <v-flex xs612>
           <v-card>
            <v-card-media
             class="image1" 
             :style="{backgroundImage: 'url('+ image1 +')'}"
             height="233px">
            </v-card-media>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">{{ title }}</h3>
                <div>{{ textPreview }}</div>
              </div>
            </v-card-title>
          </v-card>
          </v-flex>
</template>

<script>
    export default {
      props: [ 'image1', 'title', 'textPreview' ]
    }
</script>

<style scoped>
.image1{
  background-size: cover;
}
</style>

