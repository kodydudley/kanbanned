<template>
  <div class="commentsComponent my-3">
    <!-- <div class="card"> -->
    <p>
      {{ comments.description }}
      <button @click="deleteComment(comment)" class="d-flex float-left btn btn-transparent text-danger">
        <i class="fas fa-times"></i>
      </button>
    </p>
    <!-- </div> -->
  </div>
</template>

<script>
import { computed } from 'vue'
import { commentsService } from '../services/CommentsService'
export default {
  name: 'CommentsComponent',
  props: ['commentsProp', 'tasksProp'],
  setup(props) {
    return {
      comments: computed(() => props.commentsProp),

      deleteComment() {
        commentsService.deleteComment(props.commentsProp)
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
