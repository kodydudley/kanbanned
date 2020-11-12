import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class BoardsService {
  async createBoards(data) {
    try {
      const res = await api.post('/boards', data)
      this.getBoards()
      logger.log(res.data)
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

  async deleteBoard(boardId) {
    try {
      await api.delete('/boards/' + boardId)
      this.getBoards()
    } catch (error) {
      logger.error(error)
    }
  }

  async getActiveBoard(boardId) {
    try {
      const res = await api.get('/boards/' + boardId)
      logger.log('from the service')
      AppState.activeBoard = res.data
    } catch (error) {
      logger.error(error)
    }
  }
}

export const boardsService = new BoardsService()
