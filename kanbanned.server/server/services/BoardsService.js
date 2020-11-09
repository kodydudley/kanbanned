import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'
import Board from '../models/Board'
class BoardsService {
  async find(query = {}) {
    const Boards = await dbContext.Boards.find(query)
    return Boards
  }

  async createBoard(body) {
    return await dbContext.Boards.create(body)
  }

  async findById(id) {
    const board = await dbContext.Boards.findById(id)
    if (!board) {
      throw new BadRequest('Invalid Id')
    }
    return board
  }
}

export const boardsService = new BoardsService()
