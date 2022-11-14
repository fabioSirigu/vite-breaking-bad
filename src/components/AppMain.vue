<script>
import { store } from '../store.js'

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
                  <div class="row row-cols-5">
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

.row {
      background-color: $light;
      padding: 2rem;


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
}
</style>