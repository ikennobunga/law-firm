<template>
  <v-app>
    <div class="hero">
      <div class="hero-pic elevation-10">
        <home image="/people-2941951_1920.jpg"/>
      </div>
      <div class="hero-test1">
        <h1>about</h1>
      </div>
      <div class="hero-test2">
        <h1>us</h1>
      </div>
    </div>
    <!--founders-->
    <div class="founders">
      <div class="founders-quote">
        <p class="bold">"Don't wish it was easier, wish you were better.
           Don't wish for less problems, wish for more skills.
           Don't wish for less challenge,wish for more wisdom." - <span class="quote">Jim Ron</span>
        </p> 
      </div>
      <div class="founders-header">
        <h1>founders</h1>
      </div>
      <div class="founder-card">
        <div class="founder1">
          <h1>Alex Ship</h1>
          <p>Co founder &amp; CTO</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quas facere incidunt? Perspiciatis, voluptates neque? Nihil, maiores, explicabo aliquam minus ullam magnam temporibus eum minima sint.</p>
            <v-dialog v-model="dialog" persistent max-width="290">
              <v-btn slot="activator" depressed color="black" dark>contact</v-btn>
              <v-card>
                <v-card-title class="headline">Use Google's location service?</v-card-title>
                <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="green darken-1" flat @click.native="dialog = false">back</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
        </div>
        <div class="founder1-pic elevation-8">
          <img src="/buahmed-min.jpg" style="width:420px; height:526px;" alt="">
        </div>
        <div class="founder2">
          <h1>Alex Ship</h1>
          <p>Co founder &amp; CTO</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quas facere incidunt? Perspiciatis, voluptates neque? Nihil, maiores, explicabo aliquam minus ullam magnam temporibus eum minima sint.</p>
            <v-dialog v-model="dialog" persistent max-width="290">
              <v-btn slot="activator" depressed color="black" dark>contact</v-btn>
              <v-card>
                <v-card-title class="headline">Use Google's location service?</v-card-title>
                <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="green darken-1" flat @click.native="dialog = false">back</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
        </div>
        <div class="founder2-pic elevation-8">
          <img src="/salman-2.jpg" style="width:420px; height:526px;" alt="">
        </div>
      </div>
      <!--our values-->
      <div class="ourvalues-header">
        <h1>our values</h1>
      </div>
      <div class="ourvalue-card1 elevation-8">
      </div>
      <div class="ourvalue-background1"></div>
      <div class="ourvalue-card2">
      </div>
      <div class="ourvalue-background2"></div>
      <div class="ourvalue-card3">
      </div>
      <div class="ourvalue-background3"></div>
      <!--achievements-->
      <div class="achievenents">
        <h1>achievements</h1>
      </div>
        <div class="card1">
          <card3
           title="zook"
           description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, consequatur commodi optio necessitatibus sed ex voluptate dicta adipisci culpa iusto ullam, soluta, asperiores explicabo totam tenetur tempore. Veritatis, consectetur nam."
           index1="20"
           index2="06"/>
        </div>
        <div class="card2">
          <card3
           title="tulip"
           description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, consequatur commodi optio necessitatibus sed ex voluptate dicta adipisci culpa iusto ullam, soluta, asperiores explicabo totam tenetur tempore. Veritatis, consectetur nam."
           index1="20"
           index2="08"/>
        </div>
        <div class="card-3">
          <card3
           title="zook"
           description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, consequatur commodi optio necessitatibus sed ex voluptate dicta adipisci culpa iusto ullam, soluta, asperiores explicabo totam tenetur tempore. Veritatis, consectetur nam."
           index1="20"
           index2="09"/>
        </div>
        <div class="card4">
          <card3
           title="loop"
           description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, consequatur commodi optio necessitatibus sed ex voluptate dicta adipisci culpa iusto ullam, soluta, asperiores explicabo totam tenetur tempore. Veritatis, consectetur nam."
           index1="20"
           index2="10"/>
        </div>
        <div class="card5">
          <card3
           title="brooklyn"
           description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, consequatur commodi optio necessitatibus sed ex voluptate dicta adipisci culpa iusto ullam, soluta, asperiores explicabo totam tenetur tempore. Veritatis, consectetur nam."
           index1="20"
           index2="11"/>
        </div>
        <div class="card6">
          <card3
           title="califonia"
           description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, consequatur commodi optio necessitatibus sed ex voluptate dicta adipisci culpa iusto ullam, soluta, asperiores explicabo totam tenetur tempore. Veritatis, consectetur nam."
           index1="20"
           index2="12"/>
        </div>
        <div class="card7">
          <card3
           title="cansas"
           description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, consequatur commodi optio necessitatibus sed ex voluptate dicta adipisci culpa iusto ullam, soluta, asperiores explicabo totam tenetur tempore. Veritatis, consectetur nam."
           index1="20"
           index2="13"/>
        </div>
        <div class="card8">
          <card3
           title="chicago"
           description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, consequatur commodi optio necessitatibus sed ex voluptate dicta adipisci culpa iusto ullam, soluta, asperiores explicabo totam tenetur tempore. Veritatis, consectetur nam."
           index1="20"
           index2="14"/>
        </div>
        <div class="card9">
          <card3
           title="wayoming"
           description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, consequatur commodi optio necessitatibus sed ex voluptate dicta adipisci culpa iusto ullam, soluta, asperiores explicabo totam tenetur tempore. Veritatis, consectetur nam."
           index1="20"
           index2="15"/>
        </div>
        <div class="card10">
          <card3
           title="oakland"
           description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, consequatur commodi optio necessitatibus sed ex voluptate dicta adipisci culpa iusto ullam, soluta, asperiores explicabo totam tenetur tempore. Veritatis, consectetur nam."
           index1="20"
           index2="16"/>
        </div>
        <div class="card11">
          <card3
           title="washington DC"
           description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, consequatur commodi optio necessitatibus sed ex voluptate dicta adipisci culpa iusto ullam, soluta, asperiores explicabo totam tenetur tempore. Veritatis, consectetur nam."
           index1="20"
           index2="17"/>
        </div>
        <!--facts & figures-->
        <div class="factsFigures">
          <h1>facts &amp; figures</h1>
        </div>
        <div class="total-probono">
          <h1>18k</h1>
        </div>
        <div class="probono-text">
          <p>total pro bono</p>
        </div>
        <div class="probono-individual">
          <h1>4k</h1>
        </div>
        <div class="indivigual-text">
          <p>pro bono for individuals</p>
        </div>
        <div class="probono-corporate">
          <h1>4k</h1>
        </div>
        <div class="corporate-text">
          <p>pro bono for corporate</p>
        </div>
        <div class="probono-sme">
          <h1>5k</h1>
        </div>
        <div class="sme-text">
          <p>pro bono for SME's</p>
        </div>
        <div class="probono-women">
          <h1>3k</h1>
        </div>
        <div class="women-text">
          <p>pro bono for women</p>
        </div>
        <div class="probono-education">
          <h1>2k</h1>
        </div>
        <div class="education-text">
          <p>pro bono for legal education</p>
        </div>
    </div>
  </v-app>
</template>

<script>
import Home from '@/components/Home'
import Card3 from '@/components/Card3'
export default {
  components: {
    Home,
    Card3
  },
  data () {
    return {
      dialog: false
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
  background-color: #FFFFFF;
  color: #50535E;
  width: 100%;
  height: 840px;
  margin-left: 360px;
}
.hero-pic{
  grid-column: 2 / 7;
  grid-row: 2 / 12;
  border-radius: 8px; 
}
.image{
  height: 100%;
  width: 100%;
  background-size: cover;
  margin-top: -16px;
}
.hero-test1{
  grid-column: 7 / 10;
  grid-row: 2 / 4;
  font-family: montserrat;
  font-size: 45px;
  font-weight: bold;
  letter-spacing: 4px;
  text-shadow: 1px 1px 1px;
  margin-left: 10px;
}
.hero-test2{

  grid-column: 7 / 10;
  grid-row: 4 / 6;
  font-size: 45px;
  font-weight: bold;
  letter-spacing: 6px;
  text-shadow: 1px 1px 1px;
  margin-left: 10px
}
/*----------founders----------*/
.founders{
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(300, 1fr);
  grid-column-gap: 4px;
  background-color: #FFFFFF;
  width: 100%;
  height: 1600vh;
  margin-left: 360px;
  font-family: montserrat;
}
.founders-quote{
  grid-column: 1 / 9;
  grid-row: 2 / 12;
}
.bold{
  font-size: 50px;
  text-align: left;
  padding-left: 20px;
  color: #333333;
}
.founders-header{
  grid-column: 2 / 6;
  grid-row: 13 / span 3;
  background-color: #50535E;
  font-size: 40px;
  letter-spacing: 4px;
  -webkit-text-stroke-width: 0px;
  background-image: url('/matic-kozinc-92770-unsplash.jpg');
  background-repeat: no-repeat;
  display: inline;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  background-size: cover;
}
.founder-card{
  grid-column: 2 / 9;
  grid-row: 16 / 48;
  /*background-color: bisque;*/
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(30, 1fr);
}
.founder1{
  grid-column: 2 / 7;
  grid-row: 2 / 8;
  padding-top: 5px;
  padding-left: 10px;
  color:#333333;
  background-color: #F5F7F8;
}
.founder1-pic{
  grid-column: 7 / 12;
  grid-row: 2 / 13;
}
.founder2{
  grid-column: 8 / 13;
  grid-row: 16 / 22;
  padding-top: 5px;
  padding-right: 10px;
  text-align: right;
  color: #333333;
  background-color: #F5F7F8;
}
.founder2-pic{
  grid-column: 2 / 8;
  grid-row: 16 / 27;
}
/*----------our values----------*/
.ourvalues-header{
  grid-column: 2 / 6;
  grid-row: 45 / 49;
  font-size: 40px;
  letter-spacing: 4px;
  background-image: url('/matic-kozinc-92770-unsplash.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  display: inline;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-stroke-width: 0px;
  background-color: burlywood;
}
.ourvalue-card1{
  grid-column: 3 / 7;
  grid-row: 49 / 63;
  margin-left: 50px;
  margin-bottom: 43px;
  z-index: 999;
  background-color: rgba(255, 255, 255, 0.966);
  border: 30px solid #919294;
}
.ourvalue-background1{
  grid-column: 3 / 6;
  grid-row: 49 / 63;
  margin-top: 44px;
  background-image: url('/matic-kozinc-92770-unsplash.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-color: rgba(3, 3, 3, 0.021);
}
.ourvalue-card2{
  grid-column: 3 / 7;
  grid-row: 66 / 80;
  margin-left: 50px;
  margin-bottom: 43px;
  z-index: 999;
  border: 30px solid #919294;
  background-color: rgba(255, 255, 255, 0.966); 
}
.ourvalue-background2{
  grid-column: 3 / 6;
  grid-row: 66 / 80;
  margin-top: 44px;
  background-color: rgba(112, 128, 144, 0.055);
}
.ourvalue-card3{
  grid-column: 3 / 7;
  grid-row: 83 / 97;
  z-index: 999;
  margin-left: 50px;
  margin-bottom: 43px;
  border: 30px solid #919294;
  background-color: rgba(255, 255, 255, 0.966);
}
.ourvalue-background3{
  grid-column: 3 / 6;
  grid-row: 83 / 97;
  margin-top: 44px;
  background-color: rgba(112, 128, 144, 0.055);
}
/*----------achivements----------*/
.achievenents{
  grid-column: 2 / 9;
  grid-row: 100 / 104;
  font-size: 50px;
  letter-spacing: 4px;
  margin-left: 30px;
  background-image: url('/matic-kozinc-92770-unsplash.jpg'); 
  background-repeat: no-repeat;
  background-size: cover;
  display: inline;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  background-color: #50535E;
}
.card1{
  grid-column: 2 / 8;
  grid-row: 105 / 111;
  margin-bottom: 15px;
}
.card2{
  grid-column: 2 / 8;
  grid-row: 112 / 118;
  margin-bottom: 15px;
}
.card-3{
  grid-column: 2 / 8;
  grid-row: 119 / 125;
  margin-bottom: 15px;
}
.card4{
  grid-column: 2 / 8;
  grid-row: 127 / 133;
  margin-bottom: 15px;
}
.card5{
  grid-column: 2 / 8;
  grid-row: 134 / 140;
}
.card6{
  grid-column: 2 / 8;
  grid-row: 141 / 147;
}
.card7{
  grid-column: 2 / 8;
  grid-row: 148 / 154;
}
.card8{
  grid-column: 2 / 8;
  grid-row: 155 / 161;
}
.card9{
  grid-column: 2 / 8;
  grid-row: 162 / 168;
}
.card10{
  grid-column: 2 / 8;
  grid-row: 169 / 175;
}
.card11{
  grid-column: 2 / 8;
  grid-row: 176 / 182;
}
/*----------facts and figures----------*/
.factsFigures{
  grid-column: 2 / 9;
  grid-row: 184 / 187;
  font-size: 50px;
  letter-spacing: 4px;
  background-image: url('/matic-kozinc-92770-unsplash.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  display: inline;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  background-color: bisque;
}
.total-probono{
  grid-column: 2 / 9;
  grid-row: 189 / 195;
  color:#F5F7F8;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 100px;
  background-color: #333333;
}
.probono-text{
  grid-column: 2 / 9;
  grid-row: 195 / 201;
  color: #333333;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
}
.probono-individual{
  grid-column: 2 / 9;
  grid-row: 201 / 207;
  color:#F5F7F8;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 100px;
  background-color: #333333;
}
.indivigual-text{
  grid-column: 2 / 9;
  grid-row: 207 / 213;
  color: #333333;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
}
.probono-corporate{
  grid-column: 2 / 9;
  grid-row: 213 / 219;
  color: #F5F7F8;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 100px;
  background-color: #333333;
}
.corporate-text{
  grid-column: 2 / 9;
  grid-row: 219 / 225;
  color: #333333;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
}
.probono-sme{
  grid-column: 2 / 9;
  grid-row: 225 / 231;
  color: #F5F7F8;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 100px;
  background-color: #333333;
}
.sme-text{
  grid-column: 2 / 9;
  grid-row: 231 / 237;
  color: #333333;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
}
.probono-women{
  grid-column: 2 / 9;
  grid-row: 237 / 243;
  color: #F5F7F8;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 100px;
  background-color: #333333;
}
.women-text{
  grid-column: 2 / 9;
  grid-row: 243 / 249;
  color: #333333;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
}
.probono-education{
  grid-column: 2 / 9;
  grid-row: 249 / 255;
  color: #F5F7F8;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 100px;
  background-color: #333333;
}
.education-text{
  grid-column: 2 / 9;
  grid-row: 255 / 261;
  color: #333333;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
}
</style>

