import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'
import Boards from '../models/Boards'
class BoardsService {
  async getBoards(query = {}) {
    return await dbContext.Boards.find(query).populate('creatorId')
  }

  async createBoards(body) {
    return await dbContext.Boards.create(body)
  }

  async deleteBoard(boardId, userId) {
    const exists = await dbContext.Boards.findById(boardId)
    if (!exists) {
      throw new BadRequest('This board does not exist')
    } else if (exists._doc.creatorId == userId) {
      await dbContext.Boards.findByIdAndDelete(boardId)
      return 'The board has been deleted'
    }
  }

  async getBoardById(boardId) {
    return await dbContext.Boards.findById(boardId)
  }
}

export const boardsService = new BoardsService()
