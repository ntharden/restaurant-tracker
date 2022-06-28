import mongoose from 'mongoose'

const Schema = mongoose.Schema

const reviewSchema = new Schema({
  name: String,
  thumbsUp: Boolean,
  owner: {type: Schema.Types.ObjectId, ref: "Profile"}
}, {
  timestamps: true,
})

const Review = mongoose.model('Review', reviewSchema)

export {
  Review
}
