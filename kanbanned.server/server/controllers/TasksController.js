import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { tasksService } from '../services/TasksService'
import { commentsService } from '../services/CommentsService'
export class TasksController extends BaseController {
  constructor() {
    super('api/tasks')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('/:taskId/comments', this.getCommentsByTaskId)

      // .get('', this.getTasks)
    // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
      .post('', this.createTasks)
      .delete('/:taskId', this.deleteTask)
      .get('/:taskId', this.getTaskById)
  }

  async getCommentsByTaskId(req, res, next) {
    try {
      return res.send(await commentsService.getComments({ task: req.params.taskId }))
    } catch (error) {
      next(error)
    }
  }

  // async getTasks(req, res, next) {
  //   try {
  //     return res.send(await tasksService.getTasks())
  //   } catch (error) {
  //     next(error)
  //   }
  // }

  async createTasks(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      req.body.creatorEmail = req.userInfo.email
      console.log(req.body.creatorId)
      res.send(await tasksService.createTasks(req.body))
    } catch (error) {
      next(error)
    }
  }

  async deleteTask(req, res, next) {
    try {
      const userId = req.userInfo.id
      res.send(await tasksService.deleteTask(req.params.taskId, userId))
    } catch (error) {
      next(error)
    }
  }

  async getTaskById(req, res, next) {
    try {
      return res.send(await tasksService.getTaskById(req.params.listId))
    } catch (error) {
      next(error)
    }
  }
}
