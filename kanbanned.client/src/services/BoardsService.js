import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class BoardsService {
  async createBoards(data) {
    try {
      const res = await api.post('/boards', data)
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

  async deleteBoard(boardId) {
    try {
      const res = await api.delete('/boards/' + boardId)
      AppState.boards = res.data
    } catch (error) {
      logger.error(error)
    }
  }

  async getActiveBoard(boardId) {
    try {
      const res = await api.get('/boards/' + boardId)
      AppState.activeBoard = res.data
    } catch (error) {
      logger.error(error)
    }
  }
}

export const boardsService = new BoardsService()
