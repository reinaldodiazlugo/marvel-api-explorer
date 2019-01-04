import Vuex from 'vuex'

const store = () => {
  return new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    state: {}
  })
}
