<template>
   <v-flex xs12>
           <v-card>
            <v-card-media
             class="image1" 
             :style="{backgroundImage: 'url('+ image1 +')'}"
             height="250px">
            </v-card-media>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">{{ title }}</h3>
                <div class="mt-2">{{ textPreview }}</div>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn flat color="orange" class="mt-1">Explore</v-btn>
            </v-card-actions>
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

