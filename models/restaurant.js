import mongoose from 'mongoose'

const Schema = mongoose.Schema

const reviewSchema = new Schema({
  content: String,
  thumbsUp: Boolean,
}, {
  timestamps: true,
})

const restaurantSchema = new Schema({
  name: String,
  reviews: [reviewSchema]
}, {
  timestamps: true,
})

const Restaurant = mongoose.model('Restaurant', restaurantSchema)

export {
  Restaurant
}