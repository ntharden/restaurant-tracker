import mongoose from 'mongoose'

const Schema = mongoose.Schema

const reviewSchema = new Schema({
  content: String,
  thumbsUp: Boolean,
  author: {type: Schema.Types.ObjectId, ref: "Profile"}
}, {
  timestamps: true,
})

const restaurantSchema = new Schema({
  name: String,
  reviews: [reviewSchema],
}, {
  timestamps: true,
})

const Restaurant = mongoose.model('Restaurant', restaurantSchema)

export {
  Restaurant
}