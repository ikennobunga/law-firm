<template>
  <v-card class="shade">
    <v-layout row wrap>
        <v-flex xs12>
        <v-card color="grey darken-3" class="white--text">
            <v-card-title primary-title>
            <div class="headline">{{ title }}</div>
            <div>{{ previewText }}</div>
            </v-card-title> 
            <v-card-actions>
            <v-btn flat dark>{{ btnText }}</v-btn>   
            </v-card-actions> 
        </v-card>  
        </v-flex>  
    </v-layout> 
  </v-card>
</template>

<script>
    export default {
      props: [ 'title', 'previewText', 'btnText' ]
    }
</script>


