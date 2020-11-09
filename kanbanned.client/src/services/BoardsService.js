import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class BoardsService {
  async createBoards() {
    try {
      const res = await api.post('/boards')
      AppState.boards = res.data
    } catch (error) {
      logger.error(error)
    }
  }

  async getBoards() {
    try {
      const res = await api.get('/boards')
      AppState.boards = res.data
    } catch (err) {
      logger.error('HAVE YOU STARTED YOUR SERVER YET???', err)
    }
  }
}

export const boardsService = new BoardsService()
