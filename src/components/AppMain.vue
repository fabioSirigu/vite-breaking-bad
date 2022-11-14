<script>
import { store } from '../store'

export default {
      name: 'AppMain',
      data() {
            return {
                  store
            }
      }
}
</script>
<template>
      <main>
            <div class="container">
                  <div class="select_category">
                        <select class="form-select form-select-lg mb-3">
                              <option selected>Select Category</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                        </select>
                  </div>
                  <div class="row">
                        <div class="col" v-for="character in store.characters">
                              <div class="card">
                                    <img :src="character.img" class="card-img-top" :alt="character.name">
                                    <div class="card-body">
                                          <h5 class="card-title">Card title</h5>
                                          <p class="card-text">Some quick example text to build on the card title and
                                                make up the bulk of the card's
                                                content.</p>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      </main>
</template>
<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

.select_category {
      max-width: 300px;
      width: fit-content;
}
</style>