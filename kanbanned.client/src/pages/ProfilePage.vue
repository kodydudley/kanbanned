<template>
  <div class="about text-center container-fluid">
    <div class="row">
      <h1>Welcome {{ profile.name }}</h1>
      <img class="rounded" :src="profile.picture" alt="" />
      <p>{{ profile.email }}</p>
    </div>
    <div class="row">
      <form @submit.prevent="createBoards">
        <input type="text" placeholder="Board Title" v-model="state.newBoard.title">
        <button type="submit" class="btn btn-transparent btn-outline-success">
          Submit
        </button>
      </form>
    </div>
    <div class="col-10 offset-1">
      <div class="row justify-content-around">
        <boardsComponent v-for="board in boards" :boards-prop="board" :key="board" />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive, onMounted } from 'vue'
import { AppState } from '../AppState'
import { boardsService } from '../services/BoardsService'
import BoardsComponent from '../components/BoardsComponent'
export default {
  name: 'Profile',
  setup() {
    onMounted(() => { boardsService.getBoards() })
    const state = reactive({
      newBoard: {},
      title: ''
    })
    return {
      state,
      profile: computed(() => AppState.profile),
      boards: computed(() => AppState.boards),
      createBoards() {
        boardsService.createBoards(state.newBoard)
      }
    }
  },
  components: { BoardsComponent }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
