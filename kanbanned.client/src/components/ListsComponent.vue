<template>
  <div class="listsComponent my-3 col-4 justify-content-around">
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
    <tasks-component v-for="task in tasks" :key="task" :tasks-prop="task" />
  </div>
</template>

<script>
import { computed, reactive, onMounted } from 'vue'
import { listsService } from '../services/ListsService'
import { tasksService } from '../services/TasksService'
// import router from '../router'
import { AppState } from '../AppState'
export default {
  name: 'ListsComponent',
  props: ['listsProp'],
  setup(props) {
    const state = reactive({
      props: ['listsProp'],
      description: '',
      newTask: {}
    })
    onMounted(() => {
      tasksService.getTasks(props.listsProp._id)
    })
    return {
      state,
      lists: computed(() => props.listsProp),
      tasks: computed(() => AppState.tasks[props.listsProp._id]),
      deleteList() {
        listsService.deleteList(props.listsProp._id)
        this.getLists()
      },
      createTasks() {
        tasksService.createTasks(state.description, props.listsProp._id)
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
