<template>
  <div class="home flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <img class="img" src="https://www.shareicon.net/data/512x512/2016/09/07/826444_map_512x512.png" alt="Sitemap Logo">
    <h1 class="my-5  p-3 rounded d-flex align-items-center">
      <button
        class="btn btn-primary text-uppercase text-dark"
        @click="login"
        v-if="!user.isAuthenticated"
      >
        <h3>
          Please Login to Continue
        </h3>
      </button>
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
background-image: url('https://cdn.hipwallpaper.com/i/35/87/HyczqQ.jpg');
background-repeat: no-repeat;
background-size: cover;

}
</style>
