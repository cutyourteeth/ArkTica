import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// state 存储内容
let state = {
  toast: {
    text: '',
    duration: '',
    bgColor: ''
  }
}

// mutations 放置主要方法
let mutations = {
  addToast (text, duration = 3000, bgColor = 'rgba(0,0,0,0.6)') {
    state.toast.text = text
    state.toast.duration = duration
    state.toast.bgColor = bgColor
  }
}

// vuex 实例化store
const store = new Vuex.Store({
  state,
  mutations
})
export default store
