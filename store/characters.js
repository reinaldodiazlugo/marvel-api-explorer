export const state = () => ({
  list: []
})

export const mutations = {
  add(state, character) {
    state.list.push(character)
  },
  addAll(state, characters = []) {
    state.list = state.list.concat(characters)
  },
  remove(state, { character }) {
    state.list.splice(state.list.indexOf(character), 1)
  }
}
