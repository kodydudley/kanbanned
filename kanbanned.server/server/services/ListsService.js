import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'
import Lists from '../models/Lists'
class ListsService {
  async getLists(query = {}) {
    return await dbContext.Lists.find(query).populate('creatorId')
  }

  async createLists(body) {
    return await dbContext.Lists.create(body)
  }

  async deleteList(listId, userId) {
    const exists = await dbContext.Lists.findById(listId)
    if (!exists) {
      throw new BadRequest('This list does not exist')
    } else if (exists._doc.creatorId == userId) {
      await dbContext.Lists.findByIdAndDelete(listId)
      return 'The list has been deleted'
    }
  }

  async getListById(listId) {
    return await dbContext.Lists.findById(listId)
  }
}

export const listsService = new ListsService()
