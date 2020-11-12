<template>
  <div class="boardsComponent my-3 col-4 justify-content-around">
    <div class="card bg-dark pt-4">
      <router-link :to="{name: 'ActiveBoard', params:{boardId: boards._id}} ">
        <div class="text-light bodyFont">
          <h3>
            {{ boards.title }}
          </h3>
        </div>
      </router-link>
      <button class="d-flex float-left btn btn-transparent text-danger" @click="deleteBoard(boardId)">
        <i class="fas fa-trash-alt"></i>
      </button>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
import { boardsService } from '../services/BoardsService'
import { useRoute } from 'vue-router'

export default {
  name: 'BoardsComponent',
  props: ['boardsProp'],
  setup(props) {
    const route = useRoute()

    return {
      profile: computed(() => AppState.profile),
      boards: computed(() => props.boardsProp),
      deleteBoard() {
        boardsService.deleteBoard(props.boardsProp._id)
        route.push({ name: 'Profile' })
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
.bodyFont{
font-family: 'Poppins', sans-serif;
}
</style>
