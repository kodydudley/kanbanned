import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { boardsService } from '../services/BoardsService'
import { listsService } from '../services/ListsService'
export class BoardController extends BaseController {
  constructor() {
    super('api/boards')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getBoards)
      .get('/:boardId/lists', this.getListsByBoardId)
    // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
      .post('', this.createBoards)
      .delete('/:boardId', this.deleteBoard)
      .get('/:boardId', this.getBoardById)
  }

  async getListsByBoardId(req, res, next) {
    try {
      return res.send(await listsService.getLists({ board: req.params.boardId }))
    } catch (error) {
      next(error)
    }
  }

  async getBoards(req, res, next) {
    try {
      return res.send(await boardsService.getBoards({ creatorId: req.userInfo.id }))
    } catch (error) {
      next(error)
    }
  }

  async createBoards(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      req.body.creatorEmail = req.userInfo.email
      // console.log(req.body.creatorId)
      res.send(await boardsService.createBoards(req.body))
    } catch (error) {
      next(error)
    }
  }

  async deleteBoard(req, res, next) {
    try {
      const userId = req.userInfo.id
      res.send(await boardsService.deleteBoard(req.params.boardId, userId))
    } catch (error) {
      next(error)
    }
  }

  async getBoardById(req, res, next) {
    try {
      return res.send(await boardsService.getBoardById(req.params.boardId))
    } catch (error) {
      next(error)
    }
  }
}
