<script>
import { store } from '../store.js'

export default {
      name: 'AppLoader',
      data() {
            return {
                  store
            }
      }
}
</script>
<template>
      <div class="container">
            <div class="loader">
                  <img src="../assets/img/load.gif" alt="">
            </div>
      </div>
</template>
<style lang="scss" scoped>
.container {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 800px;
      height: 300px;

}
</style>