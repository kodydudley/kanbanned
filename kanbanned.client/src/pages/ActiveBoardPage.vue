<template>
  <div class="ActiveBoard">
    <h1>Title: {{ activeBoard.title }}</h1>
    <button class="btn btn-outline-danger" @click="deleteBoard(boardId)">
      Delete Board
    </button>
  </div>
</template>

<script>
import { boardsService } from '../services/BoardsService'
import { useRoute } from 'vue-router'
import { reactive, computed, onMounted } from 'vue'
import { AppState } from '../AppState'
export default {
  name: 'ActiveBoard',
  setup(props) {
    const state = reactive({
      props: ['boardsProp']
    })
    const route = useRoute()
    onMounted(() =>
      boardsService.getActiveBoard(route.params.boardId))
    return {
      state,
      profile: computed(() => AppState.profile),
      activeBoard: computed(() => AppState.activeBoard),
      deleteBoard() {
        boardsService.deleteBoard(route.params.boardId)
        route.push({ name: 'Profile' })
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
