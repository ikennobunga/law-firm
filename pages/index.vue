<template>
  <v-app class="intro">
    <div class="loot">
      <div class="plot1" elevation-20>
        <Home
          image="https://images.pexels.com/photos/404986/pexels-photo-404986.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          title="the coon"
          previewText="Awesome place"/>
      </div>

      <div class="plot2">
        <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim nobis libero, aspernatur ratione aliquam nisi cumque alias odit sint ducimus, nulla totam ut praesentium repellat pariatur dignissimos in laborum delectus.</h4>
        <div class="buttons">
          <div class="home">Home</div>
          <div class="about">About</div>
          <div class="practise">Practise</div>
          <div class="contact">Contact</div>
        </div>
      </div>
    </div>

    <div class="article">
      <div class="content1">
        <h2><span class="bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam culpa quasi</span> consequuntur optio magni vel fugiat ipsum numquam ipsa velit iure aspernatur aut, explicabo nemo maiores distinctio, quae laborum eveniet.Eveniet harum placeat sint error sapiente molestiae! Voluptatibus animi fugit voluptatem iure eos similique soluta tempora quam reiciendis. Asperiores, incidunt quo repellendus possimus sed et totam similique iure unde corrupti?</h2>
      </div>

      <div class="contentText">
        <h1>What We Do</h1>
      </div>

      <div class="content2 elevation-12">
        <div class="contentPic1">
          <v-flex xs12>
            <div class="ourteam">
              <img src="https://images.unsplash.com/photo-1497393007523-302c86e07c5d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f486a568fd0f7359e58d2d7f98232c7f&auto=format&fit=crop&w=900&q=60" alt="">
               <div class="team-content">
                <h3 class="title">Summer</h3>
                <span class="post">Vaccay!!</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis soluta reprehenderit cumque minima earum voluptatibus dolores nihil numquam provident voluptatem. Sapiente blanditiis commodi veritatis quos, magnam excepturi accusantium praesentium et.</p>
                <ul class="social">
                  <li><a href="" class=""></a></li>
                  <li><a href="" class=""></a></li>
                  <li><a href="" class=""></a></li>
                  <li><a href="" class=""></a></li>
                </ul>
              </div>
            </div>
          </v-flex>
        </div>
        <div class="contentPic2">
          <Pic ourTeam="https://images.unsplash.com/photo-1504548214873-4bae9e99a24f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bcf33f0ac7e48a181a2260403489bd28&auto=format&fit=crop&w=900&q=60"/>
        </div>
        <div class="contentPic3">
          <pic ourTeam="https://images.unsplash.com/photo-1505392049999-fb0564e097c2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1cb978a0935e6c70d2f4e449975c5699&auto=format&fit=crop&w=900&q=60"/>
        </div>
      </div>
    </div>

    <div class="article2">
      <div class="contentText2">
        <h1>Clients Say</h1>
      </div>

      <div class="contentCards elevation-12">
        <div class="card1">
          <card
           image1="https://images.unsplash.com/photo-1505845297973-ae7a996087c4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=29279d22b397388577cb213f474f0463&auto=format&fit=crop&w=900&q=60"
           title="Summer"
           textPreview="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ipsam saepe facilis, itaque ullam nulla repudiandae rerum eligendi repellendus officiis autem similique id in cum porro eaque earum tempore molestias."/>
         </div>
         <div class="card2">
           <card
            image1="https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=af153b6332902d06f7d573ef33f70d91&auto=format&fit=crop&w=900&q=60"
            title="Sun and Beach"
            textPreview="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ipsam saepe facilis, itaque ullam nulla repudiandae rerum eligendi repellendus officiis autem similique id in cum porro eaque earum tempore molestias."/>
         </div>
         <div class="card3">
           <card
            image1="https://images.unsplash.com/photo-1514179974491-a7885781ed87?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=733ff333379d2189c42e9a444d3884fa&auto=format&fit=crop&w=900&q=60"
            title="Shopping"
            textPreview="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ipsam saepe facilis, itaque ullam nulla repudiandae rerum eligendi repellendus officiis autem similique id in cum porro eaque earum tempore molestias."/>
         </div>
      </div>
    </div>
  </v-app>
</template>

<script>
import Home from '@/components/Home'
import Card from '@/components/Card'
export default {
  components: {
    Home,
    Card
  }
}
</script>


<style scoped>
/*--------------------HEADER--------------------*/
.intro{
  background-color: #343233;

}
.loot{
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(10, 1fr);
  background-color: #343233;
  height: 900px;
}
.plot1{
  grid-column: 1 / span 9;
  grid-row: 1 / span 10; 
}
.plot2{
  grid-column: 10 / span 12;
  grid-row: 1 / span 10;
  padding: 40px;
  color: #E9DAB9;
  width: 400px;
  height: 817px;
}
.buttons{
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(12, 1fr);
  grid-column-gap: 5px;
  grid-row-gap: 5px;
  height: 670px;
}
.home{
  grid-column: 1 / span 3;
  grid-row: 11 / span 1;
  display: flex;
  justify-content: center;
  align-items: center; 
  border: 1px solid #4D4B4D;
}
.about{
  grid-column: 4 / span 6;
  grid-row: 11 / span 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #DAAF52;
}
.practise{
  grid-column: 1 / span 4;
  grid-row: 12 / span 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #DAAF52;
}
.contact{
  grid-column: 5 / span 5;
  grid-row: 12 / span 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #4D4B4D;
}
.image{
  width: 100%;
  height: 817px;
  background-size: cover;
  color: aliceblue;
}
/*--------------------ARTICLE--------------------*/
.article{
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(20, 1fr);
  background-color: #343233;  
  height: 1000px;
}
.content1{
  grid-column: 3 / span 8;
  grid-row: 1 / span 4;
  /*border: 1px solid #4D4B4D;*/
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  text-align: center;
  color: #E9DAB9;
}
.contentText{
  grid-column: 1 / span 6;
  grid-row: 7 / span 3;
  font-family: 'Candal', sans-serif;
  font-size: 50px;
  color: #4D4B4D;
}
.content2{
  grid-column: 3 / span 10;
  grid-row: 10 / span 8;
  border: 20px solid #4D4B4D;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
  height: 480px;
}
.bold{
  font-size: 30px;
}
.ourteam{
  position: relative;
  overflow: hidden;
  background-size: cover;
}
.ourteam img{
  width: 100%;
  height: 440px;
  position: relative;
  right: 0;
  transition: all 0.4s ease-in-out 0s;
  background-size: cover;
}
.ourteam:hover img{
  right: 80%;
}
.ourteam .team-content{
  width: 80%;
  height: 100%;
  padding: 20% 30px 0;
  position: absolute;
  top: 0;
  right: -80%;
  transition: all 0.4s ease-in-out 0s;
  background-color: #86BADC;
}
.ourteam:hover .team-content{
  right: 0;
}
.contentPic1{
  grid-column: 1 / span 4;
  grid-row: 1 / span 13;
  background-color: #E9DAB9;
}
.contentPic2{
  grid-column: 5 / span 4;
  grid-row: 1 / span 12; 
  background-color: #DAAF52;
}
.contentPic3{
  grid-column: 9 / span 4;
  grid-row: 1 / span 12;
  background-color: aqua;
}
/*--------------------ARTICLE2--------------------*/
.article2{
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(20, 1fr);
  background-color: #343233;
  height: 1000px;
}
.contentText2{
  grid-column: 7 / span 6;
  grid-row: 1 / span 3;
  font-family: 'Candal', sans-serif;
  font-size: 50px;
  color: #4D4B4D;
}
.contentCards{
  grid-column: 1 / span 10;
  grid-row: 4 / span 9;
  border: 20px solid #4D4B4D;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12,1fr);
  grid-gap: 1px;
}
.card1{
  grid-column: 1 / span 4;
  grid-row: 1 / span 12;
  background-color: antiquewhite;
}
.card2{
  grid-column: 5 / span 4;
  grid-row: 1 / span 12;
  background-color: #39465B;
}
.card3{
  grid-column: 9 / span 4;
  grid-row: 1 / span 12;
  background-color: #86BADC;
}
</style>


