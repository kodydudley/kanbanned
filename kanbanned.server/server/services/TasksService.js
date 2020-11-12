import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'
import Tasks from '../models/Tasks'
class TasksService {
  async getTaskByIdAndUpdate(taskId, body) {
    return await dbContext.Tasks.findByIdAndUpdate(taskId, body)
  }

  async getTasks(query = {}) {
    return await dbContext.Tasks.find(query).populate('creatorId')
  }

  async createTasks(body) {
    return await dbContext.Tasks.create(body)
  }

  async deleteTask(taskId, userId) {
    const exists = await dbContext.Tasks.findById(taskId)
    if (!exists) {
      throw new BadRequest('This task does not exist')
    } else if (exists._doc.creatorId == userId) {
      await dbContext.Tasks.findByIdAndDelete(taskId)
      return 'The task has been deleted'
    }
  }

  async getTaskById(taskId) {
    return await dbContext.Tasks.findById(taskId)
  }
}

export const tasksService = new TasksService()
