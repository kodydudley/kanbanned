import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Boards = new Schema(
  {
    title: { type: String, required: true },
    creatorId: { type: String, ref: 'Profile', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

Boards.virtual('creator', {
  localField: 'creatorId',
  ref: 'Profile',
  foreignField: '_id',
  justOne: true
})

export default Boards
