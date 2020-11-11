import mongoose from 'mongoose'
import BoardsSchema from '../models/Boards'
import ProfileSchema from '../models/Profile'
import ListsSchema from '../models/Lists'
import TasksSchema from '../models/Tasks'
import CommentsSchema from '../models/Comments'

class DbContext {
  Boards = mongoose.model('Boards', BoardsSchema);

  Lists = mongoose.model('Lists', ListsSchema);

  Tasks = mongoose.model('Tasks', TasksSchema);

  Comments = mongoose.model('Comments', CommentsSchema)

  Profile = mongoose.model('Profile', ProfileSchema);
}

export const dbContext = new DbContext()
