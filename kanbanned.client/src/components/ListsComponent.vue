<template>
  <div class="listsComponent my-3 col-4 justify-content-around">
    <div class="card text-center">
      <h1>
        {{ lists.description }}
        <button @click="deleteList" class="d-flex float-left btn btn-transparent text-danger">
          <i class="fas fa-trash-alt"></i>
        </button>
      </h1>
      <p>Tasks:</p>
      <button class="btn btn-transparent text-success">
        <i class="fas fa-plus-square"></i>
      </button>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { listsService } from '../services/ListsService'
import router from '../router'
export default {
  name: 'ListsComponent',
  props: ['listsProp'],
  setup(props) {
    return {
      lists: computed(() => props.listsProp),
      deleteList() {
        router.push({ name: 'ActiveBoard', params: { listId: props.listsProp._id } })
        listsService.deleteList(props.listsProp._id)
        this.getLists()
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
