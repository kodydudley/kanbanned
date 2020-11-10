import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Lists = new Schema(
  {
    description: { type: String, required: true },
    creatorId: { type: String, ref: 'Profile', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

Lists.virtual('creator', {
  localField: 'creatorId',
  ref: 'Profile',
  foreignField: '_id',
  justOne: true
})

export default Lists
