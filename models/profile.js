import mongoose from 'mongoose'

const Schema = mongoose.Schema

const profileSchema = new Schema({
  _id: Schema.Types.ObjectId
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
