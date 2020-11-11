import { AppState } from '../AppState'
// import router from '../router'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class TasksService {
  async createTasks(data, listId) {
    try {
      const newtask = {
        description: data,
        list: listId
      }
      const res = await api.post('/tasks', newtask)
      this.getTasks(listId)
      logger.log(res.data)
    } catch (error) {
      logger.error(error)
    }
  }

  async getTasks(listId) {
    try {
      const res = await api.get('/lists/' + listId + '/tasks')
      AppState.tasks[listId] = res.data
    } catch (err) {
      logger.error('HAVE YOU STARTED YOUR SERVER YET???', err)
    }
  }

  async deleteTask(taskId) {
    try {
      const res = await api.delete('/tasks/' + taskId)
      AppState.tasks = res.data
      this.getTasks()
    } catch (error) {
      logger.error(error)
    }
  }

  async getActiveTask(taskId) {
    try {
      const res = await api.get('/tasks/' + taskId)
      logger.log('from the service')
      AppState.activeTask = res.data
    } catch (error) {
      logger.error(error)
    }
  }
}

export const tasksService = new TasksService()
