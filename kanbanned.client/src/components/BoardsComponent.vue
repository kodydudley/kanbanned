<template>
  <div class="boardsComponent col-4 justify-content-around">
    <div class="card">
      <router-link :to="{name: 'ActiveBoard', params:{boardId: boards._id}} ">
        <div>
          {{ boards.title }}
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
export default {
  name: 'BoardsComponent',
  props: ['boardsProp'],
  setup(props) {
    return {
      profile: computed(() => AppState.profile),
      boards: computed(() => props.boardsProp)
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
