import Vuex from 'vuex'
import axios from 'axios'

const state = {
  products: []
}

const actions = {
  async getProducts ({ commit }, isServer) {
    let response = {}
    if (isServer) {
      response = await axios.get('https://api.myjson.com/bins/bk8qw')
    } else {
      response = await axios.get('https://api.myjson.com/bins/o4hm0')
    }
    commit('SET_PRODUCTS', response.data)
  }
}

const mutations = {
  SET_PRODUCTS (state, payload) {
    state.products =payload
  }
}

const getters = {
  getProducts: state => {
    if (state.products.name === 'server') {
      return { name: 'EB' }
    }
    return { name: 'S3' }
  }
  
}

const store = () => {
  return new Vuex.Store({
    state,
    actions,
    mutations,
    getters
  })
}

export default store