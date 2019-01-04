<template>
  <v-container
    fluid
    grid-list-md
  >
    <v-data-iterator
      :items="characters"
      :rows-per-page-items="[8, 16]"
      content-tag="v-layout"
      row
      wrap
    >
      <v-toolbar
        slot="header"
        class="mb-2"
        color="indigo"
        dark
        flat
      >
        <v-toolbar-title>Marvel Characters</v-toolbar-title>
      </v-toolbar>
      <v-flex
        slot="item"
        slot-scope="props"
        xs12
        sm6
        md4
        lg3
      >
        <v-card>
          <v-card-media
            :src="props.item.thumbnail.path + '.' + props.item.thumbnail.extension"
            alt="props.item.name"
          />
          <v-card-title class="subheading font-weight-bold">{{ props.item.name }}</v-card-title>
          <v-card-text>{{ props.item.description ? props.item.description : '' }}</v-card-text>
        </v-card>
      </v-flex>
      <v-toolbar
        slot="footer"
        class="mt-2"
        color="indigo"
        dark
        dense
        flat
      >
        <v-toolbar-title>Footer here :D</v-toolbar-title>
      </v-toolbar>
    </v-data-iterator>
  </v-container>
</template>

<script>
import axios from 'axios'
import _ from 'lodash'
import { createNamespacedHelpers } from 'vuex'

const { mapState } = createNamespacedHelpers('characters')

export default {
  fetch({ store, params }) {
    // Delete code above when ready
    return axios
      .get(
        'https://gateway.marvel.com:443/v1/public/characters?apikey=22b53350875ce032b44ce69266f9e640'
      )
      .then(res => {
        store.commit('characters/addAll', _.get(res, 'data.data.results'))
      })
  },
  computed: {
    ...mapState({
      characters: 'list',
      charactersCount: state => state.list.length
    })
  }
}
</script>

<style>
.item {
  color: white;
}
</style>
