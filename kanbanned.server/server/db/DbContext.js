import mongoose from 'mongoose'
import BoardsSchema from '../models/Boards'
import ProfileSchema from '../models/Profile'
import ListsSchema from '../models/Lists'

class DbContext {
  Boards = mongoose.model('Boards', BoardsSchema);

  Lists = mongoose.model('Lists', ListsSchema);

  Profile = mongoose.model('Profile', ProfileSchema);
}

export const dbContext = new DbContext()
