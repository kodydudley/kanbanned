<template>
  <div class="home flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <img class="img" src="https://www.shareicon.net/data/512x512/2016/09/07/826444_map_512x512.png" alt="Sitemap Logo">
    <h1 class="my-5  p-3 rounded d-flex align-items-center">
      <button
        class="btn btn-outline-primary text-uppercase"
        @click="login"
        v-if="!user.isAuthenticated"
      >
        Please Login to Continue
      </button>
      <!-- <span class="mx-2 text-white">Please Login to Continue</span> -->
    </h1>
  </div>
</template>

<script>
import { AuthService } from '../services/AuthService'
import { AppState } from '../AppState'
import { computed, reactive } from 'vue'
export default {
  name: 'Home',
  setup() {
    const state = reactive({
      dropOpen: false
    })
    return {
      state,
      user: computed(() => AppState.user),
      async login() {
        AuthService.loginWithPopup()
      },
      async logout() {
        await AuthService.logout({ returnTo: window.location.origin })
      }
    }
  }
}
</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 300px;
    width: 300px;
  }
}
</style>
