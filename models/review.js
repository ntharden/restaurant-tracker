import mongoose from 'mongoose'

const Schema = mongoose.Schema

const reviewSchema = new Schema({
  name: String,
  thumbsUp: Boolean,
  author: {type: Schema.Types.ObjectId, ref: "Author"}
}, {
  timestamps: true,
})

const Review = mongoose.model('Review', reviewSchema)

export {
  Review
}
