import mongoose from 'mongoose'
import BoardsSchema from '../models/Boards'
import ProfileSchema from '../models/Profile'

class DbContext {
  Boards = mongoose.model('Boards', BoardsSchema);
  Profile = mongoose.model('Profile', ProfileSchema);
}

export const dbContext = new DbContext()
