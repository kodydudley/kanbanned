import mongoose from 'mongoose'
import BoardsSchema from '../models/Boards'
import ProfileSchema from '../models/Profile'
import ListsSchema from '../models/Lists'
import TasksSchema from '../models/Tasks'

class DbContext {
  Boards = mongoose.model('Boards', BoardsSchema);

  Lists = mongoose.model('Lists', ListsSchema);

  Tasks = mongoose.model('Tasks', TasksSchema);

  Profile = mongoose.model('Profile', ProfileSchema);
}

export const dbContext = new DbContext()
