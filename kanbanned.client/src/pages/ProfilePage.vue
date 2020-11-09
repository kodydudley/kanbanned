<template>
  <div class="about text-center">
    <h1>Welcome {{ profile.name }}</h1>
    <img class="rounded" :src="profile.picture" alt="" />
    <p>{{ profile.email }}</p>
  </div>
  <form @submit.prevent="creatBoard">
    <input type="text" placeholder="Board Title" v-model="state.newBoard.title">
    <button type="submit" class="btn btn-transparent btn-outline-success">
      Submit
    </button>
  </form>
</template>

<script>
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'
import boardsService from '../services/BoardsService'
export default {
  name: 'Profile',
  setup() {
    const state = reactive({
      newBoard: {}
    })
    return {
      state,
      profile: computed(() => AppState.profile),
      createBoards() {
        boardsService.createBoards(state.newBoard)
      }
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
