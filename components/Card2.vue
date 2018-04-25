<template>
  <v-card>
      <v-container
       fluid
       style="min-height: 0;"
       grid-list-lg
       >
        <v-layout row wrap>
          <v-flex xs6>
            <v-card color="blue-grey darken-2" class="white--text">
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
      </v-container>
  </v-card>
</template>

<script>
    export default {
      props: [ 'title', 'previewText', 'btnText' ]
    }
</script>
