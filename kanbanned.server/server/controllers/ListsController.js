import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { listsService } from '../services/ListsService'
import { tasksService } from '../services/TasksService'
export class ListsController extends BaseController {
  constructor() {
    super('api/lists')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      // .get('', this.getLists)
      .get('/:listId/tasks', this.getTasksByListId)
    // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
      .post('', this.createLists)
      .delete('/:listId', this.deleteList)
      .get('/:listId', this.getListById)
  }

  async getTasksByListId(req, res, next) {
    try {
      return res.send(await tasksService.getTasks({ list: req.params.listId }))
    } catch (error) {
      next(error)
    }
  }

  // async getLists(req, res, next) {
  //   try {
  //     return res.send(await listsService.getLists())
  //   } catch (error) {
  //     next(error)
  //   }
  // }

  async createLists(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      req.body.creatorEmail = req.userInfo.email
      console.log(req.body.creatorId)
      res.send(await listsService.createLists(req.body))
    } catch (error) {
      next(error)
    }
  }

  async deleteList(req, res, next) {
    try {
      const userId = req.userInfo.id
      res.send(await listsService.deleteList(req.params.listId, userId))
    } catch (error) {
      next(error)
    }
  }

  async getListById(req, res, next) {
    try {
      return res.send(await listsService.getListById(req.params.listId))
    } catch (error) {
      next(error)
    }
  }
}
