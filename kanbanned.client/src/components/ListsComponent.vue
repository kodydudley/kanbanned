<template>
  <div class="card col-3 mx-3 my-3">
    <div class="listsComponent my-3">
      <div class="card text-center">
        <h1>
          {{ lists.description }}
          <button @click="deleteList" class="d-flex float-left btn btn-transparent text-danger">
            <i class="fas fa-trash-alt"></i>
          </button>
        </h1>
        <div class="card">
          <p>Tasks:</p>
          <form class="form-group" @submit.prevent="createTasks">
            <input class="form-control" type="text" placeholder="Enter New Task" v-model="state.description">
            <button type="submit" class="btn btn-transparent text-success">
              <i class="fas fa-plus-square"></i>
            </button>
          </form>
        </div>
      </div>
      <div @click="state.showTasks = !state.showTasks">
        <i class="fas fa-arrow-circle-down text-success float-left fa-lg mt-3"></i>
      </div>
      <div v-if="state.showTasks">
        <tasks-component v-for="task in tasks" :key="task" :tasks-prop="task" />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive, onMounted } from 'vue'
import { listsService } from '../services/ListsService'
import { tasksService } from '../services/TasksService'
// import router from '../router'
import { AppState } from '../AppState'
import swal from 'sweetalert'

export default {
  name: 'ListsComponent',
  props: ['listsProp'],
  setup(props) {
    const state = reactive({
      description: '',
      newTask: {},
      showTasks: false
    })
    onMounted(() => {
      tasksService.getTasks(props.listsProp._id)
    })
    return {
      state,
      lists: computed(() => props.listsProp),
      tasks: computed(() => AppState.tasks[props.listsProp._id]),
      deleteList() {
        swal({
          title: 'Are you sure?',
          text: 'Once deleted, you will not be able to recover this list!',
          icon: 'warning',
          buttons: true,
          dangerMode: true
        })
          .then((willDelete) => {
            if (willDelete) {
              listsService.deleteList(props.listsProp)
              swal('Poof! Your list has been deleted!', {
                icon: 'success'
              })
            } else {
              swal('Your list is safe!')
            }
          })
      },
      createTasks() {
        tasksService.createTasks(state.description, props.listsProp)
        state.description = ''
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
