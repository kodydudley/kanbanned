<template>
  <div class="tasksComponent my-3 justify-content-around">
    <div class="card">
      <h4>
        {{ tasks.description }}
        <button @click="deleteTask(taskId)" class="d-flex float-left btn btn-transparent text-danger">
          <i class="fas fa-trash-alt"></i>
        </button>
      </h4>
      <p class="text-center">
        Comments:
      </p>
      <form class="form-group" @submit.prevent="createComments">
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
// import router from '../router'
export default {
  name: 'TasksComponent',
  props: ['tasksProp', 'commentsProp'],
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

      deleteTask() {
        tasksService.deleteTask(props.tasksProp._id)
        this.getTasks(AppState.tasks)
      },
      createComments() {
        commentsService.createComments(state.description, props.tasksProp._id)
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
