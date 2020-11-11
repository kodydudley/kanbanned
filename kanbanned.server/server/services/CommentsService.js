import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'
import Comments from '../models/Comments'
class CommentsService {
  async getComments(query = {}) {
    return await dbContext.Comments.find(query).populate('creatorId')
  }

  async createComments(body) {
    return await dbContext.Comments.create(body)
  }

  async deleteComment(taskId, userId) {
    const exists = await dbContext.Comments.findById(taskId)
    if (!exists) {
      throw new BadRequest('This task does not exist')
    } else if (exists._doc.creatorId == userId) {
      await dbContext.Comments.findByIdAndDelete(taskId)
      return 'The task has been deleted'
    }
  }

  async getCommentById(taskId) {
    return await dbContext.Comments.findById(taskId)
  }
}

export const commentsService = new CommentsService()
