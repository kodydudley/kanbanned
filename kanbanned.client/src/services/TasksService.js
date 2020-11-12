import { AppState } from '../AppState'
// import router from '../router'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class TasksService {
  async createTasks(data, lists) {
    try {
      const newtask = {
        description: data,
        list: lists.id
      }
      const res = await api.post('/tasks', newtask)
      this.getTasks(lists.id)
      logger.log(res.data)
    } catch (error) {
      logger.error(error)
    }
  }

  async moveTask(tasksProps, listsId) {
    try {
      const newListId = {
        list: listsId
      }
      await api.put('tasks/' + tasksProps.id, newListId)
      this.getTasks(listsId)
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

  async deleteTask(task) {
    try {
      await api.delete('/tasks/' + task.id)
      this.getTasks(task.list)
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
