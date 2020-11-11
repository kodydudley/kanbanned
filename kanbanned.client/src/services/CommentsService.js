import { AppState } from '../AppState'
// import router from '../router'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class CommentsService {
  async createComments(data, taskId) {
    try {
      const newComment = {
        description: data,
        task: taskId
      }
      const res = await api.post('/comments', newComment)
      this.getComments(taskId)
      logger.log(res.data)
    } catch (error) {
      logger.error(error)
    }
  }

  async getComments(taskId) {
    try {
      const res = await api.get('/tasks/' + taskId + '/comments')
      AppState.comments[taskId] = res.data
    } catch (err) {
      logger.error('HAVE YOU STARTED YOUR SERVER YET???', err)
    }
  }

  async deleteComment(comment) {
    try {
      await api.delete('/comments/' + comment.id)
      this.getComments(comment.task)
    } catch (error) {
      logger.error(error)
    }
  }

  async getActiveComment(commentId) {
    try {
      const res = await api.get('/comments/' + commentId)
      logger.log('from the service')
      AppState.activeComment = res.data
    } catch (error) {
      logger.error(error)
    }
  }
}

export const commentsService = new CommentsService()
