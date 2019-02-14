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
  addToast (state, newToast) {
    state.toast.text = newToast.text
    state.toast.duration = newToast.duration
    state.toast.bgColor = newToast.bgColor
  }
}

// vuex 实例化store
const store = new Vuex.Store({
  state,
  mutations
})
export default store
