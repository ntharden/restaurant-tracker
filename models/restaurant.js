import mongoose from 'mongoose'

const Schema = mongoose.Schema

const restaurantSchema = new Schema({
  name: String,
  thumbsUp: Boolean
}, {
  timestamps: true,
})

const Restaurant = mongoose.model('Restaurant', restaurantSchema)

export {
  Restaurant
}