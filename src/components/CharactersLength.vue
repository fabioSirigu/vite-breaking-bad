<script>
import { store } from '../store.js'

export default {
      name: 'CharactersLength',
      data() {
            return {
                  store
            }
      }
}
</script>
<template>
      <div class="list">
            <h3>Found {{ store.charactersLength }} characters</h3>
      </div>
</template>
<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

.list {
      background-color: $darker;
      display: block;
      width: 100%;

      h3 {
            padding: 0.75rem;
            color: $light;
      }
}
</style>