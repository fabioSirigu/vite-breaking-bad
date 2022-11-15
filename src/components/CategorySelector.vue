<script>
import { store } from '../store.js';
export default {
      name: 'CategorySelector',
      data() {
            return {
                  store
            }
      }
}
</script>
<template>
      <div class="select_category">
            <select class="form-select form-select-lg mb-3" v-model="store.selectCategory"
                  @change="$emit('selectCategory')">
                  <option selected hidden>Seleziona la serie</option>
                  <option value="All">All</option>
                  <option value="Breaking Bad">Breaking Bad</option>
                  <option value="Better Call Saul">Better Call Saul</option>
            </select>
      </div>
</template>
<style scoped>

</style>