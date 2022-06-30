import mongoose from 'mongoose'

const Schema = mongoose.Schema

const factSchema = new Schema({
  text: String
}, {
  timestamps: true
})

const profileSchema = new Schema({
  name: String,
  avatar: String,
  facts: [factSchema],
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
