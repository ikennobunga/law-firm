<template>
    <v-flex xs12 
    class="image"
    :style="{backgroundImage: 'url(' + image + ')'}"
    >
    <h1>{{ title }}</h1>
    <p>{{ previewText }}</p>
    </v-flex>
</template>

<script>
export default {
  props: [ 'image', 'title', 'previewText' ]
}
</script>

<style scoped>

</style>






