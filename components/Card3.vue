<template>
    <v-flex>
        <div class="card3">
            <div class="cardz">
                <p class="wite">year</p>
                <p class="numer">{{ index1 }} <br>{{ index2 }}</p>
            </div>
            <div class="card-content">
                <h2 class="title">{{ title }}</h2>
                <hr>
                <p class="description">{{ description }}</p>
            </div>
        </div>
    </v-flex>
</template>

<script>
export default {
  props: [ 'title', 'description', 'index1', 'index2' ]
}
</script>

<style scoped>
.card3{
  width: 719px;
  height: 262px;
}
.cardz{
  width: 116px;
  height: 262px;
  margin-left: 722px;
  padding-top: 10px;
  color: #F5F7F8;
  position: absolute;
  background-color: #333333;
}
.card-content{
  padding-top: 42px
}
.wite{
  font-size: 20px;
  padding-left: 30px;
  text-transform: uppercase;
}
.numer{
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 55px;
  /*padding-left: 20px; */ 
}
hr{
  width: 200px;
  height: 2px;;
  color: black;
}
.description{
  font-size: 18px;  
  padding-top: 10px;  
}
.title{
  font-weight: bold;  
}
</style>
