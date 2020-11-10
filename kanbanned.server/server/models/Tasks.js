import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const Tasks = new Schema(
  {
    description: { type: String, required: true },
    list: { type: ObjectId, ref: 'Lists', required: true },
    creatorId: { type: String, ref: 'Profile', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

Tasks.virtual('creator', {
  localField: 'creatorId',
  ref: 'Profile',
  foreignField: '_id',
  justOne: true
})

export default Tasks
