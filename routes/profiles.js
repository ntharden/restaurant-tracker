// This is from https://github.com/SEI-Remote/sei-students/blob/main/routes/profiles.js

import { Router } from 'express'
import * as profilesCtrl from '../controllers/profiles.js'

const router = Router()

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next()
  res.redirect('/auth/google')
}


export {
  router
}