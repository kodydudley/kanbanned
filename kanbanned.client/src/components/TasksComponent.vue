<template>
  <div class="tasksComponent my-3 justify-content-around">
    <div class="card">
      <h4>
        {{ tasks.description }}
        <button @click="deleteTask" class="d-flex float-left btn btn-transparent text-danger">
          <i class="fas fa-trash-alt"></i>
        </button>
      </h4>
      <p class="text-center">
        Comments:
      </p>
      <input type="text" placeholder="Enter Comment">
      <button class="btn btn-transparent text-success">
        <i class="fas fa-comment"></i>
      </button>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { tasksService } from '../services/TasksService'
import router from '../router'
export default {
  name: 'TasksComponent',
  props: ['tasksProp'],
  setup(props) {
    return {
      tasks: computed(() => props.tasksProp),
      deleteTask() {
        router.push({ name: 'ActiveBoard', params: { taskId: props.tasksProp._id } })
        tasksService.deleteTask(props.tasksProp._id)
        this.getTasks()
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
