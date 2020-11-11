import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { commentsService } from '../services/CommentsService'
export class CommentsController extends BaseController {
  constructor() {
    super('api/comments')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)

    // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
      .post('', this.createComments)
      .delete('/:commentId', this.deleteComment)
      .get('/:commentId', this.getCommentById)
  }

  async createComments(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      req.body.creatorEmail = req.userInfo.email
      console.log(req.body.creatorId)
      res.send(await commentsService.createComments(req.body))
    } catch (error) {
      next(error)
    }
  }

  async deleteComment(req, res, next) {
    try {
      const userId = req.userInfo.id
      res.send(await commentsService.deleteComment(req.params.taskId, userId))
    } catch (error) {
      next(error)
    }
  }

  async getCommentById(req, res, next) {
    try {
      return res.send(await commentsService.getCommentById(req.params.taskId))
    } catch (error) {
      next(error)
    }
  }
}
