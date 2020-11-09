import mongoose from 'mongoose'
import BoardSchema from '../models/Board'
import ProfileSchema from '../models/Profile'

class DbContext {
  Boards = mongoose.model('Board', BoardSchema);
  Profile = mongoose.model('Profile', ProfileSchema);
}

export const dbContext = new DbContext()
