<template>
  <div class="tasksComponent my-3 justify-content-around">
    <div class="mt-5">
      <h4>
        {{ tasks.description }}

        <button @click="deleteTask(taskId)" class="d-flex float-left btn btn-transparent text-danger">
          <i class="fas fa-trash-alt"></i>
        </button>
      </h4>
      <div class="dropdown text-right">
        <button class="btn btn-transparent btn-outline-dark dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
        >
          Move
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item"
             @click="moveTask(list.id)"
             v-for="list in lists"
             :key="list"
          >{{ list.description }}</a>
        </div>
      </div>
      <p class="text-center">
        Comments:
      </p>
      <form class="form-group text-center" @submit.prevent="createComments">
        <input class="form-control" type="text" placeholder="Enter Comment" v-model="state.description">
        <button class="btn btn-transparent text-success">
          <i class="fas fa-comment"></i>
        </button>
      </form>
    </div>
    <comments-component v-for="comment in comments" :key="comment" :comments-prop="comment" />
  </div>
</template>

<script>
import { computed, reactive, onMounted } from 'vue'
import { tasksService } from '../services/TasksService'
import { commentsService } from '../services/CommentsService'
import { AppState } from '../AppState'
export default {
  name: 'TasksComponent',
  props: ['tasksProp', 'listsProp'],
  setup(props) {
    const state = reactive({
      description: '',
      newComment: {}
    })
    onMounted(() => {
      commentsService.getComments(props.tasksProp._id)
    })
    return {
      state,
      tasks: computed(() => props.tasksProp),
      comments: computed(() => AppState.comments[props.tasksProp._id]),
      lists: computed(() => AppState.lists),
      moveList: computed(() => props.listsProp),

      deleteTask() {
        tasksService.deleteTask(props.tasksProp)
      },
      createComments() {
        commentsService.createComments(state.description, props.tasksProp._id)
        state.description = ''
      },
      moveTask(newListId) {
        tasksService.moveTask(props.tasksProp, newListId)
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
