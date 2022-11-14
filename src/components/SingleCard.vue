<script>
import { store } from '../store.js'

export default {
      name: 'SingleCard',
      data() {
            return {
                  store
            }
      }
}
</script>
<template>
      <div class="col g-2" v-for="character in store.characters">
            <div class="card my_card">
                  <img :src="character.img" class="card-img-top" alt="">
                  <div class="card-body">
                        <h5 class="card-title">{{ character.name }}</h5>
                        <div class="info text-muted">
                              <p>{{ character.category }}</p>
                              <p>{{ character.status }}</p>
                        </div>
                  </div>
            </div>
      </div>
</template>
<style lang="scss" scoped>
@use '../assets/scss/partials/variables.scss' as *;

.my_card {
      height: 100%;
      text-align: center;
      background-color: $darker;

      h5 {
            font-weight: bold;
            text-transform: uppercase;
            color: $light;
      }
}
</style>