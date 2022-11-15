<script>
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
      store
    }
  },
  mounted() {
    store.callApi(store.API_URL)
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
