<script>
import axios from 'axios'
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import AppLoader from './components/AppLoader.vue'
import { store } from './store.js'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppMain,
    AppLoader
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    callApi(url) {
      axios.get(url)
        .then(response => {
          /* console.log(response.data); */
          store.characters = response.data
          store.charactersLength = response.data.length
          store.loader = 1

        })
        .catch(err => {
          this.store.error = err.message
        })
    }
  },
  mounted() {
    this.callApi(this.store.API_URL)
    console.log(this.store)
  }
}


</script>

<template>
  <AppHeader />
  <AppLoader v-if="store.loader === 0" />
  <AppMain v-else />
</template>

<style scoped>

</style>
