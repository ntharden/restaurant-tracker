import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  googleId: String, //will use for personalized displays - stretch
  profile: { type: mongoose.Schema.Types.ObjectId, ref: 'Profile' },
}, {
  timestamps: true,
})

const User = mongoose.model('User', userSchema)

export {
  User
}
