<template>
  <div class="about text-center container-fluid bodyFont">
    <div class="row justify-content-center">
      <h1>
        Welcome To Your Boards
      </h1>
    </div>
    <div class="row mt-3">
      <div class="col-6 justify-content-center">
        <h1>
          {{ profile.name }}
        </h1>
      </div>
      <div class="col-6 justify-content-center">
        <img class="rounded" :src="profile.picture" alt="" />
      </div>
    </div>
    <div class="row justify-content-center my-3">
      <form @submit.prevent="createBoards">
        <input type="text" placeholder="Board Title" v-model="state.newBoard.title">
        <button type="submit" class="btn btn-sm btn-transparent btn-outline-success ml-3">
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
// import { useRoute } from 'vue-router'
export default {
  name: 'Profile',
  setup() {
    onMounted(() => { boardsService.getBoards() })
    const state = reactive({
      newBoard: {},
      title: ''
    })
    // const route = useRoute()
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

.bodyFont{
font-family: 'Poppins', sans-serif;
}
</style>
