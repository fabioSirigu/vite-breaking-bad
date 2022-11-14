<script>
import SingleCard from './SingleCard.vue'
import CharactersLength from './CharactersLength.vue'

export default {
      name: 'AppMain',
      components: {
            SingleCard,
            CharactersLength
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
                        <CharactersLength />
                        <SingleCard />
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


}
</style>