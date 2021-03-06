<template>
  <div class="ActiveBoard container-fluid bg-dark bodyFont">
    <div class="row mt-3">
      <div class="col-12">
        <button class="btn btn-outline-danger" @click="deleteBoard(boardId)">
          Delete Board
        </button>
        <h1 class="text-center mt-3 text-light">
          {{ activeBoard.title }}
        </h1>
      </div>
      <div class="col-8 offset-2 text-center">
        <form class="form-group text-center" @submit.prevent="createLists">
          <input class="form-control text-center" type="text" placeholder="Enter New List" v-model="state.description">
          <button type="submit" class="btn btn-transparent text-success">
            <i class="fas fa-plus-square fa-3x"></i>
          </button>
        </form>
      </div>
    </div>
    <div class="row justify-content-center">
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
import router from '../router'
import swal from 'sweetalert'

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
        swal({
          title: 'Are you sure?',
          text: 'Once deleted, you will not be able to recover this board!',
          icon: 'warning',
          buttons: true,
          dangerMode: true
        })
          .then((willDelete) => {
            if (willDelete) {
              boardsService.deleteBoard(route.params.boardId)
              router.push({ name: 'Profile' })
              swal('Poof! Your board has been deleted!', {
                icon: 'success'
              })
            } else {
              swal('Your board is safe!')
            }
          })
      },
      createLists() {
        listsService.createLists(state.description)
        state.description = ''
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
