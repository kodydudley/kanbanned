import { AppState } from '../AppState'
// import router from '../router'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class ListsService {
  async createLists(data) {
    try {
      const newList = {
        description: data,
        board: AppState.activeBoard.id
      }
      const res = await api.post('/lists', newList)
      this.getLists(AppState.activeBoard.id)
      logger.log(res.data)
    } catch (error) {
      logger.error(error)
    }
  }

  async getLists(boardId) {
    try {
      const res = await api.get('/boards/' + boardId + '/lists')
      AppState.lists = res.data
    } catch (err) {
      logger.error('HAVE YOU STARTED YOUR SERVER YET???', err)
    }
  }

  async deleteList(listId) {
    try {
      const res = await api.delete('/lists/' + listId)
      AppState.lists = res.data
      this.getLists()
    } catch (error) {
      logger.error(error)
    }
  }

  async getActiveList(listId) {
    try {
      const res = await api.get('/Lists/' + listId)
      logger.log('from the service')
      AppState.activeList = res.data
    } catch (error) {
      logger.error(error)
    }
  }
}

export const listsService = new ListsService()
