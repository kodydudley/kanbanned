<template>
  <div class="commentsComponent my-3 justify-content-around">
    <div class="card">
      <p>
        {{ comments.description }}
        <button @click="deleteComment(commentId)" class="d-flex float-left btn btn-transparent text-danger">
          <i class="fas fa-trash-alt"></i>
        </button>
      </p>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { commentsService } from '../services/CommentsService'
import { AppState } from '../AppState'
// import router from '../router'
export default {
  name: 'CommentsComponent',
  props: ['commentsProp', 'tasksProp'],
  setup(props) {
    return {
      comments: computed(() => props.commentsProp),

      deleteComment() {
        commentsService.deleteComment(props.commentsProp._id)
        this.getComments(AppState.comments)
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
