import Vue from 'vue'
import Aos from 'aos'

export default ({app}, inject) => {
  app.Aos = new Aos.init()
}

Vue.use(Aos)
