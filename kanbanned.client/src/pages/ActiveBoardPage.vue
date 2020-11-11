<template>
  <div class="ActiveBoard container-fluid">
    <div class="row">
      <div class="col-12">
        <button class="btn btn-outline-danger" @click="deleteBoard(boardId)">
          Delete Board
        </button>
        <h1>{{ activeBoard.title }}</h1>
      </div>
      <form class="form-group" @submit.prevent="createLists">
        <input class="form-control" type="text" placeholder="Enter New List" v-model="state.description">
        <button type="submit" class="btn btn-transparent text-success">
          <i class="fas fa-plus-square"></i>
        </button>
      </form>
    </div>
    <div class="row">
      <listsComponent v-for="list in lists" :key="list" :lists-prop="list" />
    </div>
  </div>
</template>

<script>
import { boardsService } from '../services/BoardsService'
import { useRoute } from 'vue-router'
import { reactive, computed, onMounted } from 'vue'
import { AppState } from '../AppState'
import { listsService } from '../services/ListsService'
export default {
  name: 'ActiveBoard',
  setup(props) {
    const state = reactive({
      props: ['boardsProp'],
      description: '',
      newList: {}
    })
    const route = useRoute()
    onMounted(() => {
      boardsService.getActiveBoard(route.params.boardId)
      listsService.getLists(route.params.boardId)
    })
    return {
      state,
      profile: computed(() => AppState.profile),
      activeBoard: computed(() => AppState.activeBoard),
      lists: computed(() => AppState.lists),
      deleteBoard() {
        boardsService.deleteBoard(route.params.boardId)
        route.push({ name: 'Profile' })
      },
      createLists() {
        listsService.createLists(state.description)
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
